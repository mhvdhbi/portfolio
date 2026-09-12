'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

/** Fires once, animates transform + opacity only, and degrades to plain
 *  visible content under reduced motion — which is also what renders if the
 *  JavaScript never arrives. Content must never be stranded at opacity 0. */
export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const reduced = useReducedMotion()
  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
