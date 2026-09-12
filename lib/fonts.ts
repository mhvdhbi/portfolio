import { Bricolage_Grotesque, Inter, JetBrains_Mono } from 'next/font/google'

/** Self-hosted at build time — no request leaves the browser for Google, and
 *  the metrics are inlined so nothing shifts as they load. */
export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const monoJb = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-jb',
  display: 'swap',
})

export const fontVars = `${bricolage.variable} ${inter.variable} ${monoJb.variable}`
