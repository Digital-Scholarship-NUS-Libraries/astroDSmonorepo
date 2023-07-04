import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import svelte from "@astrojs/svelte";

export default defineConfig({
  integrations: [tailwind(), svelte()],
  site: "https://nus.edu.sg/nuslibraries/dsprojects/sea-biodiversity",
  base: "/nuslibraries/dsprojects/sea-biodiversity"
});
