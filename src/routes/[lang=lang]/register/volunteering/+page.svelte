<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('nav.register_sub.volunteering')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.register_sub.volunteering')}</h1>
  
  <div class="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8">
    <h2 class="text-xl font-semibold mb-2">{$t('register.volunteering.join_team.title')}</h2>
    <p>
      {$t('register.volunteering.join_team.description')}
    </p>
  </div>

  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.who_can_volunteer.title')}</h2>
    <p class="mb-6">{$t('register.volunteering.who_can_volunteer.description')}</p>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.volunteer_tasks.title')}</h2>
    <p class="mb-4">{$t('register.volunteering.volunteer_tasks.description')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('register.volunteering.volunteer_tasks.tasks') as task}
        <li>{task}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.benefits.title')}</h2>
    <p class="mb-4">{$t('register.volunteering.benefits.description')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('register.volunteering.benefits.perks') as perk}
        <li>{perk}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.application_status.title')}</h2>
    <div class="bg-gray-50 p-6 rounded-lg mb-8">
      <p>{$t('register.volunteering.application_status.description')}</p>
    </div>

    <div class="bg-blue-50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">{$t('register.volunteering.contact.title')}</h3>
      <p class="text-sm mb-2">{$t('register.volunteering.contact.description')}</p>
      <p class="text-sm font-semibold">{$t('register.volunteering.contact.email')}</p>
    </div>
  </div>
</div>
