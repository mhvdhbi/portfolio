import { site, mailHref } from '@/lib/site'

const socials = [
  { key: 'github', href: site.github, label: 'GitHub' },
  { key: 'linkedin', href: site.linkedin, label: 'LinkedIn' },
].filter((s) => s.href)

export function Footer() {
  return (
    <footer className="border-t border-paper-3 py-12">
      <div className="container-p flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink font-display text-[12px] font-bold text-paper">
            {site.initials}
          </span>
          <span className="text-[13px] text-ink-3">
            © {new Date().getFullYear()} {site.name} · {site.city}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.key}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium text-ink-2 transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
          <a
            href={mailHref()}
            className="text-[13px] font-medium text-ink-2 transition-colors hover:text-accent"
          >
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
