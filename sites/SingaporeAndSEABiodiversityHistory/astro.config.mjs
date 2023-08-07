import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import svelte from "@astrojs/svelte";

export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind(), svelte()],
  site: "https://nus.edu.sg/nuslibraries/dsprojects/sea-biodiversity",
  base: "/nuslibraries/dsprojects/sea-biodiversity",
});
