/**
 * Screenshot the portfolio itself for review.
 * Run: npm run shots   (a server must already be serving out/ on :4100)
 */
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const BASE = process.env.BASE || 'http://localhost:4100'
const OUT = process.env.OUT || './.review'
mkdirSync(OUT, { recursive: true })

const errors = []
const browser = await chromium.launch({ channel: 'msedge' })

for (const [label, w, h] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h } })
  const page = await ctx.newPage()
  page.on('pageerror', (e) => errors.push(`[${label}] ${e.message}`))
  page.on('console', (m) => m.type() === 'error' && errors.push(`[${label}] ${m.text()}`))

  await page.goto(BASE, { waitUntil: 'networkidle', timeout: 60000 })
  await page.waitForTimeout(2000)
  await page.screenshot({ path: `${OUT}/${label}-hero.png` })
  console.log('  OK', `${label}-hero`)

  for (const [sel, name] of [['#travaux', 'work'], ['#prestations', 'services'], ['#methode', 'process'], ['#contact', 'contact']]) {
    await page.evaluate((s) => document.querySelector(s)?.scrollIntoView({ block: 'start' }), sel)
    await page.waitForTimeout(1400)
    await page.screenshot({ path: `${OUT}/${label}-${name}.png` })
    console.log('  OK', `${label}-${name}`)
  }
  await ctx.close()
}

await browser.close()
console.log('\nconsole errors:', errors.length ? errors.join('\n') : 'none')
