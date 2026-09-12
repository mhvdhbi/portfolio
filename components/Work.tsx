import { projects, type Project } from '@/lib/projects'
import { mailHref } from '@/lib/site'
import { Reveal } from './Reveal'
import { Frame } from './Frame'

function StatusBadge({ status }: { status: Project['status'] }) {
  const live = status === 'live'
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
        live ? 'bg-accent-soft text-accent-deep' : 'bg-paper-2 text-ink-2'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-accent' : 'bg-ink-3'}`} />
      {live ? 'En ligne' : 'Refonte proposée'}
    </span>
  )
}

function CaseStudy({ p }: { p: Project }) {
  return (
    <article className="mt-14">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-paper-3 pb-6">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="display-lg">{p.name}</h3>
              <StatusBadge status={p.status} />
            </div>
            <p className="mt-2 text-[15px] text-ink-3">
              {p.sector} · {p.city} · {p.year}
            </p>
          </div>
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-5 py-2.5 text-[14px]"
            >
              Voir le site
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

      <Reveal delay={0.08}>
        <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-ink-2">{p.summary}</p>
      </Reveal>

      {/* Hard numbers first — a prospect skims, and every one of these can be
          checked by anyone who wants to. */}
      <Reveal delay={0.12}>
        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper-3 bg-paper-3 lg:grid-cols-4">
          {p.metrics.map((m) => (
            <div key={m.label} className="bg-paper px-5 py-6">
              <dt className="font-display text-3xl font-bold tracking-tight text-accent">
                {m.value}
              </dt>
              <dd className="mt-1.5 text-[13px] font-medium leading-snug">{m.label}</dd>
              {m.note && <dd className="mt-1 text-[11px] leading-snug text-ink-3">{m.note}</dd>}
            </div>
          ))}
        </dl>
      </Reveal>

      {p.shots.before && (
        <div className="mt-16">
          <Reveal>
            <p className="eyebrow">Avant / Après</p>
            <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-ink-2">
              {p.problem}
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-ink-3">
                Avant
              </p>
              <Frame
                src={p.shots.before}
                alt={`${p.name} — site existant`}
                label="site existant"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-accent">
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
          <p className="eyebrow">Ce que j&rsquo;ai construit</p>
          <ul className="mt-5 space-y-4">
            {p.solution.map((s) => (
              <li key={s} className="flex gap-3">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
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
                <span className="text-[15px] leading-relaxed text-ink-2">{s}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-paper-3 px-3 py-1.5 text-[12px] font-medium text-ink-2"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {p.shots.coverMobile && (
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="flex items-end gap-6">
              <img
                src={p.shots.coverMobile}
                alt={`${p.name} — version mobile`}
                loading="lazy"
                className="w-40 rounded-[1.75rem] border-[6px] border-ink shadow-[0_30px_60px_-30px_rgba(18,18,21,0.5)] sm:w-52"
              />
              {p.shots.beforeMobile && (
                <img
                  src={p.shots.beforeMobile}
                  alt={`${p.name} — mobile, version existante`}
                  loading="lazy"
                  className="w-32 rounded-[1.5rem] border-[5px] border-paper-4 opacity-70 shadow-[0_20px_40px_-25px_rgba(18,18,21,0.4)] sm:w-40"
                />
              )}
            </div>
            <p className="mt-4 text-[12px] text-ink-3">
              Sur mobile : la nouvelle version à gauche, l&rsquo;existante à droite.
            </p>
          </Reveal>
        )}
      </div>

      {p.shots.gallery && (
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {p.shots.gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 2) * 0.08}>
              <Frame src={g.src} alt={g.caption} />
              <p className="mt-3 text-[13px] text-ink-3">{g.caption}</p>
            </Reveal>
          ))}
        </div>
      )}

      {/* Said plainly. A prospect who phones the restaurant will find out
          either way, and being straight about it reads as confidence. */}
      {p.status === 'concept' && (
        <Reveal>
          <p className="mt-12 rounded-2xl border border-paper-3 bg-paper-2 px-5 py-4 text-[13px] leading-relaxed text-ink-2">
            Ce site a été conçu, développé et mis en ligne comme proposition de
            refonte. Le restaurant exploite toujours son site actuel.
          </p>
        </Reveal>
      )}
    </article>
  )
}

export function Work() {
  const [featured, ...rest] = projects

  return (
    <section id="travaux" className="scroll-mt-24 border-t border-paper-3 py-20 sm:py-28">
      <div className="container-p">
        <Reveal>
          <p className="eyebrow">Réalisations</p>
          <h2 className="display-lg mt-4 max-w-[18ch]">
            Des sites construits pour des commerces réels.
          </h2>
        </Reveal>

        {featured && <CaseStudy p={featured} />}

        {rest.length > 0 && (
          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.08}>
                <a
                  href={p.liveUrl ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-paper-3 bg-paper transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_28px_60px_-35px_rgba(18,18,21,0.45)]"
                >
                  <img
                    src={p.shots.cover}
                    alt={p.name}
                    loading="lazy"
                    className="aspect-16/10 w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <h3 className="display-md">{p.name}</h3>
                      <StatusBadge status={p.status} />
                    </div>
                    <p className="mt-1.5 text-[13px] text-ink-3">{p.sector}</p>
                    <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{p.summary}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}

        {/* Invites the prospect to picture their own business in the list, and
            keeps a one-project portfolio from reading as thin. */}
        <Reveal delay={0.1}>
          <a
            href={mailHref('Mon commerce — demande de site')}
            className="group mt-6 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-paper-4 px-8 py-14 text-center transition-colors hover:border-accent"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-paper-2 text-ink-3 transition-colors group-hover:bg-accent group-hover:text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="display-md mt-5">Votre commerce ici</span>
            <span className="mt-2 max-w-[42ch] text-[14px] text-ink-3">
              Racontez-moi votre activité et je vous montre à quoi pourrait
              ressembler votre site.
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
