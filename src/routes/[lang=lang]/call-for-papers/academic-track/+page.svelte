<script lang="ts">
  import { t } from 'svelte-i18n'
  import ComingSoon from '$components/ComingSoon.svelte'
</script>

<svelte:head>
  <title>{$t('nav.cfp_sub.academic_track')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.cfp_sub.academic_track')}</h1>
  
  <ComingSoon message={$t('call_for_papers.academic_track.coming_soon_message')} class="mb-8" />
  
  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.academic_track.overview.title')}</h2>
    <p class="mb-6">
      {$t('call_for_papers.academic_track.overview.description')}
    </p>
  </div>
</div>
