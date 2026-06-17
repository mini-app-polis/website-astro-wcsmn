import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output, deployable to Cloudflare Pages.
// Set `site` to the production URL once the domain is pointed.
// @astrojs/sitemap emits /sitemap-index.xml (referenced by public/robots.txt).
export default defineConfig({
  site: 'https://wcsmn.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
