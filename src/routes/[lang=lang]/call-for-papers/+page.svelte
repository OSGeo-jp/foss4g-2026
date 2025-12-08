<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('call_for_papers.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('call_for_papers.title')}</h1>
  
  <!-- General Sessions -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.general_sessions.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('call_for_papers.general_sessions.description')}</p>
  </section>

  <!-- Academic Track -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.academic_track.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('call_for_papers.academic_track.description')}</p>
  </section>

  <!-- Workshop Proposals -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.workshop_proposals.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('call_for_papers.workshop_proposals.description')}</p>
  </section>

  <!-- Code Sprint -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.code_sprint.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('call_for_papers.code_sprint.description')}</p>
  </section>
</div>
