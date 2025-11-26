<script lang="ts">
  import { t } from 'svelte-i18n'
  import Table from '$components/Table.svelte'
</script>

<svelte:head>
  <title>{$t('nav.register_sub.cancellation')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.register_sub.cancellation')}</h1>
  
  <div class="prose max-w-none">
    <p class="text-lg mb-8">
      {$t('register.cancellation.intro')}
    </p>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.cancellation.refund_schedule.title')}</h2>
    <div class="mb-8">
      <Table 
        headers={$t('register.cancellation.refund_schedule.headers') as unknown as string[]}
        rows={$t('register.cancellation.refund_schedule.rows') as unknown as string[][]}
        class="mb-6"
      />
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.cancellation.cancellation_process.title')}</h2>
    <ol class="list-decimal pl-6 mb-6">
      {#each $t('register.cancellation.cancellation_process.steps') as step}
        <li>{@html step}</li>
      {/each}
    </ol>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.cancellation.special_circumstances.title')}</h2>
    
    <h3 class="text-xl font-semibold mb-3">{$t('register.cancellation.special_circumstances.medical_emergency.title')}</h3>
    <p class="mb-4">
      {$t('register.cancellation.special_circumstances.medical_emergency.description')}
    </p>

    <h3 class="text-xl font-semibold mb-3">{$t('register.cancellation.special_circumstances.visa_denial.title')}</h3>
    <p class="mb-4">
      {$t('register.cancellation.special_circumstances.visa_denial.description')}
    </p>

    <h3 class="text-xl font-semibold mb-3">{$t('register.cancellation.special_circumstances.force_majeure.title')}</h3>
    <p class="mb-6">
      {$t('register.cancellation.special_circumstances.force_majeure.description')}
    </p>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.cancellation.transfer_policy.title')}</h2>
    <div class="bg-blue-50 p-6 rounded-lg mb-8">
      <h3 class="text-lg font-semibold mb-2">{$t('register.cancellation.transfer_policy.registration_transfer.title')}</h3>
      <p class="mb-4">
        {$t('register.cancellation.transfer_policy.registration_transfer.description')}
      </p>
      <ul class="list-disc pl-6 mb-4">
        {#each $t('register.cancellation.transfer_policy.registration_transfer.conditions') as condition}
          <li>{condition}</li>
        {/each}
      </ul>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.cancellation.workshop_cancellations.title')}</h2>
    <p class="mb-4">{$t('register.cancellation.workshop_cancellations.description')}</p>
    <p class="mb-6">
      <strong>{$t('register.cancellation.workshop_cancellations.note')}</strong>
    </p>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.cancellation.no_show_policy.title')}</h2>
    <div class="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
      <p>
        <strong>{$t('register.cancellation.no_show_policy.warning')}</strong>
      </p>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.cancellation.contact_information.title')}</h2>
    <div class="bg-gray-50 p-6 rounded-lg">
      <p class="mb-2">
        <strong>{$t('register.cancellation.contact_information.registration')}</strong>
      </p>
      <p class="mb-2">
        <strong>{$t('register.cancellation.contact_information.phone')}</strong>
      </p>
      <p class="text-sm text-gray-600">
        {$t('register.cancellation.contact_information.note')}
      </p>
    </div>
  </div>
</div>
