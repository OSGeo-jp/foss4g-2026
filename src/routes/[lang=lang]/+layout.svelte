<script lang="ts">
  import { setupI18n } from '$lib/i18n'
  import { t } from 'svelte-i18n'

  const { data, children } = $props<{ data: { locale: 'en' | 'ja' }, children: unknown }>()

  // Re-run on locale changes; not async (no Promise return)
  $effect(() => {
    setupI18n(data.locale)
  })
</script>

<svelte:head>
  <title>{$t('title')}</title>
</svelte:head>

<nav>
  <a href="/en/">English</a>
  <a href="/ja/">日本語</a>
</nav>

{@render children()}