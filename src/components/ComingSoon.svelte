<script lang="ts">
  import { t } from 'svelte-i18n'
  
  interface Props {
    message?: string
    class?: string
  }
  
  const { message, class: className = '' }: Props = $props()
</script>

<div class="alert alert-warning {className}">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
  <span>{message || $t('common.coming_soon')}</span>
</div>
