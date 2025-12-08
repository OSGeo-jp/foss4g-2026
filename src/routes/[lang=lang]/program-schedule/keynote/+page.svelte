<script lang="ts">
  import { t } from 'svelte-i18n'
  import ComingSoon from '$components/ComingSoon.svelte'
</script>

<svelte:head>
  <title>{$t('nav.program_sub.keynote')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.program_sub.keynote')}</h1>
  
  <ComingSoon message={$t('keynote.coming_soon_message')} class="mb-8" />
  
  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('keynote.program.title')}</h2>
    <p class="mb-6">
      {$t('keynote.program.description')}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-blue-50 p-6 rounded-lg text-center">
        <h3 class="text-lg font-semibold mb-2">{$t('keynote.schedule.day1.title')}</h3>
        <p class="text-sm mb-2">{$t('keynote.schedule.day1.date')}</p>
        <div class="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span class="text-xs text-gray-600">{$t('keynote.schedule.tba')}</span>
        </div>
        <p class="text-sm font-medium">{$t('keynote.schedule.day1.speaker')}</p>
        <p class="text-xs text-gray-600">{$t('keynote.schedule.day1.topic')}</p>
      </div>
      
      <div class="bg-green-50 p-6 rounded-lg text-center">
        <h3 class="text-lg font-semibold mb-2">{$t('keynote.schedule.day2.title')}</h3>
        <p class="text-sm mb-2">{$t('keynote.schedule.day2.date')}</p>
        <div class="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span class="text-xs text-gray-600">{$t('keynote.schedule.tba')}</span>
        </div>
        <p class="text-sm font-medium">{$t('keynote.schedule.day2.speaker')}</p>
        <p class="text-xs text-gray-600">{$t('keynote.schedule.day2.topic')}</p>
      </div>
      
      <div class="bg-purple-50 p-6 rounded-lg text-center">
        <h3 class="text-lg font-semibold mb-2">{$t('keynote.schedule.day3.title')}</h3>
        <p class="text-sm mb-2">{$t('keynote.schedule.day3.date')}</p>
        <div class="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span class="text-xs text-gray-600">{$t('keynote.schedule.tba')}</span>
        </div>
        <p class="text-sm font-medium">{$t('keynote.schedule.day3.speaker')}</p>
        <p class="text-xs text-gray-600">{$t('keynote.schedule.day3.topic')}</p>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('keynote.selection_criteria.title')}</h2>
    <p class="mb-4">{$t('keynote.selection_criteria.description')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('keynote.selection_criteria.criteria') as criterion}
        <li>{criterion}</li>
      {/each}
    </ul>

    <div class="bg-yellow-50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">{$t('keynote.stay_updated.title')}</h3>
      <p>{$t('keynote.stay_updated.description')}</p>
    </div>
  </div>
</div>
