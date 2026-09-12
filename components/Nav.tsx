'use client'

import { useEffect, useState } from 'react'
import { site, mailHref } from '@/lib/site'

const links = [
  { href: '#travaux', label: 'Réalisations' },
  { href: '#prestations', label: 'Prestations' },
  { href: '#methode', label: 'Méthode' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Aller au contenu
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'border-b border-paper-3 bg-paper/88 py-3 backdrop-blur-xl'
            : 'border-b border-transparent py-5'
        }`}
      >
        <div className="container-p flex items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink font-display text-[13px] font-bold text-paper">
              {site.initials}
            </span>
            <span className="font-display text-[15px] font-semibold tracking-tight">
              {site.name}
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[14px] font-medium text-ink-2 transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a href={mailHref()} className="btn-accent px-5 py-2.5 text-[14px]">
            Me contacter
          </a>
        </div>
      </header>
    </>
  )
}
