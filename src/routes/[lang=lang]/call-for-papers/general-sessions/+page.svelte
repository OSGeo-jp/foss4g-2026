<script lang="ts">
  import { t } from 'svelte-i18n'
  import ComingSoon from '$components/ComingSoon.svelte'
</script>

<svelte:head>
  <title>{$t('nav.cfp_sub.general_sessions')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.cfp_sub.general_sessions')}</h1>
  
  <ComingSoon message={$t('call_for_papers.general_sessions.coming_soon_message')} class="mb-8" />
  
  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.general_sessions.topics.title')}</h2>
    <p class="mb-6">
      {$t('call_for_papers.general_sessions.topics.intro')}
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div>
        <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.general_sessions.topics.technical_topics.title')}</h3>
        <ul class="list-disc pl-6 text-sm">
          {#each $t('call_for_papers.general_sessions.topics.technical_topics.items') as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.general_sessions.topics.application_areas.title')}</h3>
        <ul class="list-disc pl-6 text-sm">
          {#each $t('call_for_papers.general_sessions.topics.application_areas.items') as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.general_sessions.presentation_formats.title')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-blue-50 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">{$t('call_for_papers.general_sessions.presentation_formats.standard_talk.title')}</h3>
        <p class="text-sm">{$t('call_for_papers.general_sessions.presentation_formats.standard_talk.description')}</p>
      </div>
      <div class="bg-green-50 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">{$t('call_for_papers.general_sessions.presentation_formats.lightning_talk.title')}</h3>
        <p class="text-sm">{$t('call_for_papers.general_sessions.presentation_formats.lightning_talk.description')}</p>
      </div>
      <div class="bg-purple-50 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">{$t('call_for_papers.general_sessions.presentation_formats.poster_session.title')}</h3>
        <p class="text-sm">{$t('call_for_papers.general_sessions.presentation_formats.poster_session.description')}</p>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.general_sessions.important_dates.title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('call_for_papers.general_sessions.important_dates.dates') as date}
        <li><strong>{date}</strong></li>
      {/each}
    </ul>
  </div>
</div>
