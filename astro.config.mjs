import { defineConfig } from 'astro/config';

// Static output, deployable to Cloudflare Pages.
// Set `site` to the production URL once the domain is pointed.
export default defineConfig({
  site: 'https://wcsmn.com',
  output: 'static',
  trailingSlash: 'ignore',
});
