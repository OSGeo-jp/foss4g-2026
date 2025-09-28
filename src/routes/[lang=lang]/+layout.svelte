<script lang="ts">
  import '../../app.css'
  import { setupI18n } from '$lib/i18n'
  import { t } from 'svelte-i18n'

  const { data, children } = $props<{ data: { locale: 'en' | 'ja' }, children: unknown }>()

  // Re-run on locale changes; not async (no Promise return)
  $effect(() => {
    setupI18n(data.locale)
  })
</script>

<svelte:head>
  <title>{$t('title')}</title>
</svelte:head>

<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/">FOSS4G 2026</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/{data.locale}/attend/register">Register</a></li>
    </ul>
  </div>
</div>

<div class="mx-auto flex min-h-screen max-w-5xl flex-col gap-6 sm:gap-0">
  {@render children()}
</div>
