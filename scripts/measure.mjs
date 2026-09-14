import { chromium } from 'playwright'
const b = await chromium.launch({ channel: 'msedge' })
for (const [label, w, h] of [['desktop',1440,900],['mobile',390,844]]) {
  const ctx = await b.newContext({ viewport:{width:w,height:h} })
  for (const [name, url] of [['accueil','http://localhost:4100/'],['projet','http://localhost:4100/travaux/chez-robio/']]) {
    const p = await ctx.newPage()
    await p.goto(url, { waitUntil:'networkidle' })
    await p.waitForTimeout(1500)
    const px = await p.evaluate(() => document.documentElement.scrollHeight)
    console.log(`${label.padEnd(8)} ${name.padEnd(8)} ${String(px).padStart(6)} px  (${(px/h).toFixed(1)} écrans)`)
    await p.close()
  }
  await ctx.close()
}
await b.close()
