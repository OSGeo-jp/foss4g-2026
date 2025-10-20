<script lang="ts">
  import { page } from '$app/state'
  import { t } from 'svelte-i18n'
  import Link from '$components/Link.svelte'
  const { data } = $props<{ data: { locale: 'en' | 'ja' } }>()

  function getRestPath(pathname: string): string {
    const m = pathname.match(/^\/(en|ja)(\/.*)?$/)
    return m?.[2] ?? ''
  }

  const _initRest = getRestPath(page.url.pathname)
  let restPath = $state(_initRest)
  let currentLanguage = $state('')

  $effect(() => {
    currentLanguage = $t('nav.languages.current_language')
  })

  $effect(() => {
    // Track page.url and update a plain string state (no $derived)
    restPath = getRestPath(page.url.pathname)
  })
</script>

<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <Link class="btn btn-ghost text-xl" href={'/' + data.locale}>FOSS4G 2026</Link>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <!--
      <li><Link href={'/' + data.locale + '/attend/register'}>{$t('attend.register.title')}</Link></li>
      -->
      <li>
        <details>
          <summary>
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" class="iconLanguage_DSK9"><path fill="currentColor" d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></svg>
            {currentLanguage}
          </summary>
          <ul>
            <li>
              <Link
                href={'/en' + restPath}
                onclick={(e: MouseEvent) => (e.currentTarget as HTMLElement).closest('details')?.removeAttribute('open')}
              >
                {$t('nav.languages.english')}
              </Link>
            </li>
            <li>
              <Link
                href={'/ja' + restPath}
                onclick={(e: MouseEvent) => (e.currentTarget as HTMLElement).closest('details')?.removeAttribute('open')}
              >
                {$t('nav.languages.japanese')}
              </Link>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>