<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('nav.about_sub.privacy_policy')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.about_sub.privacy_policy')}</h1>
  
  <div class="prose max-w-none">
    <p class="text-lg mb-6">
      {$t('about.privacy_policy.intro')}
    </p>

    <h2 class="text-2xl font-semibold mb-4">{$t('about.privacy_policy.information_collect.title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('about.privacy_policy.information_collect.items') as item}
        <li>{item}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('about.privacy_policy.how_we_use.title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('about.privacy_policy.how_we_use.items') as item}
        <li>{item}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('about.privacy_policy.data_protection.title')}</h2>
    <p class="mb-6">
      {$t('about.privacy_policy.data_protection.content')}
    </p>

    <h2 class="text-2xl font-semibold mb-4">{$t('about.privacy_policy.your_rights.title')}</h2>
    <p class="mb-4">{$t('about.privacy_policy.your_rights.intro')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('about.privacy_policy.your_rights.items') as item}
        <li>{item}</li>
      {/each}
    </ul>

    <div class="bg-gray-50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">{$t('about.privacy_policy.contact.title')}</h3>
      <p>{$t('about.privacy_policy.contact.content')} <strong>foss4g2026[at]osgeo.jp</strong></p>
    </div>
  </div>
</div>
