import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
    syntaxHighlight: 'prism',
  },
  integrations: [tailwind(), react(), mdx()],
});
