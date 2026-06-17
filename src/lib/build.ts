// ─────────────────────────────────────────────────────────────
// Build/version info for the footer.
//
// Mirrors the original Eleventy build.js. Runs at build time (Node), so it
// reads Cloudflare Pages env vars and the package.json version that
// release-please keeps in sync.
//
//   - On the production branch (main): show the package.json version, which
//     release-please bumps on each release.
//   - On preview branches: show `dev@<branch>` so previews are obvious.
//   - commit: short SHA of the deployed commit (or "local" off Cloudflare).
// ─────────────────────────────────────────────────────────────

import pkg from '../../package.json';

export interface BuildInfo {
  version: string;
  commit: string;
  branch: string;
}

export function getBuildInfo(): BuildInfo {
  const sha = process.env.CF_PAGES_COMMIT_SHA || '';
  const shortSha = sha ? sha.slice(0, 7) : 'local';

  const branch = process.env.CF_PAGES_BRANCH || 'local';
  const isMain = branch === 'main';

  const version = isMain ? pkg.version || shortSha : `dev@${branch}`;

  return { version, commit: shortSha, branch };
}
