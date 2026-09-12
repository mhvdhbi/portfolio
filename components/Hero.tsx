import type { CSSProperties } from 'react'
import { site, mailHref } from '@/lib/site'
import { projects } from '@/lib/projects'

const d = (s: number) => ({ '--delay': `${s}s` }) as CSSProperties

/**
 * Not a client component — the hero animates with CSS so it paints before
 * hydration and survives a JS failure. The LCP element is here.
 */
export function Hero() {
  const stats = [
    { value: `${projects.length}`, label: projects.length > 1 ? 'projets réalisés' : 'projet réalisé' },
    { value: '100', label: 'score SEO Google' },
    { value: '2', label: 'langues par site' },
  ]

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-44">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 45% at 75% 10%, rgba(44,92,255,0.10) 0%, transparent 65%)',
        }}
      />

      <div className="container-p relative">
        <p className="rise eyebrow" style={d(0.05)}>
          {site.role} · {site.city}
        </p>

        <h1 className="rise display-xl mt-5 max-w-[16ch]" style={d(0.12)}>
          Un site qui fait{' '}
          <span className="text-accent">venir des clients.</span>
        </h1>

        <p
          className="rise mt-7 max-w-[58ch] text-lg leading-relaxed text-ink-2"
          style={d(0.22)}
        >
          Rapide, bilingue français/arabe, et construit pour que Google puisse
          vraiment le lire. Pour les restaurants, commerces et artisans de {site.city}.
        </p>

        <div className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={d(0.3)}>
          <a href="#travaux" className="btn-accent w-full sm:w-auto">
            Voir les réalisations
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
          <a href={mailHref()} className="btn-ghost w-full sm:w-auto">
            Discuter de votre projet
          </a>
        </div>

        <dl
          className="rise mt-16 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-paper-3 bg-paper-3"
          style={d(0.4)}
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-paper px-5 py-6">
              <dt className="font-display text-3xl font-bold tracking-tight">{s.value}</dt>
              <dd className="mt-1.5 text-[12px] leading-snug text-ink-3">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
