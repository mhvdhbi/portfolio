import { Reveal } from './Reveal'

/**
 * Three steps, not five.
 *
 * The five-step version said the same thing with more scrolling. What actually
 * sells is step two — the client sees a real, deployed site built around their
 * own business before any money changes hands.
 */
const steps = [
  {
    n: '01',
    title: 'On parle',
    body: 'Vingt minutes. Votre activité, vos clients, ce qui vous distingue.',
  },
  {
    n: '02',
    title: 'Je construis',
    body:
      'Pas une maquette : un vrai site en ligne, avec vos produits et vos prix. Vous l’ouvrez sur votre téléphone avant de décider.',
  },
  {
    n: '03',
    title: 'On met en ligne',
    body:
      'Sur votre nom de domaine, sans coupure, HTTPS compris. Le code vous appartient.',
  },
]

export function Approach() {
  return (
    <section id="methode" className="scroll-mt-24 border-t border-line py-20 sm:py-24">
      <div className="container-y">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label">
                <span className="gradient-text font-bold">03</span> &nbsp;Méthode
              </p>
              <h2 className="display-lg mt-4 max-w-[14ch]">Vous voyez avant de payer.</h2>
            </div>
            <p className="max-w-[32ch] text-[14px] leading-relaxed text-text-2">
              Si le résultat ne vous convainc pas, vous ne devez rien.
            </p>
          </div>
        </Reveal>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} as="li" delay={i * 0.06} className="card p-6">
              <span className="font-mono text-[12px] text-cyan">{s.n}</span>
              <h3 className="display-md mt-3">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-text-2">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
