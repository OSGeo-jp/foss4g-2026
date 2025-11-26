<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('nav.about_sub.code_of_conduct')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.about_sub.code_of_conduct')}</h1>
  
  <div class="prose max-w-none">
    <div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2">{$t('about.code_of_conduct.commitment.title')}</h2>
      <p>
        {$t('about.code_of_conduct.commitment.content')}
      </p>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('about.code_of_conduct.expected_behavior.title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('about.code_of_conduct.expected_behavior.items') as item}
        <li>{item}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('about.code_of_conduct.unacceptable_behavior.title')}</h2>
    <p class="mb-4">{$t('about.code_of_conduct.unacceptable_behavior.intro')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('about.code_of_conduct.unacceptable_behavior.items') as item}
        <li>{item}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('about.code_of_conduct.consequences.title')}</h2>
    <p class="mb-6">
      {$t('about.code_of_conduct.consequences.content')}
    </p>

    <h2 class="text-2xl font-semibold mb-4">{$t('about.code_of_conduct.reporting.title')}</h2>
    <p class="mb-4">
      {$t('about.code_of_conduct.reporting.intro')}
    </p>
    
    <div class="bg-gray-50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">{$t('about.code_of_conduct.reporting.contact_title')}</h3>
      <p class="mb-2"><strong>{$t('about.code_of_conduct.reporting.email')}:</strong> foss4g2026[at]osgeo.jp</p>
      <p class="mb-2"><strong>{$t('about.code_of_conduct.reporting.phone')}:</strong> +81-XX-XXXX-XXXX {$t('about.code_of_conduct.reporting.phone_note')}</p>
      <p class="text-sm text-gray-600">
        {$t('about.code_of_conduct.reporting.confidentiality')}
      </p>
    </div>
  </div>
</div>
