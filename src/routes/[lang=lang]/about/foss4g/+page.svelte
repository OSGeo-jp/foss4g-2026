<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('nav.about_sub.foss4g')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('about.foss4g.title')}</h1>
  
  <div class="prose max-w-none">
    <p class="text-lg mb-6">
      {$t('about.foss4g.intro')}
    </p>
    
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">{$t('about.foss4g.hiroshima_section.title')}</h2>
      <p class="mb-6">
        {$t('about.foss4g.hiroshima_section.content')}
      </p>
    </section>
    
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">{$t('about.foss4g.knowledge_section.title')}</h2>
      <p class="mb-4">
        {$t('about.foss4g.knowledge_section.intro')}
      </p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        {#each $t('about.foss4g.knowledge_section.topics') as topic}
          <li>{topic}</li>
        {/each}
      </ul>
      <p class="mb-6">
        {$t('about.foss4g.knowledge_section.conclusion')}
      </p>
    </section>
    
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">{$t('about.foss4g.participation_section.title')}</h2>
      <p class="mb-4">
        {$t('about.foss4g.participation_section.intro')}
      </p>
      <p class="mb-6">
        {$t('about.foss4g.participation_section.community')}
      </p>
    </section>
    
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">{$t('about.foss4g.closing_section.title')}</h2>
      <p class="mb-6">
        {$t('about.foss4g.closing_section.content')}
      </p>
    </section>
  </div>
</div>
