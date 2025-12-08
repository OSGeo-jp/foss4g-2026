<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('nav.attending_sub.transport')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.attending_sub.transport')}</h1>
  
  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('transport.getting_to_hiroshima.title')}</h2>
    
    <h3 class="text-xl font-semibold mb-3">{$t('transport.getting_to_hiroshima.by_air.title')}</h3>
    <div class="bg-blue-50 p-6 rounded-lg mb-6">
      <h4 class="font-semibold mb-2">{$t('transport.getting_to_hiroshima.by_air.hiroshima_airport')}</h4>
      <p class="mb-2">{$t('transport.getting_to_hiroshima.by_air.description')}</p>
      <p class="text-sm">{$t('transport.getting_to_hiroshima.by_air.limousine_bus')}</p>
    </div>

    <h3 class="text-xl font-semibold mb-3">{$t('transport.getting_to_hiroshima.by_train.title')}</h3>
    <p class="mb-4">{$t('transport.getting_to_hiroshima.by_train.description')}</p>
    <div class="bg-green-50 p-6 rounded-lg mb-6">
      <ul class="list-disc pl-6 text-sm">
        <li>{$t('transport.getting_to_hiroshima.by_train.from_tokyo')}</li>
        <li>{$t('transport.getting_to_hiroshima.by_train.from_osaka')}</li>
      </ul>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('transport.local_transport.title')}</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-yellow-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">{$t('transport.local_transport.streetcar.title')}</h3>
        <ul class="list-disc pl-6 text-sm">
          <li>{$t('transport.local_transport.streetcar.fare')}</li>
          <li>{$t('transport.local_transport.streetcar.day_pass')}</li>
        </ul>
      </div>
      <div class="bg-orange-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">{$t('transport.local_transport.bus.title')}</h3>
        <p class="text-sm">{$t('transport.local_transport.bus.fare')}</p>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('transport.venue_access.title')}</h2>
    <div class="bg-purple-50 p-6 rounded-lg mb-8">
      <h3 class="text-lg font-semibold mb-2">{$t('transport.venue_access.to_venue')}</h3>
      <ul class="list-disc pl-6">
        <li>{$t('transport.venue_access.from_station')}</li>
        <li>{$t('transport.venue_access.walking')}</li>
      </ul>
    </div>
  </div>
</div>
