import { site, mailHref, waHref } from '@/lib/site'
import { Reveal } from './Reveal'

export function Contact() {
  const wa = waHref('Bonjour Youssef, je souhaite un site pour mon activité.')

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-line py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 70% at 50% 100%, rgba(34,211,238,0.14) 0%, transparent 70%)',
        }}
      />

      <div className="container-y text-center">
        <Reveal>
          <p className="label">Contact</p>
          <h2 className="display-lg mx-auto mt-5 max-w-[16ch]">
            Votre site, <span className="gradient-text">on en parle&nbsp;?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[50ch] text-lg leading-relaxed text-text-2">
            Dites-moi ce que vous faites et où vous êtes. Je reviens vers vous
            avec une proposition concrète — sans engagement.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <a href={mailHref()} className="btn-primary w-full sm:w-auto">
              {site.email}
            </a>
            {wa && (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full sm:w-auto"
              >
                WhatsApp {site.phoneDisplay}
              </a>
            )}
          </div>
        </Reveal>

        {/* Only while the number is unset — in Morocco most enquiries arrive on
            WhatsApp, so leaving this blank costs real leads. */}
        {!wa && (
          <p className="mt-6 font-mono text-[11px] text-text-3">
            Ajoutez votre numéro WhatsApp dans{' '}
            <span className="rounded bg-surface-2 px-1.5 py-0.5">lib/site.ts</span>
          </p>
        )}
      </div>
    </section>
  )
}
