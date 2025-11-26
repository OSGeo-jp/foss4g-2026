<script lang="ts">
  import { t } from 'svelte-i18n'
  import ComingSoon from '$components/ComingSoon.svelte'
</script>

<svelte:head>
  <title>{$t('nav.program_sub.events')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.program_sub.events')}</h1>
  
  <ComingSoon message={$t('events.coming_soon_message')} class="mb-8" />
  
  <div class="prose max-w-none">
    <p class="text-lg mb-6">
      {$t('events.intro.description')}
    </p>

    <h2 class="text-2xl font-semibold mb-4">{$t('events.overview.title')}</h2>
    <p class="mb-6">
      {$t('events.overview.description')}
    </p>

    <h2 class="text-2xl font-semibold mb-4">{$t('events.social_events.title')}</h2>
    <div class="bg-gray-50 p-6 rounded-lg">
      <ul class="space-y-2">
        <li class="text-sm">{$t('events.social_events.welcome_reception')}</li>
        <li class="text-sm">{$t('events.social_events.gala_dinner')}</li>
        <li class="text-sm">{$t('events.social_events.networking')}</li>
      </ul>
    </div>
  </div>
</div>
