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
    <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.volunteer_benefits.title')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div>
        <h3 class="text-lg font-semibold mb-2">{$t('register.volunteering.volunteer_benefits.what_you_get.title')}</h3>
        <ul class="list-disc pl-6 mb-4">
          {#each $t('register.volunteering.volunteer_benefits.what_you_get.benefits') as benefit}
            <li>{benefit}</li>
          {/each}
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2">{$t('register.volunteering.volunteer_benefits.time_commitment.title')}</h3>
        <ul class="list-disc pl-6 mb-4">
          {#each $t('register.volunteering.volunteer_benefits.time_commitment.requirements') as requirement}
            <li>{requirement}</li>
          {/each}
        </ul>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.volunteer_roles.title')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div class="bg-blue-50 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">{$t('register.volunteering.volunteer_roles.registration_desk.title')}</h3>
        <p class="text-sm">{$t('register.volunteering.volunteer_roles.registration_desk.description')}</p>
      </div>
      <div class="bg-green-50 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">{$t('register.volunteering.volunteer_roles.session_support.title')}</h3>
        <p class="text-sm">{$t('register.volunteering.volunteer_roles.session_support.description')}</p>
      </div>
      <div class="bg-yellow-50 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">{$t('register.volunteering.volunteer_roles.workshop_assistant.title')}</h3>
        <p class="text-sm">{$t('register.volunteering.volunteer_roles.workshop_assistant.description')}</p>
      </div>
      <div class="bg-red-50 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">{$t('register.volunteering.volunteer_roles.social_media.title')}</h3>
        <p class="text-sm">{$t('register.volunteering.volunteer_roles.social_media.description')}</p>
      </div>
      <div class="bg-indigo-50 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">{$t('register.volunteering.volunteer_roles.exhibition_support.title')}</h3>
        <p class="text-sm">{$t('register.volunteering.volunteer_roles.exhibition_support.description')}</p>
      </div>
      <div class="bg-pink-50 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">{$t('register.volunteering.volunteer_roles.local_guide.title')}</h3>
        <p class="text-sm">{$t('register.volunteering.volunteer_roles.local_guide.description')}</p>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.requirements.title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('register.volunteering.requirements.list') as requirement}
        <li>{requirement}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.application_process.title')}</h2>
    <div class="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 class="text-lg font-semibold mb-2">{$t('register.volunteering.application_process.how_to_apply.title')}</h3>
      <ol class="list-decimal pl-6 mb-4">
        {#each $t('register.volunteering.application_process.how_to_apply.steps') as step}
          <li>{step}</li>
        {/each}
      </ol>
      
      <h3 class="text-lg font-semibold mb-2">{$t('register.volunteering.application_process.important_dates.title')}</h3>
      <ul class="list-disc pl-6">
        {#each $t('register.volunteering.application_process.important_dates.dates') as date}
          <li><strong>{date}</strong></li>
        {/each}
      </ul>
    </div>

    <div class="text-center">
      <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.ready_to_volunteer.title')}</h2>
      <p class="mb-6">{$t('register.volunteering.ready_to_volunteer.description')}</p>
      <a href="mailto:{$t('register.volunteering.ready_to_volunteer.email')}" class="btn btn-primary">
        {$t('register.volunteering.ready_to_volunteer.apply_button')}
      </a>
    </div>
  </div>
</div>
