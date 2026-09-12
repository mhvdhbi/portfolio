import { Reveal } from './Reveal'

/**
 * The step that matters commercially is the second one: the owner sees a real
 * site built around their own business before any money changes hands. That
 * removes the "what will it look like?" objection entirely, and it is the
 * reason this portfolio exists.
 */
const steps = [
  {
    n: '01',
    title: 'On parle de votre commerce',
    body:
      'Vingt minutes, sur place ou au téléphone. Ce que vous vendez, qui sont vos clients, ce qui vous distingue du voisin.',
  },
  {
    n: '02',
    title: 'Je construis une première version',
    body:
      'Pas une maquette : un vrai site, en ligne, avec vos plats, vos prix et vos photos. Vous l’ouvrez sur votre téléphone avant de décider quoi que ce soit.',
  },
  {
    n: '03',
    title: 'Vous corrigez, j’ajuste',
    body:
      'Les couleurs, les textes, les photos, les prix. On tourne jusqu’à ce que ce soit juste — c’est votre commerce, pas le mien.',
  },
  {
    n: '04',
    title: 'Mise en ligne sur votre domaine',
    body:
      'Le site bascule sur votre nom de domaine sans coupure. Si vous n’en avez pas, je m’en occupe.',
  },
  {
    n: '05',
    title: 'Vous gardez la main',
    body:
      'Les fichiers vous appartiennent. Pour les mises à jour, vous m’appelez — ou vous confiez le site à qui vous voulez.',
  },
]

export function Process() {
  return (
    <section id="methode" className="scroll-mt-24 border-t border-paper-3 py-20 sm:py-28">
      <div className="container-p">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Méthode</p>
            <h2 className="display-lg mt-4">Comment ça se passe.</h2>
            <p className="mt-5 max-w-[38ch] text-[15px] leading-relaxed text-ink-2">
              Vous voyez votre site avant de payer quoi que ce soit. Si le
              résultat ne vous convainc pas, vous ne devez rien.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <ol className="space-y-px overflow-hidden rounded-2xl border border-paper-3 bg-paper-3">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.05}>
                  <li className="flex gap-5 bg-paper p-6 sm:gap-7 sm:p-7">
                    <span className="font-display text-[13px] font-bold text-accent">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="font-display text-[17px] font-semibold tracking-tight">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{s.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
