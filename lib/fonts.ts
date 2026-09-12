import { Space_Grotesk, Inter } from 'next/font/google'

/** Self-hosted at build time by next/font — no request leaves the browser
 *  for Google, and the metrics are inlined so there is no layout shift. */
export const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const fontVars = `${grotesk.variable} ${inter.variable}`
