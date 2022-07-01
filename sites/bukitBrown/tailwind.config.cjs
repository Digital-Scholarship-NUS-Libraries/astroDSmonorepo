module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}','../../packages/**/*.astro'],
  safelist: ['sr-only'],
	theme: {
		extend: {},
	},
	plugins: [
    require('@tailwindcss/typography'),
  ],
}
