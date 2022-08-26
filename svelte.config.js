import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex({
      extensions: ['.md'],
      layout: {
        projects: 'src/routes/projects/_project.svelte',
        hero: 'src/lib/layouts/Hero.svelte',
        about: 'src/lib/layouts/About.svelte',
      },
    }),
  ],

  kit: {
    adapter: adapter(),
  },

  extensions: ['.svelte', '.md'],
};

export default config;
