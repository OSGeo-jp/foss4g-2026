<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('register.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('register.title')}</h1>
  
  <!-- Registration -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.registration.title')}</h2>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <table class="w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-4 py-2">{$t('register.registration.type')}</th>
            <th class="border border-gray-300 px-4 py-2">{$t('register.registration.price')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 px-4 py-2">{$t('register.registration.early_bird')}</td>
            <td class="border border-gray-300 px-4 py-2">$XXX</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">{$t('register.registration.regular')}</td>
            <td class="border border-gray-300 px-4 py-2">$XXX</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- Studentship Program -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.studentship.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('register.studentship.description')}</p>
  </section>

  <!-- Travel Grant Program -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.travel_grant.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('register.travel_grant.description')}</p>
  </section>

  <!-- Volunteering -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('register.volunteering.description')}</p>
  </section>

  <!-- Cancellation Policy -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.cancellation.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('register.cancellation.description')}</p>
  </section>
</div>
