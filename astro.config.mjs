import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://172.16.11.32',
	integrations: [mdx(), sitemap()],
	server: { host: true }
});
