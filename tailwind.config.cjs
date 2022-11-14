/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		theme: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				black: colors.black,
				white: colors.white,
				gray: colors.neutral,
				green: colors.emerald,
				purple: colors.indigo,
				yellow: colors.yellow,
				red: colors.rose,
				blue: colors.blue,
				'off-black': '#030303'
			},
			extend: {
				fontSize: {
					xxs: '12px'
				}
			}
		},
		plugins: [require('@tailwindcss/forms')],
	}
}
