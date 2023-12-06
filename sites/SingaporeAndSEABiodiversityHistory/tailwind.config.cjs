/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}','../../packages/**/*.astro'],
  safelist: ['sr-only'],
  presets: [
    require('../../packages/ui/tailwind.preset.cjs')
  ],
	theme: {
		extend: {
      height: {
        custom: 'calc(100vh - 161px)'
      }
    }
	},
	plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light"],
  }
}
