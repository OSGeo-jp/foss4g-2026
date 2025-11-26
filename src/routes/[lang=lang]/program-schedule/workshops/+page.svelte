<script lang="ts">
  import { t } from 'svelte-i18n'
  import ComingSoon from '$components/ComingSoon.svelte'
</script>

<svelte:head>
  <title>{$t('nav.program_sub.workshops')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.program_sub.workshops')}</h1>
  
  <ComingSoon message={$t('workshops.coming_soon_message')} class="mb-8" />
  
  <div class="prose max-w-none">
    <p class="text-lg mb-6">
      {$t('workshops.intro.description')}
    </p>

    <h2 class="text-2xl font-semibold mb-4">{$t('workshops.overview.title')}</h2>
    <p class="mb-6">
      {$t('workshops.overview.description')}
    </p>

    <h2 class="text-2xl font-semibold mb-4">{$t('workshops.schedule.title')}</h2>
    <div class="bg-blue-50 p-6 rounded-lg">
      <ul class="space-y-2">
        <li class="text-sm font-medium">{$t('workshops.schedule.day1')}</li>
        <li class="text-sm font-medium">{$t('workshops.schedule.day2')}</li>
        <li class="text-sm">{$t('workshops.schedule.time')}</li>
        <li class="text-sm">{$t('workshops.schedule.venue')}</li>
      </ul>
    </div>
  </div>
</div>
