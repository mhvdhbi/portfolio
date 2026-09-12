import { site } from '@/lib/site'
import { LogoMark } from './Logo'
import { Reveal } from './Reveal'

/**
 * Short on purpose. A prospect wants to know who they would be dealing with,
 * not read a biography — and a portfolio that spends more words on itself than
 * on the work has its priorities backwards.
 */
export function About() {
  return (
    <section id="profil" className="relative scroll-mt-24 border-t border-line py-20 sm:py-28">
      <div className="container-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="label">
              <span className="gradient-text font-bold">04</span> &nbsp;Profil
            </p>
            <h2 className="display-lg mt-5 max-w-[16ch]">
              Une seule personne, du début à la fin.
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-text-2">
              <p>
                Je m&rsquo;appelle Youssef Mhadhbi. Je conçois et je développe des
                sites web à {site.city} — je fais le design et le code moi-même,
                ce qui veut dire qu&rsquo;il n&rsquo;y a personne entre l&rsquo;idée
                et le résultat.
              </p>
              <p>
                Je travaille surtout avec des commerces qui n&rsquo;ont pas de
                site, ou qui en ont un qui ne leur rend pas service. Beaucoup de
                ces sites sont invisibles pour Google sans que personne ne l&rsquo;ait
                jamais dit au propriétaire.
              </p>
              <p>
                Ma façon de faire est simple : je construis d&rsquo;abord, je
                montre ensuite. Vous jugez sur un vrai site, ouvert sur votre
                téléphone, pas sur une promesse.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className="btn-primary">
                {site.email}
              </a>
              {site.github && (
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Voir le code sur GitHub
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="card relative overflow-hidden p-10">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(70% 70% at 70% 20%, rgba(124,92,255,0.16) 0%, transparent 70%)',
                }}
              />
              <div className="relative">
                <LogoMark id="about" className="h-16 w-16" />
                <p className="mt-8 font-display text-2xl font-bold leading-snug tracking-tight">
                  &laquo;&nbsp;Je construis d&rsquo;abord,
                  <br />
                  je montre ensuite.&nbsp;&raquo;
                </p>
                <dl className="mt-10 space-y-4 border-t border-line pt-6">
                  {[
                    { k: 'Basé à', v: site.city },
                    { k: 'Langues', v: 'Français · Arabe · Anglais' },
                    { k: 'Disponibilité', v: site.available ? 'Ouvert aux projets' : 'Sur demande' },
                  ].map((r) => (
                    <div key={r.k} className="flex items-baseline justify-between gap-4">
                      <dt className="font-mono text-[11px] uppercase tracking-wider text-text-3">
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
