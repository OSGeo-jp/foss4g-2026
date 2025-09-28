<script lang="ts">
  // custom <a> that prepends base path when href starts with '/'
  import { PUBLIC_BASE_PATH } from '$env/static/public'

  // NOTE: Do NOT destructure $props() here; that would break reactivity.
  const p = $props()

  // Compute href reactively whenever parent updates p.href (plain string state for TS)
  let href = $state('')
  $effect(() => {
    const h = (p.href as string | undefined) ?? ''
    href = h.startsWith('/') ? `${PUBLIC_BASE_PATH}${h}` : h
  })

  // Forward all props except href and children (so our computed href wins)
  const forwarded = $derived(() => {
    const { href: _h, children, ...rest } = p
    return rest
  })
</script>

<a {...forwarded} {href}>
  {@render p.children?.()}
</a>
