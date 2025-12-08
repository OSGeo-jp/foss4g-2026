<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('nav.register_sub.studentship')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.register_sub.studentship')}</h1>
  
  <div class="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
    <h2 class="text-xl font-semibold mb-2">{$t('register.studentship.special_rates.title')}</h2>
    <p>
      {$t('register.studentship.special_rates.description')}
    </p>
  </div>

  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.studentship.eligibility.title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('register.studentship.eligibility.requirements') as requirement}
        <li>{requirement}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.studentship.student_fees.title')}</h2>
    <div class="bg-white p-6 rounded-lg shadow-md mb-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="text-lg font-semibold mb-2">{$t('register.studentship.student_fees.early_bird.title')}</h3>
          <p class="text-3xl font-bold text-primary mb-2">{$t('register.studentship.student_fees.early_bird.price')}</p>
          <p class="text-sm text-gray-600">{$t('register.studentship.student_fees.early_bird.period')}</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">{$t('register.studentship.student_fees.regular.title')}</h3>
          <p class="text-3xl font-bold text-primary mb-2">{$t('register.studentship.student_fees.regular.price')}</p>
          <p class="text-sm text-gray-600">{$t('register.studentship.student_fees.regular.period')}</p>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.studentship.whats_included.title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('register.studentship.whats_included.items') as item}
        <li>{item}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.studentship.required_documentation.title')}</h2>
    <p class="mb-4">{$t('register.studentship.required_documentation.description')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('register.studentship.required_documentation.documents') as document}
        <li>{document}</li>
      {/each}
    </ul>


    <div class="bg-gray-50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">{$t('register.studentship.contact.title')}</h3>
      <p>{$t('register.studentship.contact.description')} <strong>{$t('register.studentship.contact.email')}</strong></p>
    </div>
  </div>
</div>
