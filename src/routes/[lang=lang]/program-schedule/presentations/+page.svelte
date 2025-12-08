<script lang="ts">
  import { t } from 'svelte-i18n'
  import ComingSoon from '$components/ComingSoon.svelte'
</script>

<svelte:head>
  <title>{$t('nav.program_sub.presentations')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.program_sub.presentations')}</h1>
  
  <ComingSoon message={$t('presentations.coming_soon_message')} class="mb-8" />
  
  <div class="prose max-w-none">
    <p class="text-lg mb-6">
      {$t('presentations.intro.description')}
    </p>

    <h2 class="text-2xl font-semibold mb-4">{$t('presentations.overview.title')}</h2>
    <p class="mb-6">
      {$t('presentations.overview.description')}
    </p>

    <h2 class="text-2xl font-semibold mb-4">{$t('presentations.session_types.title')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-blue-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">{$t('presentations.session_types.standard.title')}</h3>
        <p class="text-sm font-medium mb-2">{$t('presentations.session_types.standard.duration')}</p>
        <p class="text-sm">{$t('presentations.session_types.standard.description')}</p>
      </div>
      <div class="bg-green-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">{$t('presentations.session_types.lightning.title')}</h3>
        <p class="text-sm font-medium mb-2">{$t('presentations.session_types.lightning.duration')}</p>
        <p class="text-sm">{$t('presentations.session_types.lightning.description')}</p>
      </div>
      <div class="bg-purple-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">{$t('presentations.session_types.poster.title')}</h3>
        <p class="text-sm font-medium mb-2">{$t('presentations.session_types.poster.duration')}</p>
        <p class="text-sm">{$t('presentations.session_types.poster.description')}</p>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('presentations.tracks.title')}</h2>
    <p class="mb-4">{$t('presentations.tracks.description')}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div class="bg-gray-50 p-4 rounded-lg">
        <p class="text-sm">{$t('presentations.tracks.technical')}</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <p class="text-sm">{$t('presentations.tracks.applications')}</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <p class="text-sm">{$t('presentations.tracks.community')}</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <p class="text-sm">{$t('presentations.tracks.academic')}</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <p class="text-sm">{$t('presentations.tracks.humanitarian')}</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <p class="text-sm">{$t('presentations.tracks.business')}</p>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('presentations.submission_info.title')}</h2>
    <p class="mb-4">{$t('presentations.submission_info.description')}</p>
    
    <h3 class="text-xl font-semibold mb-3">{$t('presentations.submission_info.topics.title')}</h3>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('presentations.submission_info.topics.list') as topic}
        <li>{topic}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('presentations.review_process.title')}</h2>
    <p class="mb-4">{$t('presentations.review_process.description')}</p>
    
    <h3 class="text-xl font-semibold mb-3">{$t('presentations.review_process.criteria.title')}</h3>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('presentations.review_process.criteria.list') as criterion}
        <li>{criterion}</li>
      {/each}
    </ul>

    <div class="bg-yellow-50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-3">{$t('presentations.important_dates.title')}</h3>
      <div class="space-y-2">
        <p class="text-sm"><strong>{$t('presentations.important_dates.submission_open')}</strong></p>
        <p class="text-sm"><strong>{$t('presentations.important_dates.submission_deadline')}</strong></p>
        <p class="text-sm"><strong>{$t('presentations.important_dates.notification')}</strong></p>
        <p class="text-sm"><strong>{$t('presentations.important_dates.final_submission')}</strong></p>
      </div>
    </div>
  </div>
</div>
