# wcsmn.com

Community resource for West Coast Swing events and organizations in Minnesota.
Built with [Astro](https://astro.build/) as a static site and deployed to
Cloudflare Pages. The site is **read-only** — it never authenticates or writes
data.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

Requires Node 20+. The build produces a fully static `dist/` — no server.

The homepage calendar fetches events live from the Google Calendar API. Copy
`.env.example` to `.env` and set `PUBLIC_GOOGLE_CALENDAR_API_KEY` to see it
locally; without it the calendar shows a notice and falls back to the Google
embed. See [docs/DEPLOY.md](docs/DEPLOY.md#google-calendar-api-key-setup).

## What's here

- A homepage with a combined Google Calendar overlaying every organization's
  events, color-coded per org.
- A page per organization (`/organizations/<slug>/`) with its calendar, links,
  and optional long-form content.
- Static content pages: FAQ, community resources, contact (form), and
  contribution guides.
- A prominent **Bulletin Board** link to the separate community app at
  `https://bulletinboard-one.vercel.app/`.

## Documentation

| Doc | What it covers |
| --- | --- |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Data provider seam, the type contract, per-org data files, calendars, and the planned backend migration. |
| [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) | Adding an organization or event, editing content, and code conventions. For both community members and developers. |
| [docs/RELEASING.md](docs/RELEASING.md) | How versioning and releases work (semantic-release + conventional commits) and how the footer version is derived. |
| [docs/DEPLOY.md](docs/DEPLOY.md) | Cloudflare Pages configuration and environment variables. |

## Project layout

```
src/
├── components/        Nav, CalendarEmbed
├── data/
│   └── organizations/ one file per org (+ index.ts that auto-discovers them)
├── layouts/           Base (shell, head, footer), Page (simple content pages)
├── lib/
│   ├── types.ts       the data contract
│   ├── data.ts        the provider seam (pages only call this)
│   ├── calendar.ts    Google Calendar embed URL builder
│   └── build.ts       version/build info for the footer
├── pages/             routes (homepage, organizations, content pages)
└── styles/global.css  design tokens + shared styles
public/                favicons, logo, robots.txt
```

## Brand

Pink `#dd4462`, blue `#4467dd`, gold `#fbbe25`; Red Hat Display (headings) +
Atkinson Hyperlegible (body). Tokens live at the top of
`src/styles/global.css`.
