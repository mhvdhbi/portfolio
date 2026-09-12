'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ElementType, ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * Fires once, animates transform + opacity only, and degrades to plain visible
 * content under reduced motion — which is also what renders if the JavaScript
 * never arrives. Content must never be stranded at opacity 0.
 *
 * `as` matters for more than tidiness: wrapping an <li> in a <div> breaks list
 * semantics outright, because the list then contains a div and the item's
 * parent is no longer a list. Render the right element instead.
 */
export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: ElementType
}) {
  const reduced = useReducedMotion()

  if (reduced) {
    const Tag = as as ElementType
    return <Tag className={className}>{children}</Tag>
  }

  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}
