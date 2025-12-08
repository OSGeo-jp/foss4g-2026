<script lang="ts">
  import { t } from 'svelte-i18n'
  import Map from '$components/Map.svelte'
</script>

<svelte:head>
  <title>{$t('nav.about_sub.map')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.about_sub.map')}</h1>
  
  <div class="mb-8">
    <Map 
      mapClass="h-96 w-full rounded-lg"
      style={$t('map.settings.style')}
      center={[132.4596, 34.3853]}
      zoom={12}
      items={[]}
    />
  </div>
  
  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('about.map.venues_title')}</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-2">{$t('about.map.main_venue.title')}</h3>
        <p class="text-gray-700">{$t('about.map.main_venue.name')}</p>
        <p class="text-sm text-gray-600 mt-2">{$t('about.map.main_venue.dates')}</p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-2">{$t('about.map.workshop_venue.title')}</h3>
        <p class="text-gray-700">{$t('about.map.workshop_venue.name')}</p>
        <p class="text-sm text-gray-600 mt-2">{$t('about.map.workshop_venue.dates')}</p>
      </div>
    </div>
  </div>
</div>
