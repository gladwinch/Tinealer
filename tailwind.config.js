/** @type {import('tailwindcss').Config} */

module.exports = { 
	darkMode: 'class',
	theme: {
		darkSelector: '.dark-mode',
		extend: {
			colors: {
				primary: {
					'light': '#fdf0d5',
					'dark': '#3a3335'
				}
			}
		}
    },
	variants: {
        backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
		borderColor: ['dark', 'dark-disabled', 'dark-focus', 'dark-focus-within'],
		textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder']
    },
	plugins: [require('tailwindcss-dark-mode')()],
	content: [
		'components/**/*.vue',
		'layouts/**/*.vue',
		'pages/**/*.vue',
		'plugins/**/*.js',
		'nuxt.config.js'
	],
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config.js',
		exposeConfig: false,
		config: {},
		injectPosition: 0,
		viewer: true,
	},
	colorMode: {
		preference: 'system',
		fallback: 'light',
		hid: 'nuxt-color-mode-script',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme'
	} 
}