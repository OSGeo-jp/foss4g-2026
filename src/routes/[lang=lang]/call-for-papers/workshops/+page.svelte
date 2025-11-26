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

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.workshop_proposals.workshop_formats.title')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-blue-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.workshop_proposals.workshop_formats.half_day.title')}</h3>
        <ul class="list-disc pl-6 text-sm mb-4">
          {#each $t('call_for_papers.workshop_proposals.workshop_formats.half_day.details') as detail}
            <li>{detail}</li>
          {/each}
        </ul>
        <p class="text-sm text-gray-600">{$t('call_for_papers.workshop_proposals.workshop_formats.half_day.note')}</p>
      </div>
      <div class="bg-green-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.workshop_proposals.workshop_formats.full_day.title')}</h3>
        <ul class="list-disc pl-6 text-sm mb-4">
          {#each $t('call_for_papers.workshop_proposals.workshop_formats.full_day.details') as detail}
            <li>{detail}</li>
          {/each}
        </ul>
        <p class="text-sm text-gray-600">{$t('call_for_papers.workshop_proposals.workshop_formats.full_day.note')}</p>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.workshop_proposals.popular_topics.title')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div class="bg-purple-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">{$t('call_for_papers.workshop_proposals.popular_topics.web_mapping.title')}</h4>
        <p class="text-xs">{$t('call_for_papers.workshop_proposals.popular_topics.web_mapping.tools')}</p>
      </div>
      <div class="bg-orange-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">{$t('call_for_papers.workshop_proposals.popular_topics.desktop_gis.title')}</h4>
        <p class="text-xs">{$t('call_for_papers.workshop_proposals.popular_topics.desktop_gis.tools')}</p>
      </div>
      <div class="bg-teal-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">{$t('call_for_papers.workshop_proposals.popular_topics.spatial_databases.title')}</h4>
        <p class="text-xs">{$t('call_for_papers.workshop_proposals.popular_topics.spatial_databases.tools')}</p>
      </div>
      <div class="bg-red-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">{$t('call_for_papers.workshop_proposals.popular_topics.remote_sensing.title')}</h4>
        <p class="text-xs">{$t('call_for_papers.workshop_proposals.popular_topics.remote_sensing.tools')}</p>
      </div>
      <div class="bg-yellow-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">{$t('call_for_papers.workshop_proposals.popular_topics.programming.title')}</h4>
        <p class="text-xs">{$t('call_for_papers.workshop_proposals.popular_topics.programming.tools')}</p>
      </div>
      <div class="bg-indigo-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">{$t('call_for_papers.workshop_proposals.popular_topics.cloud_platforms.title')}</h4>
        <p class="text-xs">{$t('call_for_papers.workshop_proposals.popular_topics.cloud_platforms.tools')}</p>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.workshop_proposals.proposal_requirements.title')}</h2>
    <p class="mb-4">{$t('call_for_papers.workshop_proposals.proposal_requirements.intro')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('call_for_papers.workshop_proposals.proposal_requirements.requirements') as requirement}
        <li><strong>{@html requirement}</strong></li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.workshop_proposals.instructor_benefits.title')}</h2>
    <div class="bg-green-50 p-6 rounded-lg mb-8">
      <ul class="list-disc pl-6">
        {#each $t('call_for_papers.workshop_proposals.instructor_benefits.benefits') as benefit}
          <li>{benefit}</li>
        {/each}
      </ul>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.workshop_proposals.technical_facilities.title')}</h2>
    <p class="mb-4">{$t('call_for_papers.workshop_proposals.technical_facilities.intro')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('call_for_papers.workshop_proposals.technical_facilities.facilities') as facility}
        <li>{facility}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.workshop_proposals.selection_criteria.title')}</h2>
    <p class="mb-4">{$t('call_for_papers.workshop_proposals.selection_criteria.intro')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('call_for_papers.workshop_proposals.selection_criteria.criteria') as criterion}
        <li>{criterion}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.workshop_proposals.important_dates.title')}</h2>
    <div class="bg-gray-50 p-6 rounded-lg mb-8">
      <ul class="list-disc pl-6">
        {#each $t('call_for_papers.workshop_proposals.important_dates.dates') as date}
          <li><strong>{date}</strong></li>
        {/each}
      </ul>
    </div>

    <div class="bg-blue-50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.workshop_proposals.contact.title')}</h3>
      <p class="mb-2">{$t('call_for_papers.workshop_proposals.contact.description')} <strong>{$t('call_for_papers.workshop_proposals.contact.email')}</strong></p>
      <p class="text-sm text-gray-600">{$t('call_for_papers.workshop_proposals.contact.note')}</p>
    </div>
  </div>
</div>
