import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Allow Svelte + Markdown + SVX files
	extensions: ['.svelte', '.svx', '.md'],

	// Preprocessors for mdsvex and vite
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svelte', '.md', '.svx']
		})
	],

	kit: {
		// Static adapter for GitHub Pages
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			strict: false // avoids "dynamic routes" errors
		}),

		// 👇 IMPORTANT for GitHub Pages — your repo name
		paths: {
			base: '/iks'
		},

		// Avoid build breaking on HTTP fetch errors
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
