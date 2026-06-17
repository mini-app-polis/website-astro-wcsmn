// ─────────────────────────────────────────────────────────────
// Data provider — the single seam between pages and the data source.
//
// EVERY page reads org/calendar data through these functions. Nothing
// imports ../data/organizations.ts directly. When a backend exists,
// replace the bodies of these functions with fetch() calls that return
// the same types — pages do not change.
//
// Rules that keep the future migration cheap:
//   1. Pages only ever call functions here (never the seed directly).
//   2. Read-only. This site never writes or authenticates.
//   3. The return types in ./types.ts are the contract, not the seed shape.
// ─────────────────────────────────────────────────────────────

import { organizations } from '../data/organizations';
import type { Organization, CombinedCalendarSource } from './types';

// Fallback event color for any org that has a calendar but no color set.
const DEFAULT_CALENDAR_COLOR = '#4467dd';

/** All organizations, in display order. */
export async function getOrganizations(): Promise<Organization[]> {
  return organizations;
}

/** A single organization by slug, or null if not found. */
export async function getOrganization(
  slug: string
): Promise<Organization | null> {
  return organizations.find((o) => o.slug === slug) ?? null;
}

/**
 * Sources for the combined homepage calendar embed.
 *
 * Derived from the orgs: every organization that has a calendarId contributes
 * one source, in org display order, using its own calendarColor. Add or remove
 * an org (or change its calendar/color) and the homepage updates automatically.
 * There is no separate hand-maintained source list.
 */
export async function getCombinedCalendarSources(): Promise<
  CombinedCalendarSource[]
> {
  const orgs = await getOrganizations();
  return orgs
    .filter((o) => o.calendarId !== null)
    .map((o) => ({
      calendarId: o.calendarId as string,
      color: o.calendarColor ?? DEFAULT_CALENDAR_COLOR,
    }));
}
