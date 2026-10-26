import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import requireEnv from './integrations/require-env.mjs';

// Static output, deployable to Cloudflare Pages. `site` is the canonical
// origin; canonical URLs are built from it.
// @astrojs/sitemap emits /sitemap-index.xml (referenced by public/robots.txt).
export default defineConfig({
  site: 'https://wcsmn.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [requireEnv(['PUBLIC_API_URL', 'PUBLIC_TURNSTILE_SITE_KEY']), sitemap()],
});
