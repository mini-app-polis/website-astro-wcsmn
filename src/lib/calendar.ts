// ─────────────────────────────────────────────────────────────
// Google Calendar embed URL builder.
//
// Centralizes embed URL construction so the markup never hand-assembles
// calendar query strings. If the site later renders a custom calendar
// view instead of Google's iframe, this is the only place that changes.
// ─────────────────────────────────────────────────────────────

const TZ = 'America/Chicago';

interface SingleEmbedOptions {
  calendarId: string;
  color?: string | null;
  title?: string;
  mode?: 'MONTH' | 'WEEK' | 'AGENDA';
  height?: number;
}

/** Build an embed URL for one calendar. */
export function singleCalendarUrl({
  calendarId,
  color,
  title,
  mode = 'AGENDA',
  height = 700,
}: SingleEmbedOptions): string {
  const params = new URLSearchParams();
  params.set('height', String(height));
  params.set('wkst', '1');
  params.set('ctz', TZ);
  params.set('showPrint', '0');
  if (title) params.set('title', title);
  params.set('mode', mode);
  params.set('src', calendarId);
  if (color) params.set('color', color);
  // URLSearchParams encodes '#'; Google expects the raw value, so the
  // leading '#' becomes %23 which Google accepts.
  return `https://calendar.google.com/calendar/embed?${params.toString()}`;
}

interface CombinedSource {
  calendarId: string;
  color: string;
}

interface CombinedEmbedOptions {
  sources: CombinedSource[];
  title?: string;
  mode?: 'MONTH' | 'WEEK' | 'AGENDA';
  height?: number;
}

/** Build a single embed URL that overlays multiple calendars. */
export function combinedCalendarUrl({
  sources,
  title = 'WCS MN',
  mode = 'MONTH',
  height = 800,
}: CombinedEmbedOptions): string {
  const params = new URLSearchParams();
  params.set('height', String(height));
  params.set('wkst', '1');
  params.set('ctz', TZ);
  params.set('showPrint', '0');
  params.set('title', title);
  params.set('mode', mode);
  // Multiple src/color pairs are appended in order.
  for (const s of sources) {
    params.append('src', s.calendarId);
  }
  for (const s of sources) {
    params.append('color', s.color);
  }
  return `https://calendar.google.com/calendar/embed?${params.toString()}`;
}
