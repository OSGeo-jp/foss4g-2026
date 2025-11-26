<script lang="ts">
  import { page } from '$app/state'
  import { t } from 'svelte-i18n'
  import Link from '$components/Link.svelte'
  
  interface BreadcrumbItem {
    label: string
    href?: string
  }
  
  const { data } = $props<{ data: { locale: 'en' | 'ja' } }>()
  
  function generateBreadcrumbs(): BreadcrumbItem[] {
    const pathname = page.url.pathname
    const segments = pathname.split('/').filter(Boolean)
    
    // Remove language prefix
    if (segments[0] === 'en' || segments[0] === 'ja') {
      segments.shift()
    }
    
    const breadcrumbs: BreadcrumbItem[] = [
      { label: $t('nav.home') || 'Home', href: `/${data.locale}` }
    ]
    
    let currentPath = `/${data.locale}`
    
    for (let i = 0; i < segments.length; i++) {
      currentPath += `/${segments[i]}`
      const isLast = i === segments.length - 1
      
      // Generate label based on path
      let label = ''
      if (i === 0) {
        // Main sections
        switch (segments[0]) {
          case 'about':
            label = $t('nav.about')
            break
          case 'register':
            label = $t('nav.register')
            break
          case 'call-for-papers':
            label = $t('nav.call_for_papers')
            break
          case 'program-schedule':
            label = $t('nav.program_schedule')
            break
          case 'attending':
            label = $t('nav.attending')
            break
          case 'contact':
            label = $t('nav.contact')
            break
          default:
            label = segments[0].charAt(0).toUpperCase() + segments[0].slice(1)
        }
      } else if (i === 1) {
        // Sub-sections
        const mainSection = segments[0]
        const subSection = segments[1].replace(/-/g, '_')
        
        // Map main sections to their translation key prefixes
        let sectionKey = mainSection
        if (mainSection === 'call-for-papers') {
          sectionKey = 'cfp'
        } else if (mainSection === 'program-schedule') {
          sectionKey = 'program'
        }
        
        try {
          label = $t(`nav.${sectionKey}_sub.${subSection}`) || segments[1].replace(/-/g, ' ')
        } catch {
          label = segments[1].replace(/-/g, ' ')
        }
      } else {
        label = segments[i].replace(/-/g, ' ')
      }
      
      breadcrumbs.push({
        label,
        href: isLast ? undefined : currentPath
      })
    }
    
    return breadcrumbs
  }
  
  let breadcrumbs = $state<BreadcrumbItem[]>([])
  
  $effect(() => {
    breadcrumbs = generateBreadcrumbs()
  })
</script>

<nav aria-label="Breadcrumb" class="py-4">
  <div class="breadcrumbs text-sm">
    <ul>
      {#each breadcrumbs as item, index}
        <li>
          {#if item.href}
            <Link href={item.href} class="link link-hover">
              {item.label}
            </Link>
          {:else}
            <span class="text-base-content/70">{item.label}</span>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</nav>
