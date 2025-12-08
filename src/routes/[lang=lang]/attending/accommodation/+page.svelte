<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('nav.attending_sub.accommodation')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.attending_sub.accommodation')}</h1>
  
  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('accommodation.recommended_hotels.title')}</h2>
    <p class="mb-6">
      {$t('accommodation.recommended_hotels.description')}
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-blue-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">{$t('accommodation.hotel_types.luxury.title')}</h3>
        <p class="text-sm mb-2">{$t('accommodation.hotel_types.luxury.price')}</p>
        <ul class="list-disc pl-6 text-xs">
          {#each $t('accommodation.hotel_types.luxury.features') as feature}
            <li>{feature}</li>
          {/each}
        </ul>
      </div>
      <div class="bg-green-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">{$t('accommodation.hotel_types.business.title')}</h3>
        <p class="text-sm mb-2">{$t('accommodation.hotel_types.business.price')}</p>
        <ul class="list-disc pl-6 text-xs">
          {#each $t('accommodation.hotel_types.business.features') as feature}
            <li>{feature}</li>
          {/each}
        </ul>
      </div>
    </div>

    <div class="bg-yellow-50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">{$t('accommodation.booking_info.title')}</h3>
      <p>{$t('accommodation.booking_info.description')}</p>
    </div>
  </div>
</div>