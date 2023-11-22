import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import bun from 'astro-bun'

import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://www.devopsick.com' : 'http://localhost:4321',
  output: 'server',
  adapter: bun(),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
        debug: false,
      },
    }),
    robotsTxt({
      sitemap: 'https://www.devopsick.com/sitemap-0.xml',
      host: 'devopsick.com',
    }),
  ],
})
