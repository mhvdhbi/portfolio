/**
 * Brand and contact configuration.
 *
 * Everything identity-related lives here so it can be changed in one place.
 * If you later trade under a studio name rather than your own, change `name`
 * and `initials` and the whole site follows.
 */

export const site = {
  name: 'Youssef Taacoub',
  initials: 'YT',
  role: 'Conception de sites web',
  city: 'Casablanca',

  /** Shown in the hero. Keep it short — it is the first thing read. */
  tagline: 'Je crée des sites web pour les commerces de Casablanca.',

  email: 'ytaacoub@gmail.com',

  /** ⚠️ Put your real number here — in Morocco most enquiries arrive by
   *  WhatsApp, and an empty button costs you leads. Digits only, with the
   *  country code. Leave blank to hide the WhatsApp buttons entirely. */
  whatsapp: '',
  phoneDisplay: '',

  /** ⚠️ Optional — leave blank to hide. */
  github: 'https://github.com/mhvdhbi',
  linkedin: '',

  url: 'https://taacoub.pages.dev',
} as const

export const waHref = (message?: string) =>
  site.whatsapp
    ? `https://wa.me/${site.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`
    : null

export const mailHref = (subject = 'Demande de site web') =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
