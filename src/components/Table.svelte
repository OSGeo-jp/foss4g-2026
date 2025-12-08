<script lang="ts">
  interface Props {
    headers: string[]
    rows: string[][]
    class?: string
    responsive?: boolean
  }
  
  const { headers, rows, class: className = '', responsive = true }: Props = $props()
</script>

{#if responsive}
  <!-- Mobile Card View (hidden on desktop) -->
  <div class="block md:hidden {className}">
    {#each rows as row, rowIndex}
      <div class="card bg-base-100 shadow-sm mb-4 border">
        <div class="card-body p-4">
          {#each headers as header, colIndex}
            <div class="flex justify-between items-start mb-2 last:mb-0">
              <span class="font-semibold text-sm text-gray-600 min-w-0 mr-3">{header}:</span>
              <span class="text-sm text-right flex-1 min-w-0 break-words">{row[colIndex]}</span>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>

  <!-- Desktop Table View (hidden on mobile) -->
  <div class="hidden md:block overflow-x-auto {className}">
    <table class="table table-zebra w-full">
      <thead>
        <tr>
          {#each headers as header}
            <th class="whitespace-nowrap">{header}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each rows as row}
          <tr>
            {#each row as cell}
              <td class="whitespace-nowrap">{cell}</td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{:else}
  <!-- Non-responsive table (original behavior) -->
  <div class="overflow-x-auto {className}">
    <table class="table table-zebra w-full">
      <thead>
        <tr>
          {#each headers as header}
            <th>{header}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each rows as row}
          <tr>
            {#each row as cell}
              <td>{cell}</td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{/if}
