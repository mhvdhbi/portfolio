import { site, mailHref, waHref } from '@/lib/site'
import { Reveal } from './Reveal'

export function Contact() {
  const wa = waHref('Bonjour, je souhaite un site pour mon commerce.')

  return (
    <section id="contact" className="border-t border-paper-3 bg-ink py-20 text-paper sm:py-28">
      <div className="container-p">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-paper-4">
            Contact
          </p>
          <h2 className="display-lg mt-4 max-w-[16ch] text-paper">
            Parlons de votre commerce.
          </h2>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-paper-4">
            Dites-moi ce que vous faites et où vous êtes. Je vous réponds avec
            une idée concrète de ce que pourrait être votre site — sans
            engagement.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={mailHref()} className="btn-accent w-full sm:w-auto">
              {site.email}
            </a>
            {wa && (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-[1.5px] border-paper-4/40 px-7 py-[0.95rem] text-[15px] font-semibold text-paper transition-colors hover:border-paper hover:bg-paper/10 sm:w-auto"
              >
                WhatsApp {site.phoneDisplay}
              </a>
            )}
          </div>
        </Reveal>

        {/* Shown only until the WhatsApp number is filled in — in Morocco most
            enquiries arrive there, so an empty button would cost real leads. */}
        {!wa && (
          <p className="mt-6 text-[12px] text-paper-4/70">
            Astuce : ajoutez votre numéro WhatsApp dans{' '}
            <code className="rounded bg-paper/10 px-1.5 py-0.5">lib/site.ts</code>{' '}
            pour afficher un bouton de contact direct.
          </p>
        )}
      </div>
    </section>
  )
}
