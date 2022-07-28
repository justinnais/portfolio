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
        project: 'src/routes/project/_project.svelte',
        hero: 'src/lib/components/Hero.svelte',
        about: 'src/lib/components/About.svelte',
      },
    }),
  ],

  kit: {
    adapter: adapter(),
  },

  extensions: ['.svelte', '.md'],
};

export default config;
