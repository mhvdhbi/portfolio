import type { Metadata, Viewport } from 'next'
import { fontVars } from '@/lib/fonts'
import { site, displayName } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.role} à ${site.city}`,
  description:
    'Développeur web à Casablanca. Je conçois et code des sites sur mesure : design original, bilingue français/arabe, rapides et référencés sur Google.',
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    'développeur web Casablanca',
    'création site internet Maroc',
    'site web sur mesure',
    'Next.js Maroc',
    'site bilingue français arabe',
    'référencement local Casablanca',
    'Youssef Mhadhbi',
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: site.url,
    siteName: displayName,
    title: `${site.name} — ${site.role}`,
    description:
      'Sites sur mesure, bilingues et rapides, pour les commerces de Casablanca.',
  },
  robots: { index: true, follow: true },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
}

export const viewport: Viewport = {
  themeColor: '#08080B',
}

/** Person schema — this site is a personal brand, so the entity Google should
 *  understand is the person, not an organisation. */
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: 'MA' },
  sameAs: [site.github, site.linkedin].filter(Boolean),
  knowsAbout: ['Next.js', 'React', 'TypeScript', 'Web design', 'SEO', 'Accessibilité'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={fontVars}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  )
}
