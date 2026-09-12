# Youssef Mhadhbi — portfolio

Personal site and portfolio. Web developer in Casablanca: custom design and
front-end build, bilingual French/Arabic, built to be found on Google.

**Live:** [mhadhbi.pages.dev](https://mhadhbi.pages.dev)

| Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|
| 97 | 100 | 100 | 100 |

Lighthouse, mobile with throttling, against the deployed site. No failing audits.

---

## The idea

Small businesses rarely respond to a description of a website. They respond to
seeing one. So the approach is: build a real, deployed site for the business on
spec, then show it to the owner on their phone.

This portfolio is where those builds live. Each entry leads with a before/after
and figures that can actually be checked, rather than adjectives.

## Adding a project

One object in [`lib/projects.ts`](lib/projects.ts). Drop the screenshots into
`public/shots/`, put the new object first in the array, rebuild. The grid, the
case-study layout and the hero counter all read from that file.

```ts
{
  slug: 'business-name',
  name: 'Business Name',
  status: 'concept',        // 'live' once they have actually bought it
  metrics: [ ... ],         // only things that can be verified
  shots: { cover, before, gallery },
}
```

`status` is deliberately explicit. A site built on spec is a concept, and
labelling it as such is better than being caught overstating — anyone who rings
the business you claimed as a client finds out anyway.

## Stack

Next.js 15 (`output: 'export'`) · React 19 · TypeScript · Tailwind CSS 4 ·
Motion · Canvas 2D · sharp · Cloudflare Pages

```bash
npm install
npm run dev      # localhost:3100
npm run build    # static export to out/
npm run preview  # serve the built output on :4100
npm run shots    # screenshot the site into .review/
npm run deploy   # build + publish
```

## Design notes

**Dark, so the work is the brightest thing on the page.** Screenshots of other
people's sites read as lit objects against it; a light frame competes with them.

**The violet-to-cyan gradient is the only expressive device** — used on the
mark, the section numbers and the hero field, and nowhere else, so it stays
meaningful rather than becoming decoration.

**The hero runs a generative flow field** on Canvas 2D: particles follow a
vector field built from layered sines, leaving fading trails. A portfolio that
claims front-end capability should demonstrate it rather than list it. It is
also disciplined about it — particle count drops on small screens, the loop
stops entirely when the tab is hidden or the hero scrolls out of view, and
`prefers-reduced-motion` paints a single static frame and never animates.

**The hero itself is a server component.** Everything above the fold animates
with CSS, so the LCP element paints before hydration instead of waiting on the
bundle. Only the decorative canvas is client-side, and the hero reads correctly
without it.

**The mark is `<M>`** — code brackets around an M for Mhadhbi. Drawn inline so
it inherits colour and never flashes, with per-instance gradient ids, since two
SVGs sharing an id makes the second render black.

## Configuration

Identity, contact details and the skills list live in
[`lib/site.ts`](lib/site.ts). Change them there and the whole site follows.
