<script lang="ts">
  import { t } from 'svelte-i18n'
  import ComingSoon from '$components/ComingSoon.svelte'
</script>

<svelte:head>
  <title>{$t('nav.cfp_sub.code_sprint')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.cfp_sub.code_sprint')}</h1>
  
  <ComingSoon message={$t('call_for_papers.code_sprint.coming_soon_message')} class="mb-8" />
  
  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.code_sprint.what_is_code_sprint.title')}</h2>
    <p class="mb-6">
      {$t('call_for_papers.code_sprint.what_is_code_sprint.description')}
    </p>

    <div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
      <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.code_sprint.event_info.title')}</h3>
      <p class="mb-2"><strong>{$t('call_for_papers.code_sprint.event_info.dates')}</strong></p>
      <p class="mb-2"><strong>{$t('call_for_papers.code_sprint.event_info.duration')}</strong></p>
      <p><strong>{$t('call_for_papers.code_sprint.event_info.venue')}</strong></p>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.code_sprint.who_should_participate.title')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div>
        <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.code_sprint.who_should_participate.developers.title')}</h3>
        <ul class="list-disc pl-6 text-sm mb-4">
          {#each $t('call_for_papers.code_sprint.who_should_participate.developers.items') as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.code_sprint.who_should_participate.non_developers.title')}</h3>
        <ul class="list-disc pl-6 text-sm mb-4">
          {#each $t('call_for_papers.code_sprint.who_should_participate.non_developers.items') as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.code_sprint.participating_projects.title')}</h2>
    <p class="mb-4">
      {$t('call_for_papers.code_sprint.participating_projects.intro')}
    </p>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('call_for_papers.code_sprint.participating_projects.criteria') as criterion}
        <li>{criterion}</li>
      {/each}
    </ul>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div class="bg-green-50 p-4 rounded-lg text-center">
        <h4 class="font-semibold mb-2">{$t('call_for_papers.code_sprint.participating_projects.categories.desktop_gis.title')}</h4>
        <p class="text-xs">{$t('call_for_papers.code_sprint.participating_projects.categories.desktop_gis.projects')}</p>
      </div>
      <div class="bg-blue-50 p-4 rounded-lg text-center">
        <h4 class="font-semibold mb-2">{$t('call_for_papers.code_sprint.participating_projects.categories.web_mapping.title')}</h4>
        <p class="text-xs">{$t('call_for_papers.code_sprint.participating_projects.categories.web_mapping.projects')}</p>
      </div>
      <div class="bg-purple-50 p-4 rounded-lg text-center">
        <h4 class="font-semibold mb-2">{$t('call_for_papers.code_sprint.participating_projects.categories.geospatial_libraries.title')}</h4>
        <p class="text-xs">{$t('call_for_papers.code_sprint.participating_projects.categories.geospatial_libraries.projects')}</p>
      </div>
      <div class="bg-orange-50 p-4 rounded-lg text-center">
        <h4 class="font-semibold mb-2">{$t('call_for_papers.code_sprint.participating_projects.categories.server_software.title')}</h4>
        <p class="text-xs">{$t('call_for_papers.code_sprint.participating_projects.categories.server_software.projects')}</p>
      </div>
      <div class="bg-teal-50 p-4 rounded-lg text-center">
        <h4 class="font-semibold mb-2">{$t('call_for_papers.code_sprint.participating_projects.categories.mobile_apps.title')}</h4>
        <p class="text-xs">{$t('call_for_papers.code_sprint.participating_projects.categories.mobile_apps.projects')}</p>
      </div>
      <div class="bg-red-50 p-4 rounded-lg text-center">
        <h4 class="font-semibold mb-2">{$t('call_for_papers.code_sprint.participating_projects.categories.data_tools.title')}</h4>
        <p class="text-xs">{$t('call_for_papers.code_sprint.participating_projects.categories.data_tools.projects')}</p>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.code_sprint.sprint_activities.title')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div>
        <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.code_sprint.sprint_activities.development_tasks.title')}</h3>
        <ul class="list-disc pl-6 text-sm">
          {#each $t('call_for_papers.code_sprint.sprint_activities.development_tasks.items') as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.code_sprint.sprint_activities.community_tasks.title')}</h3>
        <ul class="list-disc pl-6 text-sm">
          {#each $t('call_for_papers.code_sprint.sprint_activities.community_tasks.items') as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.code_sprint.what_we_provide.title')}</h2>
    <div class="bg-green-50 p-6 rounded-lg mb-8">
      <ul class="list-disc pl-6">
        {#each $t('call_for_papers.code_sprint.what_we_provide.items') as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.code_sprint.registration_info.title')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-blue-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.code_sprint.registration_info.conference_attendees.title')}</h3>
        <p class="text-2xl font-bold text-primary mb-2">{$t('call_for_papers.code_sprint.registration_info.conference_attendees.price')}</p>
        <p class="text-sm">{$t('call_for_papers.code_sprint.registration_info.conference_attendees.note')}</p>
      </div>
      <div class="bg-yellow-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.code_sprint.registration_info.sprint_only.title')}</h3>
        <p class="text-2xl font-bold text-primary mb-2">{$t('call_for_papers.code_sprint.registration_info.sprint_only.price')}</p>
        <p class="text-sm">{$t('call_for_papers.code_sprint.registration_info.sprint_only.note')}</p>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.code_sprint.how_to_participate.title')}</h2>
    <ol class="list-decimal pl-6 mb-6">
      {#each $t('call_for_papers.code_sprint.how_to_participate.steps') as step}
        <li>{step}</li>
      {/each}
    </ol>

    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.code_sprint.project_proposal_guidelines.title')}</h2>
    <p class="mb-4">{$t('call_for_papers.code_sprint.project_proposal_guidelines.intro')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('call_for_papers.code_sprint.project_proposal_guidelines.requirements') as requirement}
        <li>{requirement}</li>
      {/each}
    </ul>

    <div class="bg-purple-50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.code_sprint.contact.title')}</h3>
      <p class="mb-2">
        <strong>{$t('call_for_papers.code_sprint.contact.participants')}</strong>
      </p>
      <p class="mb-2">
        <strong>{$t('call_for_papers.code_sprint.contact.projects')}</strong>
      </p>
      <p class="text-sm text-gray-600">
        {$t('call_for_papers.code_sprint.contact.note')}
      </p>
    </div>
  </div>
</div>
