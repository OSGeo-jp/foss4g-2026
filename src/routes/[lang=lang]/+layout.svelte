<script lang="ts">
  import '../../app.css'
  import { setupI18n } from '$lib/i18n'
  import { t } from 'svelte-i18n'
  import Header from '$components/Header.svelte'
  import Footer from '$components/Footer.svelte'

  import "$lib/icons"

  const { data, children } = $props<{ data: { locale: 'en' | 'ja' }, children: unknown }>()

  // Re-run on locale changes; not async (no Promise return)
  $effect(() => {
    setupI18n(data.locale)
  })
</script>

<svelte:head>
  <title>{$t('title')}</title>
</svelte:head>

<Header {data} />
<div class="mx-auto flex min-h-screen max-w-5xl flex-col gap-6 sm:gap-0 p-4">
  {@render children()}
</div>
<Footer />