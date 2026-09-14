import { projects } from '@/lib/projects'
import { mailHref } from '@/lib/site'
import { Reveal } from './Reveal'
import { ProjectCard } from './ProjectCard'

export function Work() {
  return (
    <section id="travaux" className="scroll-mt-24 border-t border-line py-20 sm:py-24">
      <div className="container-y">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label">
                <span className="gradient-text font-bold">01</span> &nbsp;Travaux
              </p>
              <h2 className="display-lg mt-4 max-w-[16ch]">
                Des sites livrés, pas des maquettes.
              </h2>
            </div>
            <p className="max-w-[30ch] text-[14px] leading-relaxed text-text-2">
              Chaque projet a sa page : le problème, ce que j&rsquo;ai construit,
              et les chiffres.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.06}>
              <ProjectCard p={p} />
            </Reveal>
          ))}

          <Reveal delay={0.08}>
            <a
              href={mailHref('Mon projet de site')}
              className="group flex h-full min-h-[220px] flex-col items-center justify-center rounded-2xl border border-dashed border-line-2 px-8 py-12 text-center transition-colors hover:border-cyan"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line-2 text-text-3 transition-colors group-hover:border-cyan group-hover:text-cyan">
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <span className="display-md mt-4">Votre projet ici</span>
              <span className="mt-1.5 max-w-[34ch] text-[13px] text-text-2">
                Parlez-moi de votre activité.
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
