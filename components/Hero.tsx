import type { CSSProperties } from 'react'
import { site, mailHref } from '@/lib/site'
import { projects } from '@/lib/projects'
import { HeroCanvas } from './HeroCanvas'

const d = (s: number) => ({ '--delay': `${s}s` }) as CSSProperties

/**
 * Server component. Everything above the fold animates with CSS, so the LCP
 * element paints before hydration rather than after it — only the decorative
 * canvas is client-side, and the hero reads correctly without it.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-48 lg:pb-28">
      <HeroCanvas className="opacity-90" />

      {/* Keeps the type legible wherever the field happens to be dense. */}
      <div
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(60% 60% at 22% 45%, rgba(8,8,11,0.92) 0%, rgba(8,8,11,0.55) 45%, transparent 75%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{ background: 'linear-gradient(180deg, transparent, var(--color-void))' }}
      />

      <div className="container-y relative z-10">
        <div
          className="rise inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-4 py-2 backdrop-blur-sm"
          style={d(0.05)}
        >
          {site.available && (
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping-dot absolute inline-flex h-full w-full rounded-full bg-cyan" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
            </span>
          )}
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-2">
            {site.available ? 'Disponible pour de nouveaux projets' : site.role}
          </span>
        </div>

        <h1 className="rise display-xl mt-8 max-w-[15ch]" style={d(0.12)}>
          Youssef{' '}
          <span className="gradient-text">Mhadhbi</span>
          <span className="mt-3 block text-text-2">développeur web</span>
        </h1>

        <p
          className="rise mt-8 max-w-[56ch] text-lg leading-relaxed text-text-2"
          style={d(0.24)}
        >
          Je conçois et je code des sites sur mesure — design original, bilingue
          français/arabe, rapides, et construits pour être trouvés sur Google.
          Basé à {site.city}.
        </p>

        <div
          className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={d(0.32)}
        >
          <a href="#travaux" className="btn-primary w-full sm:w-auto">
            Voir mes travaux
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path
                d="M5 12h13M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </a>
          <a href={mailHref()} className="btn-outline w-full sm:w-auto">
            Démarrer un projet
          </a>
        </div>

        <dl
          className="rise mt-20 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4"
          style={d(0.42)}
        >
          {[
            { v: `0${projects.length}`, l: 'projet livré' },
            { v: '100', l: 'score SEO Lighthouse' },
            { v: 'FR/AR', l: 'sites bilingues' },
            { v: '0 DH', l: 'hébergement mensuel' },
          ].map((s) => (
            <div key={s.l} className="border-t border-line pt-4">
              <dt className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {s.v}
              </dt>
              <dd className="mt-1.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-text-3">
                {s.l}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
