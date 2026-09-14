# Youssef Mhadhbi

Web developer in Casablanca. Custom sites, bilingual FR/AR, built to be found on Google.

### **[mhadhbi.pages.dev →](https://mhadhbi.pages.dev)**

`97` performance · `100` accessibility · `100` best practices · `100` SEO
<sub>Lighthouse, mobile, on the deployed site. No failing audits.</sub>

---

**Stack** — Next.js 15 (static export) · React 19 · TypeScript · Tailwind 4 · Motion · Canvas 2D · Cloudflare Pages

```bash
npm install
npm run dev       # :3100
npm run build     # static export to out/
npm run deploy    # build + publish
```

### Adding a project

One object in [`lib/projects.ts`](lib/projects.ts), screenshots in `public/shots/`.
It gets its own page at `/travaux/<slug>/` automatically — the home grid stays a grid.

### Worth a look

- **[`HeroCanvas.tsx`](components/HeroCanvas.tsx)** — generative flow field, no dependencies. Halts when the tab is hidden or it scrolls away; reduced motion gets one static frame.
- **[`Hero.tsx`](components/Hero.tsx)** — server component. Above-the-fold animates in CSS, so LCP paints before hydration.
