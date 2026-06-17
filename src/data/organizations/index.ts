import type { Organization } from '../../lib/types';

// ─────────────────────────────────────────────────────────────
// In-repo seed — the local stand-in for "the backend".
//
// Each organization lives in its own file in this folder. To add an org,
// create a new <slug>.ts here that default-exports an Organization — it is
// discovered automatically, no registration needed.
//
// Files load in alphabetical order by filename, which is also the display
// order on the Organizations index. Calendar IDs/colors were decoded from
// the original wcsmn.com Google Calendar embeds.
//
// Nothing outside src/lib/data.ts should import this directly; pages go
// through the provider in src/lib/data.ts.
// ─────────────────────────────────────────────────────────────

const modules = import.meta.glob<{ default: Organization }>(
  ['./*.ts', '!./index.ts'],
  { eager: true }
);

export const organizations: Organization[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, mod]) => mod.default);
