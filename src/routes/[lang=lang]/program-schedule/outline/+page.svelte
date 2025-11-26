<script lang="ts">
  import { t } from 'svelte-i18n'
  import Table from '$components/Table.svelte'
  import ComingSoon from '$components/ComingSoon.svelte'
</script>

<svelte:head>
  <title>{$t('nav.program_sub.outline')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.program_sub.outline')}</h1>
  
  <ComingSoon message={$t('program_outline.coming_soon_message')} class="mb-8" />
  
  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('program_outline.conference_overview.title')}</h2>
    <p class="mb-6">
      {$t('program_outline.conference_overview.description')}
    </p>

    <h2 class="text-2xl font-semibold mb-4">{$t('program_outline.schedule_glance.title')}</h2>
    <div class="mb-8">
      <Table 
        headers={$t('program_outline.schedule_glance.table.headers')}
        rows={$t('program_outline.schedule_glance.table.rows')}
        class="mb-6"
      />
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('program_outline.daily_structure.title')}</h2>
    
    <h3 class="text-xl font-semibold mb-3">{$t('program_outline.daily_structure.workshop_days.title')}</h3>
    <div class="bg-blue-50 p-6 rounded-lg mb-6">
      <ul class="list-disc pl-6">
        {#each $t('program_outline.daily_structure.workshop_days.schedule') as item}
          <li>{@html item.replace(/^(\d+:\d+ - \d+:\d+):/, '<strong>$1:</strong>')}</li>
        {/each}
      </ul>
    </div>

    <h3 class="text-xl font-semibold mb-3">{$t('program_outline.daily_structure.conference_days.title')}</h3>
    <div class="bg-green-50 p-6 rounded-lg mb-6">
      <ul class="list-disc pl-6">
        {#each $t('program_outline.daily_structure.conference_days.schedule') as item}
          <li>{@html item.replace(/^(\d+:\d+ - \d+:\d+):/, '<strong>$1:</strong>')}</li>
        {/each}
      </ul>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('program_outline.session_tracks.title')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <div class="bg-purple-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">{$t('program_outline.session_tracks.technical.title')}</h4>
        <p class="text-xs">{$t('program_outline.session_tracks.technical.description')}</p>
      </div>
      <div class="bg-orange-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">{$t('program_outline.session_tracks.applications.title')}</h4>
        <p class="text-xs">{$t('program_outline.session_tracks.applications.description')}</p>
      </div>
      <div class="bg-teal-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">{$t('program_outline.session_tracks.community.title')}</h4>
        <p class="text-xs">{$t('program_outline.session_tracks.community.description')}</p>
      </div>
      <div class="bg-red-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">{$t('program_outline.session_tracks.academic.title')}</h4>
        <p class="text-xs">{$t('program_outline.session_tracks.academic.description')}</p>
      </div>
      <div class="bg-yellow-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">{$t('program_outline.session_tracks.humanitarian.title')}</h4>
        <p class="text-xs">{$t('program_outline.session_tracks.humanitarian.description')}</p>
      </div>
      <div class="bg-indigo-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">{$t('program_outline.session_tracks.business.title')}</h4>
        <p class="text-xs">{$t('program_outline.session_tracks.business.description')}</p>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('program_outline.special_events.title')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-pink-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">{$t('program_outline.special_events.welcome_reception.title')}</h3>
        <p class="text-sm mb-2"><strong>Date:</strong> {$t('program_outline.special_events.welcome_reception.date')}</p>
        <p class="text-sm">{$t('program_outline.special_events.welcome_reception.description')}</p>
      </div>
      <div class="bg-cyan-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">{$t('program_outline.special_events.gala_dinner.title')}</h3>
        <p class="text-sm mb-2"><strong>Date:</strong> {$t('program_outline.special_events.gala_dinner.date')}</p>
        <p class="text-sm">{$t('program_outline.special_events.gala_dinner.description')}</p>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('program_outline.presentation_formats.title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      <li>{$t('program_outline.presentation_formats.keynote')}</li>
      <li>{$t('program_outline.presentation_formats.standard')}</li>
      <li>{$t('program_outline.presentation_formats.lightning')}</li>
      <li>{$t('program_outline.presentation_formats.poster')}</li>
      <li>{$t('program_outline.presentation_formats.panel')}</li>
    </ul>

    <div class="bg-gray-50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">{$t('program_outline.program_committee.title')}</h3>
      <p class="mb-2">
        {$t('program_outline.program_committee.description')}
      </p>
      <p class="text-sm text-gray-600">
        {$t('program_outline.program_committee.announcement')}
      </p>
    </div>
  </div>
</div>
