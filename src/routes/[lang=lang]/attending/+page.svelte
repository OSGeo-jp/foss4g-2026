<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('attending.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('attending.title')}</h1>
  
  <!-- Conference venue -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('attending.venue.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('attending.venue.description')}</p>
  </section>

  <!-- Transport Information -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('attending.transport.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('attending.transport.description')}</p>
  </section>

  <!-- Travel Guide -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('attending.travel_guide.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('attending.travel_guide.description')}</p>
  </section>

  <!-- Accommodation -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('attending.accommodation.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('attending.accommodation.description')}</p>
  </section>

</div>
