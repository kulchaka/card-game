import { defineConfig, minimal2023Preset as preset } from '@vite-pwa/assets-generator/config'

export default defineConfig({
	headLinkOptions: {
		preset: '2023',
	},
	preset,
	images: [
		'public/assets/favicon/web-app-manifest-512x512.png',
		'public/assets/favicon/web-app-manifest-192x192.png',
		'public/assets/favicon/favicon-48x48.png',
		'public/assets/favicon/favicon.svg',
		'public/assets/favicon/favicon.ico',
		'public/assets/favicon/apple-touch-icon.png',
	],
})
