<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('nav.about_sub.concept')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.about_sub.concept')}</h1>
  
  <div class="prose max-w-none">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-primary mb-4">
        "{$t('about.concept.theme.title')}"
      </h2>
      <p class="text-xl text-gray-600">
        {$t('about.concept.theme.subtitle')}
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <div>
        <h3 class="text-2xl font-semibold mb-4">{$t('about.concept.vision.title')}</h3>
        <p class="mb-4">
          {$t('about.concept.vision.paragraph_1')}
        </p>
        <p class="mb-4">
          {$t('about.concept.vision.paragraph_2')}
        </p>
      </div>
      
      <div>
        <h3 class="text-2xl font-semibold mb-4">{$t('about.concept.hiroshima.title')}</h3>
        <p class="mb-4">
          {$t('about.concept.hiroshima.paragraph_1')}
        </p>
        <p class="mb-4">
          {$t('about.concept.hiroshima.paragraph_2')}
        </p>
      </div>
    </div>

    <div class="bg-gray-50 p-8 rounded-lg mb-8">
      <h3 class="text-2xl font-semibold mb-4">{$t('about.concept.logo.title')}</h3>
      <div class="flex flex-col lg:flex-row items-center gap-8">
        <div class="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
          <span class="text-gray-500">{$t('about.concept.logo.placeholder')}</span>
        </div>
        <div class="flex-1">
          <p class="mb-4">
            {$t('about.concept.logo.description')}
          </p>
          <p class="mb-4">
            {$t('about.concept.logo.paragraph_1')}
          </p>
          <p class="mb-4">
            {$t('about.concept.logo.paragraph_2')}
          </p>
          <p>
            {$t('about.concept.logo.conclusion')}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
