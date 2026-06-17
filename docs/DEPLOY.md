# Deploy (Cloudflare Pages)

The site is a static Astro build deployed to Cloudflare Pages.

## Project settings

| Setting | Value |
| --- | --- |
| Framework preset | **Astro** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 20+ |
| Production branch | `main` |

`astro.config.mjs` sets `site: 'https://wcsmn.com'` (used for the sitemap and
canonical URLs) and `@astrojs/sitemap` emits `/sitemap-index.xml`, which
`public/robots.txt` points to.

## Environment variables

The footer version line is built from Cloudflare's standard build variables —
no manual configuration needed:

| Variable | Used for |
| --- | --- |
| `CF_PAGES_BRANCH` | `main` shows the release version; other branches show `dev@<branch>`. |
| `CF_PAGES_COMMIT_SHA` | short SHA in the footer. |

See `src/lib/build.ts` and [RELEASING.md](RELEASING.md).

## Deploys and the version line

Every push to `main` triggers a Cloudflare deploy. Because releases are
automated (see [RELEASING.md](RELEASING.md)), a typical release produces two
deploys: one for your change, and one for the semantic-release commit that bumps
`package.json`. The footer reflects the new version after that second deploy.

## The contact form

The contact form (`src/pages/contact.astro`) posts to an external API at
`https://api.kaianolevine.com/v1/contact` and is protected by Cloudflare
Turnstile (site key in the page) plus a hidden honeypot field. That endpoint is
separate infrastructure — this site only submits to it; it does not host it.

## Local production check

```bash
npm run build && npm run preview
```

The build is fully static; there is no server runtime to configure.
