import type { Project } from '@/lib/projects'

/**
 * Compact card for the home grid.
 *
 * The full case study lives on its own page. Keeping the homepage to cards is
 * the only way the portfolio survives a fifth project — otherwise every new
 * build makes the front page longer and less likely to be read to the end.
 */
export function ProjectCard({ p }: { p: Project }) {
  const live = p.status === 'live'
  const headline = p.metrics[0]

  return (
    <a
      href={`/travaux/${p.slug}/`}
      className="card group block overflow-hidden hover:-translate-y-1"
    >
      <div className="relative aspect-16/10 overflow-hidden">
        <img
          src={p.shots.cover}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span
          className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider backdrop-blur-sm ${
            live
              ? 'border-cyan/30 bg-void/70 text-cyan'
              : 'border-line-2 bg-void/70 text-text-2'
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-cyan' : 'bg-text-3'}`} />
          {live ? 'En ligne' : 'Refonte'}
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 p-5">
        <div className="min-w-0">
          <h3 className="display-md truncate">{p.name}</h3>
          <p className="mt-1 truncate font-mono text-[11px] text-text-3">{p.sector}</p>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          {headline && (
            <div className="hidden text-right sm:block">
              <div className="gradient-text font-display text-xl font-extrabold">
                {headline.value}
              </div>
              <div className="font-mono text-[9px] uppercase tracking-wider text-text-3">
                {headline.short ?? headline.label}
              </div>
            </div>
          )}
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-2 text-text-2 transition-colors group-hover:border-cyan group-hover:text-cyan">
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
          </span>
        </div>
      </div>
    </a>
  )
}
