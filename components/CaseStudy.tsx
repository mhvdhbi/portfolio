import type { Project } from '@/lib/projects'
import { Reveal } from './Reveal'
import { Frame } from './Frame'

/**
 * Full case study — rendered on the project's own page, never on the home
 * grid. This is where the detail belongs: someone who clicks through has
 * already decided they want it.
 */
export function CaseStudy({ p }: { p: Project }) {
  const live = p.status === 'live'

  return (
    <article className="pt-28 pb-20 sm:pt-32">
      <div className="container-y">
        <Reveal>
          <a
            href="/#travaux"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-text-3 transition-colors hover:text-cyan"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
              <path
                d="M19 12H6M11 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            Tous les travaux
          </a>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-b border-line pb-8">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="display-lg">{p.name}</h1>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
                    live
                      ? 'border-cyan/30 bg-cyan/10 text-cyan'
                      : 'border-line-2 bg-surface-2 text-text-2'
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-cyan' : 'bg-text-3'}`} />
                  {live ? 'En ligne' : 'Refonte proposée'}
                </span>
              </div>
              <p className="mt-2 font-mono text-[12px] text-text-3">
                {p.sector} · {p.city} · {p.year}
              </p>
            </div>

            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-5 py-2.5 text-[14px]"
              >
                Visiter le site
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                  <path
                    d="M7 17L17 7M9 7h8v8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-text-2">{p.summary}</p>
        </Reveal>

        {/* Numbers up front — every one of them can be verified. */}
        <Reveal delay={0.08}>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {p.metrics.map((m) => (
              <div key={m.label} className="bg-surface px-5 py-6">
                <dt className="gradient-text font-display text-3xl font-extrabold tracking-tight">
                  {m.value}
                </dt>
                <dd className="mt-2 text-[13px] font-medium leading-snug text-text">{m.label}</dd>
                {m.note && (
                  <dd className="mt-1 font-mono text-[10px] leading-snug text-text-3">{m.note}</dd>
                )}
              </div>
            ))}
          </dl>
        </Reveal>

        {p.shots.before && (
          <div className="mt-16">
            <Reveal>
              <p className="label">Avant / Après</p>
              <p className="mt-4 max-w-[64ch] text-[15px] leading-relaxed text-text-2">
                {p.problem}
              </p>
            </Reveal>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-text-3">
                  Avant
                </p>
                <Frame
                  src={p.shots.before}
                  alt={`${p.name} — site existant`}
                  label="site existant"
                  className="opacity-80"
                />
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-cyan">
                  Après
                </p>
                <Frame
                  src={p.shots.cover}
                  alt={`${p.name} — nouvelle version`}
                  label={p.liveUrl?.replace('https://', '')}
                />
              </Reveal>
            </div>
          </div>
        )}

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="label">Ce que j&rsquo;ai construit</p>
            <ul className="mt-6 space-y-4">
              {p.solution.map((s) => (
                <li key={s} className="flex gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    className="mt-0.5 h-4 w-4 shrink-0 text-cyan"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12.5l4.5 4.5L19 7.5"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                  <span className="text-[15px] leading-relaxed text-text-2">{s}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line-2 px-3 py-1.5 font-mono text-[11px] text-text-2"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          {p.shots.coverMobile && (
            <Reveal delay={0.08} className="lg:col-span-7">
              <div className="flex items-end gap-6">
                <img
                  src={p.shots.coverMobile}
                  alt={`${p.name} — version mobile`}
                  loading="lazy"
                  className="w-40 rounded-[1.75rem] border-[6px] border-surface-3 shadow-[0_40px_70px_-35px_rgba(0,0,0,0.9)] sm:w-52"
                />
                {p.shots.beforeMobile && (
                  <img
                    src={p.shots.beforeMobile}
                    alt={`${p.name} — mobile, version existante`}
                    loading="lazy"
                    className="w-32 rounded-[1.5rem] border-[5px] border-line opacity-50 shadow-[0_30px_50px_-30px_rgba(0,0,0,0.9)] sm:w-40"
                  />
                )}
              </div>
              <p className="mt-4 font-mono text-[11px] text-text-3">
                Mobile : nouvelle version à gauche, existante à droite.
              </p>
            </Reveal>
          )}
        </div>

        {p.shots.gallery && (
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {p.shots.gallery.map((g, i) => (
              <Reveal key={g.src} delay={(i % 2) * 0.06}>
                <Frame src={g.src} alt={g.caption} />
                <p className="mt-3 font-mono text-[11px] text-text-3">{g.caption}</p>
              </Reveal>
            ))}
          </div>
        )}

        {/* Anyone who rings the business finds out either way. */}
        {!live && (
          <Reveal>
            <p className="mt-12 rounded-2xl border border-line bg-surface px-5 py-4 text-[13px] leading-relaxed text-text-2">
              Site conçu, développé et mis en ligne comme proposition de refonte.
              Le restaurant exploite toujours son site actuel.
            </p>
          </Reveal>
        )}
      </div>
    </article>
  )
}
