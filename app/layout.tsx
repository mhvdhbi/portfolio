import type { Metadata, Viewport } from 'next'
import { fontVars } from '@/lib/fonts'
import { site } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — Sites web pour commerces à ${site.city}`,
  description:
    'Je conçois des sites web rapides, bilingues et pensés pour être trouvés sur Google. Pour les restaurants, commerces et artisans de Casablanca.',
  keywords: [
    'création site web Casablanca',
    'site web restaurant Maroc',
    'développeur web Casablanca',
    'site vitrine commerce',
    'référencement local Maroc',
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Sites web pour commerces à ${site.city}`,
    description:
      'Des sites rapides, bilingues, et construits pour que Google puisse les lire.',
  },
  robots: { index: true, follow: true },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
}

export const viewport: Viewport = {
  themeColor: '#F7F6F3',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={fontVars}>
      <body>{children}</body>
    </html>
  )
}
