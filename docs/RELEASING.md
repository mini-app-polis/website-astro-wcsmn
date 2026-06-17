# Releasing & versioning

Releases are fully automated by [semantic-release](https://semantic-release.gitbook.io/).
You never bump a version by hand — you write
[Conventional Commit](https://www.conventionalcommits.org/) messages, and the
version, git tag, GitHub release, and `CHANGELOG.md` are derived from them.

## How a release happens

1. You merge commits to `main` (e.g. a `feat:` or `fix:`).
2. The `release` GitHub Action (`.github/workflows/release.yml`) runs
   semantic-release.
3. semantic-release inspects the commits since the last tag and decides the
   next version:
   - `fix:` → patch, `feat:` → minor, `feat!:`/`BREAKING CHANGE:` → major.
   - `chore:`/`docs:`/`refactor:`/`style:` → no release.
4. If a release is warranted, it updates `package.json` + `package-lock.json`,
   prepends to `CHANGELOG.md`, creates the `vX.Y.Z` tag and GitHub release, and
   commits the version bump back to `main`.

## Config

- `.releaserc.json` — plugin pipeline: commit-analyzer → release-notes-generator
  → changelog → npm (`npmPublish: false`, this is a private site) → git →
  github.
- `.github/workflows/release.yml` — runs on push to `main`, Node 22 (required
  by semantic-release v25), using the default `GITHUB_TOKEN`.

## Why there's no `[skip ci]`

The release commit is **not** marked `[skip ci]`. That's deliberate:

- The release commit is pushed with the automatic `GITHUB_TOKEN`, and GitHub
  does not trigger workflows from `GITHUB_TOKEN` pushes — so the release
  workflow doesn't loop.
- But Cloudflare Pages watches the repo independently and **does** deploy that
  commit. We need it to, because the deployed footer version comes from
  `package.json`, which the release commit updates.

The trade-off: each release produces two Cloudflare deploys (your change, then
the version-bump commit). The version ends up correct after the second deploy.

> If `main` is ever branch-protected and semantic-release is switched to a PAT
> to push through it, a PAT push **will** re-trigger the workflow — you'd then
> need a different loop guard, and the deploy strategy would need revisiting.

## The footer version

`src/lib/build.ts` builds the footer line at build time:

- On `main`: the `package.json` version (kept current by semantic-release) +
  the short commit SHA — e.g. `Version: 2.1.0 · 91cb80d`.
- On preview branches: `dev@<branch>`.

It reads Cloudflare's `CF_PAGES_BRANCH` and `CF_PAGES_COMMIT_SHA`. See
[DEPLOY.md](DEPLOY.md).

## Versioning baseline

The project was reset to a `2.0.0` baseline for the Astro rebuild. semantic-
release derives versions from git tags, so a `v2.0.0` tag must exist for the
sequence to continue correctly from 2.x. (Earlier 1.x tags from before the
baseline can be ignored or cleaned up.)
