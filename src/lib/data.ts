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

import {
  organizations,
  combinedCalendarSources,
  type CombinedCalendarSource,
} from '../data/organizations';
import type { Organization } from './types';

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

/** Sources for the combined homepage calendar embed. */
export async function getCombinedCalendarSources(): Promise<
  CombinedCalendarSource[]
> {
  return combinedCalendarSources;
}
