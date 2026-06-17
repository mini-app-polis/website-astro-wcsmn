# Architecture

The site is a static Astro build. Its central design choice is a **data
provider seam** that isolates pages from where organization and calendar data
actually comes from, so a future backend can be wired in without touching any
page.

## The provider seam

Every page reads data through one module, `src/lib/data.ts`:

- `getOrganizations()` → all organizations, in display order
- `getOrganization(slug)` → one organization, or `null`
- `getCombinedCalendarSources()` → the calendar sources for the homepage

Pages **never** import the seed data directly. Three rules keep the future
migration cheap:

1. Pages only call the provider, never the seed.
2. The site is read-only — it never authenticates or writes.
3. The provider's return types (`src/lib/types.ts`) are the contract,
   independent of the source.

Today these functions read in-repo seed data. When a backend exists, replace
the bodies of the provider functions with `fetch()` calls that return the same
types. Pages do not change. That is the entire migration surface.

## The data contract

`src/lib/types.ts` defines the shapes that survive the migration. The main one
is `Organization`:

| Field | Type | Notes |
| --- | --- | --- |
| `slug` | `string` | URL key and stable identifier, e.g. `tc-rebels`. |
| `name` | `string` | Display name. |
| `blurb` | `string` | Short plain-text description for listings and intros. |
| `links` | `OrgLink[]` | `{ label, url }` — websites, socials, `mailto:`. |
| `calendarId` | `string \| null` | Google Calendar ID, or `null`. |
| `calendarColor` | `string \| null` | Hex color (with `#`) for this org's events. |
| `logo` | `string \| null` | Path under `/public`, or `null`. |
| `bodyHtml` | `string \| null` | Optional rich content (rosters, schedules). One opaque HTML field so a backend can serve it as one column. |

Keep these fields backend-friendly: flat, serializable, no Astro/JSX. The
`CombinedCalendarSource` type (`{ calendarId, color }`) is a projection of an
org used by the homepage calendar.

## Organization data (the seed)

Each organization is its own file in `src/data/organizations/`, default-
exporting an `Organization`. `src/data/organizations/index.ts` auto-discovers
every file via Vite's `import.meta.glob` and exports them sorted alphabetically
by filename — which is also the display order.

To add an organization you just add a file; nothing else needs editing. See
[CONTRIBUTING.md](CONTRIBUTING.md#adding-an-organization).

This folder is the local stand-in for "the backend." When a real backend
exists, this is the only thing that goes away — `data.ts` swaps its
implementation and the folder is deleted.

## Calendars

`src/lib/calendar.ts` builds Google Calendar embed URLs. It is the single place
that assembles calendar query strings:

- `singleCalendarUrl(...)` — one calendar, used on org detail pages.
- `combinedCalendarUrl(...)` — overlays multiple calendars, used on the
  homepage.

Both route through a helper that normalizes spaces to `%20` (Google renders the
`title` literally, so a `+` would show up in the header).

The calendar sources are **derived from the organizations** — every org with a
`calendarId` contributes one color-coded source, in display order. There is no
separate hand-maintained source list, so adding or removing an org (or changing
its calendar/color) updates the calendar automatically.

### Homepage: custom month calendar

The homepage uses `components/MonthCalendar.astro`, a custom client-side
**per-month schedule (agenda) view** that fetches events live from the **Google
Calendar API** (a public, referrer-restricted key in
`PUBLIC_GOOGLE_CALENDAR_API_KEY`). It lists the month's days that have events in
chronological order, each event color-coded by org with time, title, and org
name, plus prev/next/today navigation and a click-to-open details popover —
full control of the UI, no Google chrome or "+ Google Calendar" button. Google
expands recurring events for us (`singleEvents=true`).

It degrades gracefully: with no key it shows a notice, on fetch error it links
out to Google, and a `<noscript>` falls back to the Google embed. See
[DEPLOY.md](DEPLOY.md#environment-variables) for the key setup.

### Org detail pages: Google embed

Individual org pages still render the standard Google Calendar embed
(`components/CalendarEmbed.astro`) for that org's single calendar — simpler, and
no API key needed for those.

## Layouts, components, styles

- `layouts/Base.astro` — the page shell: `<head>`, fonts, favicons, nav,
  footer, and a small script that makes external links open in a new tab.
- `layouts/Page.astro` — a thin wrapper over `Base` for simple content pages
  (a header band + prose container).
- `components/Nav.astro` — sticky nav; the Organizations submenu is built at
  build time from the provider, and the Bulletin Board CTA links out to the
  separate community app.
- `components/CalendarEmbed.astro` — the calendar `<iframe>`.
- `styles/global.css` — design tokens (brand colors, fonts, radius, shadows)
  and shared component styles (buttons, cards, chips, calendar card). Supports
  light/dark via `prefers-color-scheme`.

## Build info / version

`src/lib/build.ts` produces the footer's version line at build time from the
`package.json` version (kept current by semantic-release) and Cloudflare's
build environment. See [RELEASING.md](RELEASING.md) and [DEPLOY.md](DEPLOY.md).

## Future: the real backend

The locked-in plan is to migrate org/calendar data to the maintainer's own
stack (not the peer bulletin board's). When that happens:

- `data.ts` becomes a thin `fetch()` client against that backend.
- `src/data/organizations/` is removed.
- The type contract in `types.ts` stays the same, so pages are untouched.

The bulletin board remains a separate app on its own subdomain. wcsmn.com only
ever reads; anything that writes lives elsewhere.
