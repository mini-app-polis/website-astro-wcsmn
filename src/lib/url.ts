/**
 * safeUrl() is the scheme check for every href built from data. Today the
 * organisation links are a static seed, but data.ts is written to be
 * replaced by calls to a backend, and then they come from outside the repo.
 * Accepts an absolute http: or https: URL, or a site-relative path starting
 * with a single "/", and returns it unchanged; anything else is null.
 */
export function safeUrl(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith('/')) {
    // "//host" and "/\host" are protocol-relative: another origin.
    return trimmed.startsWith('//') || trimmed.startsWith('/\\') ? null : trimmed;
  }
  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    return null;
  }
  return parsed.protocol === 'http:' || parsed.protocol === 'https:' ? trimmed : null;
}
