import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],

	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svelte', '.md', '.svx']
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // SPA fallback for dynamic routes
			strict: false // avoids build errors on dynamic routes
		}),

		// Base path for GitHub Pages repo
		paths: {
			base: '/iks'
		},

		// Prerender config
		prerender: {
			handleHttpError: 'warn' // avoids build breaking on fetch errors
		}
	}
};

export default config;
