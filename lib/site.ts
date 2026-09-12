/**
 * Identity and contact.
 *
 * Everything personal lives here so it changes in one place. If a studio name
 * comes later, set `studio` and the wordmark switches to it while the logo
 * mark stays the same.
 */

export const site = {
  name: 'Youssef Mhadhbi',
  /** Optional trading name. Leave empty to use the personal name. */
  studio: '',
  role: 'Développeur web',
  roleEn: 'Web Developer',
  city: 'Casablanca',

  /** The one-line promise. First thing read, so it stays short. */
  tagline: 'Je conçois et développe des sites web sur mesure.',

  email: 'mhvdhbi@gmail.com',

  /** Digits only with country code. Leave blank to hide the WhatsApp buttons —
   *  most enquiries in Morocco arrive there, so this is worth filling in. */
  whatsapp: '',
  phoneDisplay: '',

  github: 'https://github.com/mhvdhbi',
  linkedin: '',

  url: 'https://mhadhbi.pages.dev',

  /** Shown in the hero and the about section. */
  available: true,
} as const

export const displayName = site.studio || site.name

export const waHref = (message?: string) =>
  site.whatsapp
    ? `https://wa.me/${site.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`
    : null

export const mailHref = (subject = 'Projet de site web') =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`

/** Capabilities, grouped. Kept honest — everything here is in the shipped work. */
export const skills = [
  {
    group: 'Développement',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Export statique'],
  },
  {
    group: 'Design',
    items: ['Direction artistique', 'Design système', 'Typographie', 'Animation', 'Responsive', 'Accessibilité'],
  },
  {
    group: 'Référencement',
    items: ['Données structurées', 'Sitemap & hreflang', 'Core Web Vitals', 'SEO local', 'Bilingue FR/AR'],
  },
  {
    group: 'Mise en ligne',
    items: ['Cloudflare Pages', 'Noms de domaine', 'DNS & HTTPS', 'Git', 'Pipeline d’images'],
  },
] as const
