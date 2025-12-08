<script lang="ts">
  import { t } from 'svelte-i18n'
  import ComingSoon from '$components/ComingSoon.svelte'
</script>

<svelte:head>
  <title>{$t('nav.cfp_sub.workshops')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.cfp_sub.workshops')}</h1>
  
  <ComingSoon message={$t('call_for_papers.workshop_proposals.coming_soon_message')} class="mb-8" />
  
  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.workshop_proposals.overview.title')}</h2>
    <p class="mb-6">
      {$t('call_for_papers.workshop_proposals.overview.description')}
    </p>
  </div>
</div>
