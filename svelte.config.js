import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const config = {
  preprocess: [
    vitePreprocess(),
  ],
  kit: {
    alias: {
      $components: 'src/components',
      $lib: 'src/lib',
    }
  }
}

export default config
