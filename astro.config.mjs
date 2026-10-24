import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.madhacks.io',
  redirects: {
    "/apply": "https://airtable.com/appcsCoekwU6sZanl/pagVgAsoZTgmN9Pmn/form",
    "/walkin": "https://airtable.com/appcsCoekwU6sZanl/pagDNAYeqCC6QqwSz/form",
    "/devpost": "https://madhacks-2026-uw.devpost.com",
    "/project": "https://airtable.com/appJa8ymShCTPpH9I/pag0C9Q3PGBC9qArU/form",
    "/discord": "https://discord.gg/qJKSEUNTZu"
  },
  integrations: [sitemap(), tailwind(), compress()]
});
