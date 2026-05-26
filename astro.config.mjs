import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://rmpsyllium.com',
  integrations: [
    sitemap({
      lastmod: new Date()
    }),
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag']
      }
    })
  ]
});
