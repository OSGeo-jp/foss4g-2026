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

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.academic_track.research_areas.title')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div>
        <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.academic_track.research_areas.core_topics.title')}</h3>
        <ul class="list-disc pl-6 text-sm">
          {#each $t('call_for_papers.academic_track.research_areas.core_topics.items') as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.academic_track.research_areas.application_domains.title')}</h3>
        <ul class="list-disc pl-6 text-sm">
          {#each $t('call_for_papers.academic_track.research_areas.application_domains.items') as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.academic_track.submission_guidelines.title')}</h2>
    
    <h3 class="text-xl font-semibold mb-3">{$t('call_for_papers.academic_track.submission_guidelines.paper_types.title')}</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="bg-blue-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">{$t('call_for_papers.academic_track.submission_guidelines.paper_types.full_papers.title')}</h4>
        <p class="text-sm mb-2">{$t('call_for_papers.academic_track.submission_guidelines.paper_types.full_papers.description')}</p>
        <p class="text-xs text-gray-600">{$t('call_for_papers.academic_track.submission_guidelines.paper_types.full_papers.presentation')}</p>
      </div>
      <div class="bg-green-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">{$t('call_for_papers.academic_track.submission_guidelines.paper_types.short_papers.title')}</h4>
        <p class="text-sm mb-2">{$t('call_for_papers.academic_track.submission_guidelines.paper_types.short_papers.description')}</p>
        <p class="text-xs text-gray-600">{$t('call_for_papers.academic_track.submission_guidelines.paper_types.short_papers.presentation')}</p>
      </div>
    </div>

    <h3 class="text-xl font-semibold mb-3">{$t('call_for_papers.academic_track.submission_guidelines.review_process.title')}</h3>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('call_for_papers.academic_track.submission_guidelines.review_process.items') as item}
        <li>{item}</li>
      {/each}
    </ul>

    <h3 class="text-xl font-semibold mb-3">{$t('call_for_papers.academic_track.submission_guidelines.formatting_requirements.title')}</h3>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('call_for_papers.academic_track.submission_guidelines.formatting_requirements.items') as item}
        <li>{item}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.academic_track.important_dates.title')}</h2>
    <div class="bg-gray-50 p-6 rounded-lg mb-8">
      <ul class="list-disc pl-6">
        {#each $t('call_for_papers.academic_track.important_dates.dates') as date}
          <li><strong>{date}</strong></li>
        {/each}
      </ul>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.academic_track.publication.title')}</h2>
    <p class="mb-4">
      {$t('call_for_papers.academic_track.publication.description')}
    </p>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.academic_track.program_committee.title')}</h2>
    <p class="mb-6">
      {$t('call_for_papers.academic_track.program_committee.description')}
    </p>

    <div class="bg-blue-50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.academic_track.contact.title')}</h3>
      <p>{$t('call_for_papers.academic_track.contact.description')} <strong>{$t('call_for_papers.academic_track.contact.email')}</strong></p>
    </div>
  </div>
</div>
