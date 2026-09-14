import { site, mailHref, waHref } from '@/lib/site'
import { LogoMark } from './Logo'
import { Reveal } from './Reveal'

/**
 * Profile and contact, merged.
 *
 * They were two full sections saying overlapping things. A prospect needs to
 * know who they would be dealing with and how to reach them — that is one
 * decision, so it is one block.
 */
export function Contact() {
  const wa = waHref('Bonjour Youssef, je souhaite un site pour mon activité.')

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-line py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(55% 70% at 50% 100%, rgba(34,211,238,0.13) 0%, transparent 70%)',
        }}
      />

      <div className="container-y">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <p className="label">
              <span className="gradient-text font-bold">04</span> &nbsp;Contact
            </p>
            <h2 className="display-lg mt-4 max-w-[15ch]">
              Votre site, <span className="gradient-text">on en parle&nbsp;?</span>
            </h2>
            <p className="mt-5 max-w-[50ch] text-[15px] leading-relaxed text-text-2">
              Je m&rsquo;appelle Youssef Mhadhbi. Je fais le design et le code
              moi-même, à {site.city} — il n&rsquo;y a personne entre l&rsquo;idée
              et le résultat. Dites-moi ce que vous faites, je reviens vers vous
              avec une proposition concrète.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={mailHref()} className="btn-primary w-full sm:w-auto">
                {site.email}
              </a>
              {wa ? (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full sm:w-auto"
                >
                  WhatsApp {site.phoneDisplay}
                </a>
              ) : (
                site.github && (
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full sm:w-auto"
                  >
                    GitHub
                  </a>
                )
              )}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="card relative overflow-hidden p-8">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(70% 70% at 75% 15%, rgba(124,92,255,0.16) 0%, transparent 70%)',
                }}
              />
              <div className="relative">
                <LogoMark id="contact" className="h-11 w-11" />
                <p className="mt-6 font-display text-xl font-bold leading-snug tracking-tight">
                  &laquo;&nbsp;Je construis d&rsquo;abord,
                  <br />
                  je montre ensuite.&nbsp;&raquo;
                </p>
                <dl className="mt-7 space-y-3 border-t border-line pt-5">
                  {[
                    { k: 'Basé à', v: site.city },
                    { k: 'Langues', v: 'FR · AR · EN' },
                    {
                      k: 'Statut',
                      v: site.available ? 'Ouvert aux projets' : 'Sur demande',
                    },
                  ].map((r) => (
                    <div key={r.k} className="flex items-baseline justify-between gap-4">
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-text-3">
                        {r.k}
                      </dt>
                      <dd className="text-right text-[13px] font-medium">{r.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
