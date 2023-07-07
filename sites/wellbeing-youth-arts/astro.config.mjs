import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), svelte()],
  site: "https://nus.edu.sg/nuslibraries/dsprojects/wellbeing-youth-arts",
  base: "/nuslibraries/dsprojects/wellbeing-youth-arts"
});
