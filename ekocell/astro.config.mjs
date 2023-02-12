import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
    syntaxHighlight: 'prism',
  },
  integrations: [
    tailwind(),
    react(),
    mdx(),
    image(),
    mdx({
      extendMarkdownConfig: false,
      smartypants: true,
      gfm: true,
    }),
  ],
});
