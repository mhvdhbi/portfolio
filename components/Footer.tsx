import { site, displayName, mailHref } from '@/lib/site'
import { LogoMark } from './Logo'

const socials = [
  { key: 'github', href: site.github, label: 'GitHub' },
  { key: 'linkedin', href: site.linkedin, label: 'LinkedIn' },
].filter((s) => s.href)

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="container-y flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <LogoMark id="footer" className="h-7 w-7" />
          <span className="font-mono text-[11px] text-text-3">
            © {new Date().getFullYear()} {displayName} · {site.city}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.key}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-text-2 transition-colors hover:text-cyan"
            >
              {s.label}
            </a>
          ))}
          <a
            href={mailHref()}
            className="font-mono text-[11px] text-text-2 transition-colors hover:text-cyan"
          >
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
