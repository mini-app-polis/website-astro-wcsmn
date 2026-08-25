import type { SiteCalendar } from '../lib/types';

// ─────────────────────────────────────────────────────────────
// Site-level calendars — the community-wide calendars that are not owned
// by any single organization.
//
// These sit alongside the per-org calendars on the homepage's combined
// view. They deliberately do NOT create organizations: they have no
// /organizations/<slug>/ page and never appear in the org list or nav.
//
// Nothing outside src/lib/data.ts should import this directly; pages go
// through the provider in src/lib/data.ts.
// ─────────────────────────────────────────────────────────────

export const siteCalendars: SiteCalendar[] = [
  {
    id: 'community',
    name: 'WCS MN Community',
    // "West Coast Swing MN" — the shared inbox/calendar contributors are
    // asked to invite when an event does not belong to one specific org.
    calendarId: 'minnesota.wcs@gmail.com',
    color: '#009688',
  },
];
