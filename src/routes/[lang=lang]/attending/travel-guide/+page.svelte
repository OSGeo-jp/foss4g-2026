<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('nav.attending_sub.travel_guide')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.attending_sub.travel_guide')}</h1>
  
  <div class="prose max-w-none">
    <p class="text-lg mb-6">
      {$t('travel_guide.intro.description')}
    </p>
    
    <div class="bg-blue-50 p-6 rounded-lg mb-8">
      <h3 class="text-lg font-semibold mb-2">{$t('travel_guide.coming_soon.title')}</h3>
      <p>{$t('travel_guide.coming_soon.description')}</p>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.basic_info.title')}</h2>
    <div class="bg-gray-50 p-6 rounded-lg">
      <ul class="space-y-2">
        <li class="text-sm">{$t('travel_guide.basic_info.visa')}</li>
        <li class="text-sm">{$t('travel_guide.basic_info.currency')}</li>
        <li class="text-sm">{$t('travel_guide.basic_info.language')}</li>
        <li class="text-sm">{$t('travel_guide.basic_info.emergency')}</li>
      </ul>
    </div>
  </div>
</div>
