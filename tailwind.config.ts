/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		extend: {},
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require('flowbite/plugin')({
			charts: true,
		}),
	],
}
