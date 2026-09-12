import { Reveal } from './Reveal'

/**
 * Written as outcomes, not features. An owner does not want "structured data",
 * they want to be found when someone searches for their trade nearby — so
 * that is how each line is phrased, with the technical means underneath.
 */
const services = [
  {
    title: 'Site vitrine complet',
    body:
      'Votre carte ou vos services, vos horaires, vos adresses, vos photos. Tout ce qu’un client cherche avant de se déplacer ou d’appeler.',
    detail: 'Pages statiques, chargement quasi instantané',
  },
  {
    title: 'Français et arabe',
    body:
      'Deux versions du site, chacune indexée séparément par Google, avec la mise en page inversée pour l’arabe.',
    detail: 'Deux fois plus de requêtes couvertes',
  },
  {
    title: 'Trouvable sur Google',
    body:
      'Nom, adresse, téléphone et horaires transmis à Google dans un format qu’il comprend, pour apparaître sur les recherches « près de moi ».',
    detail: 'Données structurées + plan de site',
  },
  {
    title: 'Commande par WhatsApp',
    body:
      'Le client compose sa commande sur le site, elle arrive prête à lire sur le WhatsApp du commerce. Aucun logiciel à apprendre.',
    detail: 'Sans abonnement, sans matériel',
  },
  {
    title: 'Pensé pour le téléphone',
    body:
      'Vos clients arrivent sur mobile. Bouton d’appel toujours accessible, images légères, rien qui ne rentre pas dans l’écran.',
    detail: 'Testé de 375 à 1920 pixels',
  },
  {
    title: 'Hébergement inclus',
    body:
      'Le site est hébergé sans frais mensuels et branché sur votre nom de domaine. Vous ne payez que le domaine que vous avez déjà.',
    detail: '0 DH par mois',
  },
]

export function Services() {
  return (
    <section id="prestations" className="scroll-mt-24 border-t border-paper-3 py-20 sm:py-28">
      <div className="container-p">
        <Reveal>
          <p className="eyebrow">Prestations</p>
          <h2 className="display-lg mt-4 max-w-[20ch]">
            Ce que comprend un site.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-paper-3 bg-paper-3 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06}>
              <div className="h-full bg-paper p-7">
                <h3 className="display-md">{s.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{s.body}</p>
                <p className="mt-4 text-[12px] font-medium text-accent">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
