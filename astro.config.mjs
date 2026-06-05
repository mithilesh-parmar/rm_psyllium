import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE_COPY_LASTMOD = '2026-06-05';
const BLOG_LASTMOD = '2026-06-04';
const SUPPORT_LASTMOD = '2026-06-01';
const LANGUAGE_PREFIX = /^\/(en|ar|zh|nl|fr|de|it|pt|ru|es)\/?$/;

const getLastmodForUrl = (url) => {
  const { pathname } = new URL(url);

  if (pathname.includes('/blog/')) return BLOG_LASTMOD;

  if (
    pathname === '/' ||
    LANGUAGE_PREFIX.test(pathname) ||
    pathname.includes('/products/') ||
    pathname.includes('/quality/') ||
    pathname.includes('/faq/') ||
    pathname.includes('/contact/') ||
    pathname.includes('/about/')
  ) {
    return SITE_COPY_LASTMOD;
  }

  if (pathname.includes('/regions/') || pathname.includes('/industries/')) {
    return BLOG_LASTMOD;
  }

  return SUPPORT_LASTMOD;
};

const shouldIndexUrl = (url) => {
  const { pathname } = new URL(url);
  return !pathname.includes('/b2b-preview/') && !pathname.includes('/thank-you/');
};

export default defineConfig({
  site: 'https://rmpsyllium.com',
  integrations: [
    sitemap({
      filter: shouldIndexUrl,
      serialize(item) {
        return {
          ...item,
          lastmod: getLastmodForUrl(item.url)
        };
      }
    })
  ]
});
