import { Reveal } from './Reveal'

/**
 * The commercially important step is the second one: the client sees a real,
 * deployed site built around their own business before any money changes
 * hands. It removes the "what will it look like?" objection completely.
 */
const steps = [
  {
    n: '01',
    title: 'On parle de votre activité',
    body:
      'Vingt minutes, sur place ou au téléphone. Ce que vous vendez, qui sont vos clients, ce qui vous distingue.',
  },
  {
    n: '02',
    title: 'Je construis une première version',
    body:
      'Pas une maquette : un vrai site en ligne, avec vos produits, vos prix, vos photos. Vous l’ouvrez sur votre téléphone avant de décider.',
  },
  {
    n: '03',
    title: 'Vous corrigez, j’ajuste',
    body:
      'Couleurs, textes, photos, structure. On tourne jusqu’à ce que ce soit juste — c’est votre activité, pas la mienne.',
  },
  {
    n: '04',
    title: 'Mise en ligne sur votre domaine',
    body:
      'Bascule sans coupure sur votre nom de domaine, certificat HTTPS compris. Si vous n’avez pas de domaine, je m’en occupe.',
  },
  {
    n: '05',
    title: 'Vous gardez la main',
    body:
      'Le code vous appartient. Pour les évolutions vous m’appelez — ou vous confiez le site à qui vous voulez.',
  },
]

export function Approach() {
  return (
    <section id="methode" className="relative scroll-mt-24 border-t border-line py-20 sm:py-28">
      <div className="container-y">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="label">
              <span className="gradient-text font-bold">03</span> &nbsp;Méthode
            </p>
            <h2 className="display-lg mt-5">Comment on travaille.</h2>
            <p className="mt-5 max-w-[38ch] text-[15px] leading-relaxed text-text-2">
              Vous voyez votre site avant de payer quoi que ce soit. Si le
              résultat ne vous convainc pas, vous ne devez rien.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <ol className="space-y-px overflow-hidden rounded-2xl border border-line bg-line">
              {steps.map((s, i) => (
                <Reveal
                  key={s.n}
                  as="li"
                  delay={i * 0.05}
                  className="flex gap-5 bg-surface p-6 sm:gap-8 sm:p-7"
                >
                    <span className="font-mono text-[12px] text-cyan">{s.n}</span>
                    <div>
                      <h3 className="font-display text-[17px] font-bold tracking-tight">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-text-2">{s.body}</p>
                    </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
