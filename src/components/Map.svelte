<script lang="ts">
  import { 
    MapLibre, 
    Marker,
    Popup,
    NavigationControl,
    ScaleControl,
    GlobeControl
  } from 'svelte-maplibre-gl'

  const { mapClass, style, center, zoom, items, ...props } = $props()
</script>

<MapLibre
  class={mapClass}
  center={center}
  zoom={zoom}
  style={style}
>
  <NavigationControl position="top-right" />
  <ScaleControl position="bottom-left" />
  <GlobeControl position="top-right" />
  {#each items as item (item.coordinates)}
    <Marker lnglat={item.coordinates}>
      {#snippet content()}
        <div class="text-center loading-none">
          <div class="text-3xl">
            {#if item.icon}
              <img src={item.icon} alt={item.title} class="w-6 h-6 mb-2" />
            {/if}
          </div>
          <div class="font-bold">{item.title}</div>
        </div>        
      {/snippet}
      <Popup class="text-block">
        <span class="text-lg">{item.description}</span>
      </Popup>
    </Marker>
  {/each}
</MapLibre>