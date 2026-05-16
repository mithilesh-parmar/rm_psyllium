import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rmpsyllium.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {}
      }
    }
  }
});
