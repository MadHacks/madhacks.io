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
    "/devpost": "https://madhacks-fall-2026.devpost.com",
    "/discord": "https://discord.gg/qJKSEUNTZu",
    "/judge": "https://airtable.com/appcsCoekwU6sZanl/pag3zJ3MmMNhwoTQv/form",
    "/mentor": "https://airtable.com/appcsCoekwU6sZanl/pag3zJ3MmMNhwoTQv/form",
    "/tracks": "https://airtable.com/appcsCoekwU6sZanl/pag6QHLP8OJDeTaWL/form",
    "/hacker-feedback": "https://airtable.com/appcsCoekwU6sZanl/paggUWO25uqNrK9gi/form"
  },
  integrations: [sitemap(), tailwind(), compress({ Exclude: [(file) => file.endsWith('/map/index.html')] })]
});
