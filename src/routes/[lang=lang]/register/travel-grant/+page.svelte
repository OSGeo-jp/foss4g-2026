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
    <h2 class="text-2xl font-semibold mb-4">{$t('register.travel_grant.who_should_apply.title')}</h2>
    <p class="mb-4">{$t('register.travel_grant.who_should_apply.description')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('register.travel_grant.who_should_apply.criteria') as criterion}
        <li>{criterion}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.travel_grant.application_process.title')}</h2>
    <p class="mb-4">{$t('register.travel_grant.application_process.description')}</p>
    <ul class="list-disc pl-6 mb-4">
      {#each $t('register.travel_grant.application_process.key_questions') as question}
        <li>{question}</li>
      {/each}
    </ul>
    <div class="bg-yellow-50 p-4 rounded-lg mb-6">
      <p class="text-sm">{$t('register.travel_grant.application_process.note')}</p>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.travel_grant.about_tgp.title')}</h2>
    <p class="mb-4">{$t('register.travel_grant.about_tgp.description')}</p>
    <p class="mb-4">{$t('register.travel_grant.about_tgp.funding_note')}</p>
    <p class="mb-6">{$t('register.travel_grant.about_tgp.management')}</p>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.travel_grant.important_dates.title')}</h2>
    <div class="bg-gray-50 p-6 rounded-lg mb-8">
      <p class="mb-4 text-sm text-gray-600">{$t('register.travel_grant.important_dates.note')}</p>
      <ul class="list-disc pl-6">
        {#each $t('register.travel_grant.important_dates.dates') as date}
          <li><strong>{date}</strong></li>
        {/each}
      </ul>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.travel_grant.reimbursement.title')}</h2>
    <p class="mb-4">{$t('register.travel_grant.reimbursement.description')}</p>
    <p class="mb-6">{$t('register.travel_grant.reimbursement.unsuccessful')}</p>

    <div class="bg-blue-50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">{$t('register.travel_grant.contact.title')}</h3>
      <p class="text-sm mb-2">{$t('register.travel_grant.contact.description')}</p>
      <p class="text-sm font-semibold">{$t('register.travel_grant.contact.email')}</p>
      <p class="text-sm mt-2">{$t('register.travel_grant.contact.note')}</p>
    </div>
  </div>
</div>
