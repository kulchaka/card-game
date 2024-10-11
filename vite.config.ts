import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			injectRegister: 'auto',
			manifest: {
				name: 'Star Wars Stone Card Game',
				short_name: 'CardGame',
				description: 'A cool Star Wars themed card game',
				theme_color: '#000000',
				background_color: '#000000',
				display: 'standalone',
				orientation: 'landscape-primary',
				icons: [
					{
						src: '/assets/favicon/web-app-manifest-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/assets/favicon/web-app-manifest-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
			workbox: {
				globPatterns: ['**/*.{js,css,html,svg,png,ico,json,webmanifest}'],
				cleanupOutdatedCaches: true,
				clientsClaim: true,
			},
			devOptions: {
				enabled: true,
				navigateFallback: 'index.html',
			},
		}),
	],
})
