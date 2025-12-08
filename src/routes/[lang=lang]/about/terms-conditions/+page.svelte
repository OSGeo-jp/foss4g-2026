<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('nav.about_sub.terms_conditions')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.about_sub.terms_conditions')}</h1>
  
  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('about.terms_conditions.registration_terms.title')}</h2>
    <p class="mb-4">{$t('about.terms_conditions.registration_terms.intro')}</p>
    
    <h3 class="text-xl font-semibold mb-3">{$t('about.terms_conditions.payment_refunds.title')}</h3>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('about.terms_conditions.payment_refunds.items') as item}
        <li>{item}</li>
      {/each}
    </ul>

    <!--
    <h3 class="text-xl font-semibold mb-3">{$t('about.terms_conditions.cancellation_policy.title')}</h3>
    <p class="mb-6">
      {$t('about.terms_conditions.cancellation_policy.link_text')}
      <a href="/register/cancellation" class="text-primary font-semibold hover:underline">
        {$t('about.terms_conditions.cancellation_policy.link_label')}
      </a>{$t('about.terms_conditions.cancellation_policy.link_suffix')}
    </p>
    -->

    <h3 class="text-xl font-semibold mb-3">{$t('about.terms_conditions.conference_participation.title')}</h3>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('about.terms_conditions.conference_participation.items') as item}
        <li>{item}</li>
      {/each}
    </ul>

    <h3 class="text-xl font-semibold mb-3">{$t('about.terms_conditions.liability.title')}</h3>
    <p class="mb-6">
      {$t('about.terms_conditions.liability.content')}
    </p>

    <h3 class="text-xl font-semibold mb-3">{$t('about.terms_conditions.force_majeure.title')}</h3>
    <p class="mb-6">
      {$t('about.terms_conditions.force_majeure.content')}
    </p>

    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6">
      <h3 class="text-lg font-semibold mb-2">{$t('about.terms_conditions.important_note.title')}</h3>
      <p>
        {$t('about.terms_conditions.important_note.content')}
      </p>
    </div>
  </div>
</div>
