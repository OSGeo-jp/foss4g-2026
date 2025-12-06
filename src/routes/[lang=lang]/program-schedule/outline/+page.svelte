<script lang="ts">
  import { t } from 'svelte-i18n'
  import Table from '$components/Table.svelte'
  import ComingSoon from '$components/ComingSoon.svelte'
</script>

<svelte:head>
  <title>{$t('nav.program_sub.outline')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.program_sub.outline')}</h1>
  
  <ComingSoon message={$t('program_outline.coming_soon_message')} class="mb-8" />
  
  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('program_outline.schedule_glance.title')}</h2>
    <div class="mb-8">
      <Table 
        headers={$t('program_outline.schedule_glance.table.headers')}
        rows={$t('program_outline.schedule_glance.table.rows')}
        class="mb-6"
      />
    </div>
  </div>
</div>
