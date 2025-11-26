<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('nav.register_sub.travel_grant')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.register_sub.travel_grant')}</h1>
  
  <div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
    <h2 class="text-xl font-semibold mb-2">{$t('register.travel_grant.supporting_participation.title')}</h2>
    <p>
      {$t('register.travel_grant.supporting_participation.description')}
    </p>
  </div>

  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.travel_grant.grant_coverage.title')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-green-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">{$t('register.travel_grant.grant_coverage.full_grant.title')}</h3>
        <ul class="list-disc pl-6 text-sm">
          {#each $t('register.travel_grant.grant_coverage.full_grant.items') as item}
            <li>{item}</li>
          {/each}
        </ul>
        <p class="text-sm mt-2 text-gray-600">{$t('register.travel_grant.grant_coverage.full_grant.limit')}</p>
      </div>
      <div class="bg-yellow-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">{$t('register.travel_grant.grant_coverage.partial_grant.title')}</h3>
        <ul class="list-disc pl-6 text-sm">
          {#each $t('register.travel_grant.grant_coverage.partial_grant.items') as item}
            <li>{item}</li>
          {/each}
        </ul>
        <p class="text-sm mt-2 text-gray-600">{$t('register.travel_grant.grant_coverage.partial_grant.limit')}</p>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.travel_grant.eligibility.title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('register.travel_grant.eligibility.criteria') as criterion}
        <li>{criterion}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.travel_grant.application_requirements.title')}</h2>
    <p class="mb-4">{$t('register.travel_grant.application_requirements.description')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('register.travel_grant.application_requirements.requirements') as requirement}
        <li>{requirement}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.travel_grant.important_dates.title')}</h2>
    <div class="bg-gray-50 p-6 rounded-lg mb-8">
      <ul class="list-disc pl-6">
        {#each $t('register.travel_grant.important_dates.dates') as date}
          <li><strong>{date}</strong></li>
        {/each}
      </ul>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.travel_grant.selection_process.title')}</h2>
    <p class="mb-4">
      {$t('register.travel_grant.selection_process.description')}
    </p>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('register.travel_grant.selection_process.criteria') as criterion}
        <li>{criterion}</li>
      {/each}
    </ul>

    <div class="bg-orange-50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">{$t('register.travel_grant.recipient_responsibilities.title')}</h3>
      <p class="text-sm mb-2">
        {$t('register.travel_grant.recipient_responsibilities.description')}
      </p>
      <ul class="list-disc pl-6 text-sm">
        {#each $t('register.travel_grant.recipient_responsibilities.responsibilities') as responsibility}
          <li>{responsibility}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>
