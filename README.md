# Portfolio — web design for Casablanca businesses

A portfolio site used as a sales tool: it shows local business owners real
websites built for businesses like theirs, with before/after comparisons and
numbers that can actually be checked.

**Live:** [taacoub.pages.dev](https://taacoub.pages.dev)

---

## The idea

Small businesses rarely respond to a description of a website. They respond to
seeing one. So the pitch is: build a real, deployed site for the business on
spec, then show it to the owner on their phone.

This portfolio is where those builds live. Each entry leads with a before/after
and hard figures rather than adjectives.

## Adding a project

One object in [`lib/projects.ts`](lib/projects.ts). Drop the screenshots into
`public/shots/`, put the new object first in the array, rebuild. The grid,
the case-study layout and the hero counter all read from that file.

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
labelling it as such is better than being caught overstating — an owner who
rings the business you claimed as a client will find out anyway.

## Capturing screenshots

```bash
npm run build && npm run preview   # serve on :4100
npm run shots                      # screenshots into .review/
node scripts/optimise-shots.mjs    # PNG -> WebP (last run: 18.7 MB -> 0.66 MB)
```

Client-site captures are taken by `scripts/portfolio-shots.mjs` in the project
repo being documented, since that is where Playwright is already installed.

## Stack

Next.js 15 (`output: 'export'`) · React 19 · Tailwind CSS 4 · Motion ·
sharp · Cloudflare Pages

```bash
npm install
npm run dev      # localhost:3100
npm run build    # static export to out/
npm run deploy   # build + publish
```

## Design notes

Near-monochrome on purpose. This site's job is to make the *client* work look
good, and a loud frame competes with the screenshots inside it — so one
high-chroma accent carries every action and everything else is paper and ink.
It also has to read as a different hand from the sites it displays.

Screenshots sit inside browser chrome: a bare screenshot reads as a picture of
a design, the same image in a frame reads as a website that exists.

## Configuration

Identity and contact details live in [`lib/site.ts`](lib/site.ts) — name,
email, WhatsApp, social links. Change them there and the whole site follows.
