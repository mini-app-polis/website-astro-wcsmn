# Contributing

There are two kinds of contribution: **content** (adding an event or
organization, no coding) and **code** (changes to the site itself).

## Content contributions

### Adding an event

Events on the site come from each organization's Google Calendar. To get an
event on the calendar:

1. Create the event in the relevant organization's Google Calendar.
2. It will appear on that org's page and on the homepage's combined calendar
   automatically.

If you're not affiliated with an organization, or you're not sure where an
event belongs, use the [Contact page](https://wcsmn.com/contact/) and we'll
help place it.

> Maintainer note: the `/contributions/add-event/` page currently asks people
> to invite `minnesota.wcs@gmail.com`. That aggregate calendar is **no longer**
> one of the homepage sources (the homepage now shows only the per-org
> calendars), so events sent only there will not appear. This page should be
> updated — see [Known doc/site follow-ups](#known-docsite-follow-ups).

### Adding an organization

Add a single file to `src/data/organizations/` named after the org's slug,
e.g. `src/data/organizations/north-shore-swing.ts`:

```ts
import type { Organization } from '../../lib/types';

const org: Organization = {
  slug: 'north-shore-swing',
  name: 'North Shore Swing',
  blurb: 'Short one-line description shown in listings.',
  links: [
    { label: 'Website', url: 'https://example.org/' },
    { label: 'Instagram', url: 'https://instagram.com/example' },
  ],
  calendarId: 'something@group.calendar.google.com',
  calendarColor: '#4467dd',
  logo: null,
  bodyHtml: null,
};

export default org;
```

That's the whole process — no registration step. The new org automatically:

- gets its page at `/organizations/north-shore-swing/`,
- appears on the Organizations index and in the nav submenu,
- and (if it has a `calendarId`) joins the homepage combined calendar with its
  `calendarColor`.

Tips:

- **Name the file by slug.** Files load alphabetically by filename, which is
  the display order.
- **Find the calendar ID** in Google Calendar → Settings → the calendar →
  "Integrate calendar" → Calendar ID.
- **Use a distinct `calendarColor`** so the org stands out on the combined
  calendar.
- **`bodyHtml`** is optional. Use it for rich content (leadership rosters,
  schedules). Most orgs leave it `null` and render from the structured fields.

If you'd rather not edit code, submit the details through the
[Contact page](https://wcsmn.com/contact/).

## Code contributions

### Setup

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

### Conventions

- **TypeScript, strict.** The repo extends `astro/tsconfigs/strict`.
- **Pages read data only through `src/lib/data.ts`** — never import the seed
  directly. See [ARCHITECTURE.md](ARCHITECTURE.md).
- **Styles** use the tokens in `src/styles/global.css`. Prefer existing tokens
  and component classes (`.button`, `.org-card`, `.chip`, `.cal-card`,
  `.eyebrow`) over one-off CSS.
- **External links** open in a new tab automatically (a script in
  `Base.astro`), and data-driven `http(s)` links also set `target`/`rel` at the
  source. You don't need to add `target="_blank"` by hand in prose.

### Commit messages — this matters for releases

Releases are automated by semantic-release, which reads
[Conventional Commits](https://www.conventionalcommits.org/) to decide the next
version. Use these prefixes:

| Prefix | Effect | Example |
| --- | --- | --- |
| `fix:` | patch (2.1.0 → 2.1.1) | `fix: correct TC Rebels calendar color` |
| `feat:` | minor (2.1.0 → 2.2.0) | `feat: add North Shore Swing` |
| `feat!:` or `BREAKING CHANGE:` | major (2.1.0 → 3.0.0) | `feat!: drop legacy org schema` |
| `chore:`, `docs:`, `refactor:`, `style:` | no release | `docs: expand contributing guide` |

See [RELEASING.md](RELEASING.md) for the full flow.

### Updating the contributors list

Add yourself to `src/pages/contributions/contributors.astro` in the same PR as
your first change.

## Known doc/site follow-ups

These are content/site inconsistencies surfaced during the docs review, kept
here so they aren't lost:

- **Add-event target is stale.** `/contributions/add-event/` points at
  `minnesota.wcs@gmail.com`, which is no longer a homepage calendar source.
  Decide whether to re-add that aggregate, point contributors at a specific
  org calendar, or rewrite the instructions.
- **Old repo URL in pages.** `how-to-contribute.astro` and `contributors.astro`
  link to `github.com/kaianolevine/wcsmn.com`; the active repo is
  `github.com/mini-app-polis/website-astro-wcsmn`.
