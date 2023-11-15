/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				myColor: {
					primary: '#9b5712',
					second: '#f0ff00',
					dark: '#332C25',
				},
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light', 'dark', 'wireframe'],
	},
};
