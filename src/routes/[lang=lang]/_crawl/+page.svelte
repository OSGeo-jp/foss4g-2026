<script lang="ts">
  import { routes } from '$lib/routes'
  export let data
  const { lang } = data
  const list = routes[lang as 'en' | 'ja']
</script>

<ul>
  {#each list as p}
    <li><a href={`/${lang}${p}`}>{p}</a></li>
  {/each}
</ul>
