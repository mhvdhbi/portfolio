'use client'

import { useEffect, useRef } from 'react'

/**
 * Generative flow field behind the hero.
 *
 * The portfolio claims design and front-end capability, so the hero should
 * demonstrate it rather than describe it. Particles follow a smooth vector
 * field built from layered sines — no noise library, no dependency — and leave
 * fading trails in the brand gradient.
 *
 * Discipline, because a portfolio arguing for fast sites cannot ship a heater:
 *   - capped particle count, and lowered further on small screens
 *   - trails come from compositing a translucent fill, not from storing history
 *   - rAF stops entirely when the tab is hidden or the hero scrolls away
 *   - prefers-reduced-motion paints one static frame and never animates
 *   - purely decorative, so aria-hidden and never load-bearing for content
 */

const VIOLET = [124, 92, 255] as const
const CYAN = [34, 211, 238] as const

type P = { x: number; y: number; vx: number; vy: number; life: number; t: number }

export function HeroCanvas({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let dpr = 1
    let particles: P[] = []
    let raf = 0
    let time = 0
    let visible = true
    let running = true

    const count = () => {
      const base = Math.round((window.innerWidth < 640 ? 34 : 78))
      return base
    }

    const spawn = (): P => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: 0,
      vy: 0,
      life: 0,
      t: Math.random(),
    })

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = rect.width
      h = rect.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)
      particles = Array.from({ length: count() }, spawn)
    }

    /** Smooth vector field. Layered sines read as organic at this scale and
     *  cost a fraction of real simplex noise. */
    const angleAt = (x: number, y: number, t: number) => {
      const a = Math.sin(x * 0.0022 + t * 0.45) + Math.cos(y * 0.0019 - t * 0.33)
      const b = Math.sin((x + y) * 0.0013 + t * 0.21)
      return (a + b) * 1.35
    }

    const step = () => {
      time += 0.0042

      // Trails: lay down a translucent wash instead of clearing. Cheaper than
      // keeping per-particle history, and it fades old strokes naturally.
      ctx.globalCompositeOperation = 'source-over'
      ctx.fillStyle = 'rgba(8, 8, 11, 0.021)'
      ctx.fillRect(0, 0, w, h)

      ctx.globalCompositeOperation = 'lighter'
      ctx.lineCap = 'round'

      for (const p of particles) {
        const ang = angleAt(p.x, p.y, time)
        p.vx = Math.cos(ang) * 1.0
        p.vy = Math.sin(ang) * 1.0

        const px = p.x
        const py = p.y
        p.x += p.vx
        p.y += p.vy
        p.life += 1

        const mix = p.t
        const r = Math.round(VIOLET[0] + (CYAN[0] - VIOLET[0]) * mix)
        const g = Math.round(VIOLET[1] + (CYAN[1] - VIOLET[1]) * mix)
        const b = Math.round(VIOLET[2] + (CYAN[2] - VIOLET[2]) * mix)

        ctx.strokeStyle = `rgba(${r},${g},${b},0.52)`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(px, py)
        ctx.lineTo(p.x, p.y)
        ctx.stroke()

        // Recycle when it leaves the frame or gets old, so the field keeps
        // regenerating rather than settling into fixed grooves.
        if (p.x < -40 || p.x > w + 40 || p.y < -40 || p.y > h + 40 || p.life > 460) {
          Object.assign(p, spawn())
        }
      }

      ctx.globalCompositeOperation = 'source-over'
    }

    const loop = () => {
      if (!running || !visible) return
      step()
      raf = requestAnimationFrame(loop)
    }

    const start = () => {
      if (raf) return
      raf = requestAnimationFrame(loop)
    }
    const stop = () => {
      cancelAnimationFrame(raf)
      raf = 0
    }

    resize()

    if (reduced) {
      // One still frame: the composition without the motion.
      for (let i = 0; i < 240; i++) step()
      return () => {}
    }

    // Only animate while the hero is actually on screen.
    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting
        visible ? start() : stop()
      },
      { threshold: 0 }
    )
    io.observe(canvas)

    const onVisibility = () => {
      running = !document.hidden
      running && visible ? start() : stop()
    }

    let resizeTimer = 0
    const onResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(resize, 180)
    }

    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('resize', onResize)
    start()

    return () => {
      stop()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', onResize)
      window.clearTimeout(resizeTimer)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  )
}
