<script lang="ts">
  import { t } from 'svelte-i18n'
  import Table from '$components/Table.svelte'
</script>

<svelte:head>
  <title>{$t('nav.register_sub.registration')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.register_sub.registration')}</h1>
  
  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.registration.fees_title')}</h2>
    
    <Table 
      headers={[$t('register.registration.type'), $t('register.registration.price')]}
      rows={$t('register.registration.registration_types') as unknown as string[][]}
      class="mb-6"
    />
  </div>
  
  <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
    <div class="flex">
      <div class="ml-3">
        <p class="text-sm text-blue-700">
          <strong>Note:</strong> {$t('register.registration.fees_note')}
        </p>
      </div>
    </div>
  </div>
  
  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.registration.whats_included.title')}</h2>
    
    <ul class="list-disc pl-6 mb-6">
      {#each $t('register.registration.whats_included.items') as item}
        <li>{item}</li>
      {/each}
    </ul>
    
    <h2 class="text-2xl font-semibold mb-4">{$t('register.registration.registration_process.title')}</h2>
    
    <p class="mb-4">
      {$t('register.registration.registration_process.description')}
    </p>
  </div>
</div>
