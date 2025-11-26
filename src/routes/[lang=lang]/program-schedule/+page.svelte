<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('program_schedule.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('program_schedule.title')}</h1>
  
  <!-- Outline -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('program_schedule.outline.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('program_schedule.outline.description')}</p>
  </section>

  <!-- Keynote Speakers -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('program_schedule.keynote.title')}</h2>
    <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4">
      <p class="text-yellow-700">{$t('common.coming_soon')}</p>
    </div>
  </section>

  <!-- Presentations -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('program_schedule.presentations.title')}</h2>
    <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4">
      <p class="text-yellow-700">{$t('common.coming_soon')}</p>
    </div>
  </section>

  <!-- Workshop -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('program_schedule.workshop.title')}</h2>
    <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4">
      <p class="text-yellow-700">{$t('common.coming_soon')}</p>
    </div>
  </section>

  <!-- Events -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('program_schedule.events.title')}</h2>
    <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4">
      <p class="text-yellow-700">{$t('common.coming_soon')}</p>
    </div>
  </section>
</div>
