import { displayName, site } from '@/lib/site'

/**
 * The mark: code brackets around an M — `<M>` for Mhadhbi.
 *
 * Drawn inline rather than loaded as a file so it inherits currentColor where
 * needed and never flashes. The gradient id is suffixed per instance because
 * two SVGs on one page sharing an id makes the second one render black.
 */
export function LogoMark({
  className = 'h-8 w-8',
  id = 'mark',
}: {
  className?: string
  id?: string
}) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`g-${id}`} x1="4" y1="10" x2="44" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7C5CFF" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <g
        stroke={`url(#g-${id})`}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13.5 15.5 6.5 24l7 8.5" />
        <path d="M18.5 32.5V17l5.5 8 5.5-8v15.5" />
        <path d="M34.5 15.5 41.5 24l-7 8.5" />
      </g>
    </svg>
  )
}

export function Logo({ id = 'nav' }: { id?: string }) {
  return (
    <a
      href="/"
      className="group flex items-center gap-2.5"
    >
      <LogoMark id={id} className="h-8 w-8 transition-transform duration-300 group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap font-display text-[15px] font-bold tracking-tight text-text">
          {displayName}
        </span>
        <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-text-3">
          {site.role}
        </span>
      </span>
    </a>
  )
}
