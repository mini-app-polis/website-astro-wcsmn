# wcsmn.com

Community resource for West Coast Swing events and organizations in Minnesota.
Built with [Astro](https://astro.build/), deployed as a static site to
Cloudflare Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Architecture

### Data provider seam

All organization and calendar data is read through a single provider module,
`src/lib/data.ts`. Pages never import seed data directly — they call
`getOrganizations()`, `getOrganization(slug)`, and
`getCombinedCalendarSources()`.

Today these functions return in-repo seed data (`src/data/organizations.ts`),
which is the local stand-in for a future backend. When a backend exists, swap
the bodies of the provider functions to `fetch()` from it; the return types in
`src/lib/types.ts` are the contract, so pages do not change.

Three rules keep that future migration cheap:

1. Pages only call the provider, never the seed.
2. The site is read-only — it never authenticates or writes.
3. The provider's return types are the contract, independent of the source.

### Calendars

Calendar IDs and colors live on each organization (and in the combined
homepage list). Embed URLs are built by `src/lib/calendar.ts` — the org detail
page renders a single calendar, the homepage overlays all of them.

## Deploy (Cloudflare Pages)

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
