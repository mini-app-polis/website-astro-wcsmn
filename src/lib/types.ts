// ─────────────────────────────────────────────────────────────
// Data contract for the WCS MN site.
//
// These types are the stable interface between the site's pages and
// wherever org/calendar data lives. Today the implementation reads
// from in-repo seed data (see ./organizations.ts). Later, the provider
// in src/lib/data.ts can be swapped to fetch from a backend that returns
// these same shapes — pages never change.
//
// Keep these fields backend-friendly: flat, serializable, no Astro/JSX.
// ─────────────────────────────────────────────────────────────

export interface OrgLink {
  /** Visible label, e.g. "Website", "Facebook", "Instagram". */
  label: string;
  /** Absolute URL or mailto:. */
  url: string;
}

export interface Organization {
  /** URL key and stable identifier, e.g. "swingesota". */
  slug: string;
  /** Display name, e.g. "SWINGesota". */
  name: string;
  /** Short plain-text description shown in listings and page intro. */
  blurb: string;
  /** Outbound links (website / socials / contact). */
  links: OrgLink[];

  /** Google Calendar ID for this org, or null if none. */
  calendarId: string | null;
  /** Hex color (with leading #) used for this org's events. */
  calendarColor: string | null;

  /** Optional logo path under /public, or null. */
  logo: string | null;

  /**
   * Optional rich body for orgs whose page carries more than a blurb
   * (leadership rosters, schedules, etc). HTML string. Most orgs leave
   * this null and render from structured fields only. This stays a single
   * opaque content field so a backend can still serve it as one column.
   */
  bodyHtml: string | null;
}
