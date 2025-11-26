<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('about.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('about.title')}</h1>
  
  <!-- About FOSS4G -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('about.foss4g.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('about.foss4g.description')}</p>
  </section>

  <!-- Map -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('about.map.title')}</h2>
    <div class="bg-gray-100 p-4 rounded-lg">
      <p class="text-gray-600">{$t('about.map.placeholder')}</p>
    </div>
  </section>

  <!-- Organizer -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('about.organizer.title')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <h3 class="text-lg font-semibold text-center mb-2">{$t('about.organizer.placeholder_name')}</h3>
        <p class="text-gray-600 text-center">{$t('about.organizer.placeholder_description')}</p>
      </div>
    </div>
  </section>

  <!-- Concept -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('about.concept.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('about.concept.description')}</p>
  </section>

  <!-- Code of Conduct -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('about.code_of_conduct.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('about.code_of_conduct.description')}</p>
  </section>

  <!-- Privacy Policy -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('about.privacy_policy.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('about.privacy_policy.description')}</p>
  </section>

  <!-- Terms and Conditions -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('about.terms_conditions.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('about.terms_conditions.description')}</p>
  </section>

  <!-- Information for Sponsor -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('about.sponsor_info.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('about.sponsor_info.description')}</p>
  </section>
</div>
