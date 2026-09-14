/**
 * The portfolio.
 *
 * TO ADD A SITE: copy the last object, change the fields, drop its screenshots
 * into public/shots/, and put it first in the array. Nothing else to touch —
 * the grid, the case-study pages and the counters all read from here.
 *
 * Keep `status: 'concept'` honest. A site built on spec and not yet bought is
 * a concept, and saying so is better than being caught overstating it — an
 * owner who phones the business you claimed as a client will find out anyway.
 */

export type Metric = {
  value: string
  label: string
  /** Short form for the compact home card, where the full label truncates. */
  short?: string
  note?: string
}

export type Project = {
  slug: string
  name: string
  sector: string
  city: string
  year: number
  /** 'live' = bought and deployed for the client. 'concept' = built on spec. */
  status: 'live' | 'concept'
  /** One line, shown on the card. */
  summary: string
  /** The problem, in the owner's terms. */
  problem: string
  /** What was built in response. */
  solution: string[]
  /** Hard numbers. Only things that can actually be checked. */
  metrics: Metric[]
  /** Before/after imagery — omit `before` if the business had no site. */
  shots: {
    cover: string
    coverMobile?: string
    before?: string
    beforeMobile?: string
    gallery?: { src: string; caption: string }[]
  }
  tech: string[]
  liveUrl?: string
  accent: string
}

export const projects: Project[] = [
  {
    slug: 'chez-robio',
    name: 'Chez Robio',
    sector: 'Restaurant · Grillades & jus',
    city: 'Casablanca',
    year: 2026,
    status: 'concept',
    summary:
      'Restaurant 24h/24 avec deux adresses. Refonte complète : carte de 110 plats, bilingue français/arabe, et un site que Google peut enfin lire.',
    problem:
      "Le site existant se chargeait entièrement en JavaScript : Google recevait une page pratiquement vide. Le fichier robots.txt contenait encore la note du développeur précédent — « Remplacez par l'URL réelle après déploiement » — jamais complétée. Aucun plan de site, aucune donnée structurée, aucune version arabe, et une seule des deux adresses mentionnée.",
    solution: [
      'Site statique : la carte, les adresses et les horaires sont dans le HTML, lisibles par Google sans exécuter une ligne de JavaScript',
      'Bilingue français / arabe, avec mise en page inversée (RTL) et deux versions indexées séparément',
      'Carte complète de plus de 110 plats, relevée sur leur carte imprimée, avec les colonnes Petit / Grand',
      'Données structurées Restaurant pour chaque adresse, avec coordonnées GPS réelles',
      'Photographies du restaurant lui-même, reprises de leurs propres réseaux sociaux',
      'Démonstration de commande — livraison ou sur place, espèces ou carte — sans aucune donnée enregistrée',
    ],
    metrics: [
      { value: '110×', label: 'de contenu lisible par Google', short: 'lisible par Google', note: '2 111 octets → 233 518 octets de HTML' },
      { value: '100', label: 'Accessibilité, SEO, bonnes pratiques', note: 'Lighthouse, trois catégories sur quatre' },
      { value: '2', label: 'langues indexées', note: 'français et arabe' },
      { value: '110+', label: 'plats sur la carte', note: 'prix relevés sur leur carte' },
    ],
    shots: {
      cover: '/shots/robio-after-desktop.webp',
      coverMobile: '/shots/robio-after-mobile.webp',
      before: '/shots/robio-before-desktop.webp',
      beforeMobile: '/shots/robio-before-mobile.webp',
      gallery: [
        { src: '/shots/robio-menu.webp', caption: 'Les plats, photographiés chez eux' },
        { src: '/shots/robio-carte.webp', caption: 'La carte complète, plus de 110 plats' },
        { src: '/shots/robio-traditions.webp', caption: 'Couscous le vendredi, rfissa le mercredi' },
        { src: '/shots/robio-arabic.webp', caption: 'Version arabe, mise en page inversée' },
      ],
    },
    tech: ['Next.js', 'Export statique', 'Bilingue FR/AR', 'Données structurées', 'Cloudflare'],
    liveUrl: 'https://chezrobio.pages.dev',
    accent: '#D2762F',
  },
]

export const liveCount = projects.filter((p) => p.status === 'live').length
export const findProject = (slug: string) => projects.find((p) => p.slug === slug)
