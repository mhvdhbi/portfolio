'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Logo } from './Logo'
import { mailHref, site } from '@/lib/site'

const links = [
  { href: '#travaux', label: 'Travaux' },
  { href: '#savoir-faire', label: 'Savoir-faire' },
  { href: '#methode', label: 'Méthode' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-cyan focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-void"
      >
        Aller au contenu
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'border-b border-line bg-void/80 py-3 backdrop-blur-xl'
            : 'border-b border-transparent py-5'
        }`}
      >
        <div className="container-y flex items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-[14px] font-medium text-text-2 transition-colors hover:text-text after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-cyan after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            {site.github && (
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hidden rounded-full border border-line p-2.5 text-text-2 transition-colors hover:border-cyan hover:text-cyan sm:inline-flex"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.2 9.2 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 3.9-1.4 6.8-5.2 6.8-9.7C22 6.6 17.5 2 12 2Z" />
                </svg>
              </a>
            )}

            {/* Shorter label below sm: "Me contacter" wrapped to two lines on
                a 390px screen and crowded the wordmark. */}
            <a
              href={mailHref()}
              className="btn-primary whitespace-nowrap px-4 py-2.5 text-[13px] sm:px-5 sm:text-[14px]"
            >
              <span className="sm:hidden">Contact</span>
              <span className="hidden sm:inline">Me contacter</span>
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              className="inline-flex flex-col items-center justify-center gap-1.5 rounded-full border border-line p-3 lg:hidden"
            >
              <span className="block h-px w-4 bg-text" />
              <span className="block h-px w-4 bg-text" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-60 bg-void/97 backdrop-blur-xl lg:hidden"
          >
            <div className="container-y flex h-full flex-col">
              <div className="flex items-center justify-between py-5">
                <Logo id="mobile" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fermer"
                  className="rounded-full border border-line p-3 text-text"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-1 flex-col justify-center gap-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="display-md border-b border-line py-5 text-text transition-colors hover:text-cyan"
                  >
                    <span className="mr-4 font-mono text-[11px] text-text-3">
                      0{i + 1}
                    </span>
                    {l.label}
                  </motion.a>
                ))}
              </nav>

              <a href={mailHref()} className="btn-primary mb-10 w-full">
                {site.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
