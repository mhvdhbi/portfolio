import { skills } from '@/lib/site'
import { Reveal } from './Reveal'

/**
 * Capabilities, grouped.
 *
 * Every item here appears in shipped work — a list padded with things you have
 * read about rather than built is the fastest way to lose a technical reader,
 * and it is trivially checkable against the public repos.
 */
export function Skills() {
  return (
    <section id="savoir-faire" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-y">
        <Reveal>
          <p className="label">
            <span className="gradient-text font-bold">02</span> &nbsp;Savoir-faire
          </p>
          <h2 className="display-lg mt-5 max-w-[20ch]">
            Du premier croquis à la mise en ligne.
          </h2>
          <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-text-2">
            Je prends le projet de bout en bout : la direction artistique, le
            code, le référencement et l&rsquo;hébergement. Pas de sous-traitance,
            pas d&rsquo;intermédiaire.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={(i % 2) * 0.07}>
              <div className="h-full bg-surface p-7 sm:p-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-text-3">
                    0{i + 1}
                  </span>
                  <h3 className="display-md">{s.group}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-line-2 px-3 py-1.5 font-mono text-[11px] text-text-2"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
