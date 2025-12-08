<script lang="ts">
  import '../../app.css'
  import { setupI18n } from '$lib/i18n'
  import { t } from 'svelte-i18n'
  import { page } from '$app/state'
  import Header from '$components/Header.svelte'
  import Footer from '$components/Footer.svelte'
  import Breadcrumb from '$components/Breadcrumb.svelte'

  import "$lib/icons"

  const { data, children } = $props<{ data: { locale: 'en' | 'ja' }, children: unknown }>()

  // Re-run on locale changes; not async (no Promise return)
  $effect(() => {
    setupI18n(data.locale)
  })
  
  // Check if we're on the homepage
  let isHomepage = $state(false)
  
  $effect(() => {
    const pathname = page.url.pathname
    const segments = pathname.split('/').filter(Boolean)
    // Remove language prefix and check if there are any remaining segments
    if (segments[0] === 'en' || segments[0] === 'ja') {
      segments.shift()
    }
    isHomepage = segments.length === 0
  })
</script>

<svelte:head>
  <title>{$t('title')}</title>
</svelte:head>

<Header {data} />
<div class="mx-auto flex min-h-screen max-w-5xl flex-col gap-6 sm:gap-0 p-4">
  {#if !isHomepage}
    <Breadcrumb {data} />
  {/if}
  {@render children()}
</div>
<Footer />