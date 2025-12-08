<script lang="ts">
  import { t } from 'svelte-i18n'
  import Card from '$components/Card.svelte'
</script>

<svelte:head>
  <title>{$t('nav.about_sub.organizers')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.about_sub.organizers')}</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    <!-- Co-Chair 1 -->
    <Card title={$t('about.organizer.roles.co_chair')} class="text-center">
      <div class="avatar mb-4">
        <div class="w-24 rounded-full bg-gray-300">
          <div class="w-full h-full flex items-center justify-center text-gray-600">
            {$t('about.organizer.photo_placeholder')}
          </div>
        </div>
      </div>
      <h3 class="text-lg font-semibold mb-2">{$t('about.organizer.sample_organizers.co_chair_1.name')}</h3>
      <p class="text-gray-600 text-sm mb-2">{$t('about.organizer.sample_organizers.co_chair_1.organization')}</p>
      <p class="text-gray-700 text-sm">{$t('about.organizer.sample_organizers.co_chair_1.description')}</p>
    </Card>

    <!-- Co-Chair 2 -->
    <Card title={$t('about.organizer.roles.co_chair')} class="text-center">
      <div class="avatar mb-4">
        <div class="w-24 rounded-full bg-gray-300">
          <div class="w-full h-full flex items-center justify-center text-gray-600">
            {$t('about.organizer.photo_placeholder')}
          </div>
        </div>
      </div>
      <h3 class="text-lg font-semibold mb-2">{$t('about.organizer.sample_organizers.co_chair_2.name')}</h3>
      <p class="text-gray-600 text-sm mb-2">{$t('about.organizer.sample_organizers.co_chair_2.organization')}</p>
      <p class="text-gray-700 text-sm">{$t('about.organizer.sample_organizers.co_chair_2.description')}</p>
    </Card>

    <!-- Program Committee Chair -->
    <Card title={$t('about.organizer.roles.program_committee_chair')} class="text-center">
      <div class="avatar mb-4">
        <div class="w-24 rounded-full bg-gray-300">
          <div class="w-full h-full flex items-center justify-center text-gray-600">
            {$t('about.organizer.photo_placeholder')}
          </div>
        </div>
      </div>
      <h3 class="text-lg font-semibold mb-2">{$t('about.organizer.sample_organizers.program_chair.name')}</h3>
      <p class="text-gray-600 text-sm mb-2">{$t('about.organizer.sample_organizers.program_chair.organization')}</p>
      <p class="text-gray-700 text-sm">{$t('about.organizer.sample_organizers.program_chair.description')}</p>
    </Card>
  </div>

  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('about.organizer.organizing_committee.title')}</h2>
    <p class="mb-4">
      {$t('about.organizer.organizing_committee.description_1')}
    </p>
    
    <p class="mb-4">
      {$t('about.organizer.organizing_committee.description_2')}
    </p>
  </div>
</div>
