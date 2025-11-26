<script lang="ts">
  import { t } from 'svelte-i18n'
  import Card from '$components/Card.svelte'
</script>

<svelte:head>
  <title>{$t('nav.about_sub.sponsors')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.about_sub.sponsors')}</h1>
  
  <div class="prose max-w-none mb-12">
    <p class="text-lg mb-6">
      {$t('about.sponsors.intro')}
    </p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
    <Card title={$t('about.sponsors.diamond.title')} class="border-2 border-blue-600 bg-gradient-to-br from-blue-50 to-purple-50">
      <ul class="list-disc pl-6 mb-4">
        {#each $t('about.sponsors.diamond.benefits') as benefit}
          <li>{benefit}</li>
        {/each}
      </ul>
      <p class="text-2xl font-bold text-primary">{$t('about.sponsors.diamond.price')}</p>
    </Card>

    <Card title={$t('about.sponsors.platinum.title')} class="border-2 border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100">
      <ul class="list-disc pl-6 mb-4">
        {#each $t('about.sponsors.platinum.benefits') as benefit}
          <li>{benefit}</li>
        {/each}
      </ul>
      <p class="text-2xl font-bold text-primary">{$t('about.sponsors.platinum.price')}</p>
    </Card>

    <Card title={$t('about.sponsors.gold.title')} class="border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50">
      <ul class="list-disc pl-6 mb-4">
        {#each $t('about.sponsors.gold.benefits') as benefit}
          <li>{benefit}</li>
        {/each}
      </ul>
      <p class="text-2xl font-bold text-primary">{$t('about.sponsors.gold.price')}</p>
    </Card>

    <Card title={$t('about.sponsors.silver.title')} class="border-2 border-gray-400 bg-gradient-to-br from-gray-100 to-gray-200">
      <ul class="list-disc pl-6 mb-4">
        {#each $t('about.sponsors.silver.benefits') as benefit}
          <li>{benefit}</li>
        {/each}
      </ul>
      <p class="text-2xl font-bold text-primary">{$t('about.sponsors.silver.price')}</p>
    </Card>

    <Card title={$t('about.sponsors.bronze.title')} class="border-2 border-orange-400 bg-gradient-to-br from-orange-50 to-red-50">
      <ul class="list-disc pl-6 mb-4">
        {#each $t('about.sponsors.bronze.benefits') as benefit}
          <li>{benefit}</li>
        {/each}
      </ul>
      <p class="text-2xl font-bold text-primary">{$t('about.sponsors.bronze.price')}</p>
    </Card>
  </div>

  <div class="bg-blue-50 p-8 rounded-lg mb-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('about.sponsors.why_sponsor.title')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 class="text-lg font-semibold mb-2">{$t('about.sponsors.why_sponsor.global_reach.title')}</h3>
        <p class="text-sm">{$t('about.sponsors.why_sponsor.global_reach.description')}</p>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2">{$t('about.sponsors.why_sponsor.innovation_focus.title')}</h3>
        <p class="text-sm">{$t('about.sponsors.why_sponsor.innovation_focus.description')}</p>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2">{$t('about.sponsors.why_sponsor.networking.title')}</h3>
        <p class="text-sm">{$t('about.sponsors.why_sponsor.networking.description')}</p>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2">{$t('about.sponsors.why_sponsor.brand_visibility.title')}</h3>
        <p class="text-sm">{$t('about.sponsors.why_sponsor.brand_visibility.description')}</p>
      </div>
    </div>
  </div>

  <div class="text-center">
    <h2 class="text-2xl font-semibold mb-4">{$t('about.sponsors.interested.title')}</h2>
    <p class="mb-6">{$t('about.sponsors.interested.description')}</p>
    <a href="mailto:foss4g2026[at]osgeo.jp" class="btn btn-primary">
      {$t('about.sponsors.interested.contact_button')}
    </a>
  </div>
</div>
