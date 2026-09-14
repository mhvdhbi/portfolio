import { skills } from '@/lib/site'
import { Reveal } from './Reveal'

/**
 * One block, four rows — not four cards.
 *
 * The card version took a full screen to say what this says in a third of it.
 * Everything listed appears in shipped work; a padded list is the fastest way
 * to lose a technical reader, and it is checkable against the public repos.
 */
export function Skills() {
  return (
    <section id="savoir-faire" className="scroll-mt-24 border-t border-line py-20 sm:py-24">
      <div className="container-y">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <p className="label">
              <span className="gradient-text font-bold">02</span> &nbsp;Savoir-faire
            </p>
            <h2 className="display-lg mt-4 max-w-[14ch]">Du croquis à la mise en ligne.</h2>
            <p className="mt-4 max-w-[34ch] text-[14px] leading-relaxed text-text-2">
              Design, code, référencement et hébergement. Pas de sous-traitance,
              pas d&rsquo;intermédiaire.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <dl className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
              {/* Reveal renders the row wrapper itself: a <dl> may contain a
                  <div> around each dt/dd pair, but not a div inside a div —
                  two levels breaks the grouping and fails the audit. */}
              {skills.map((s, i) => (
                <Reveal
                  key={s.group}
                  delay={i * 0.04}
                  className="grid gap-3 p-5 sm:grid-cols-4 sm:items-baseline sm:gap-6 sm:p-6"
                >
                    <dt className="flex items-baseline gap-2.5">
                      <span className="font-mono text-[11px] text-cyan">0{i + 1}</span>
                      <span className="font-display text-[15px] font-bold tracking-tight">
                        {s.group}
                      </span>
                    </dt>
                    <dd className="sm:col-span-3">
                      <ul className="flex flex-wrap gap-2">
                        {s.items.map((it) => (
                          <li
                            key={it}
                            className="rounded-full border border-line-2 px-2.5 py-1 font-mono text-[11px] text-text-2"
                          >
                            {it}
                          </li>
                        ))}
                      </ul>
                    </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
