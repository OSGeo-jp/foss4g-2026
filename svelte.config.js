import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const config = {
  preprocess: [
    vitePreprocess(),
  ],
  kit: {
    alias: {
      $components: 'src/components',
      $lib: 'src/lib',
    },
    adapter: adapter(),
    prerender: {
      entries: [
        '*',
        '/en',
        '/ja',
        '/en/_crawl',
        '/ja/_crawl',
      ]
    }
  }
}

export default config
