<script lang="ts">
  import { t } from 'svelte-i18n'
  import Map from '$components/Map.svelte'
</script>

<h1 class="text-3xl font-bold">{$t('title')}</h1>

<p class="text-lg">To be announced</p>

<Map
  mapClass="h-[400px]"
  center={[132.451043, 34.392077]}
  zoom={6}
  style={$t('map.settings.style')}
  items={[
    {
      coordinates: [132.451043, 34.392077],
      title: $t('map.title.main_venue'),
      description: $t('map.description.main_venue'),
      link: 'https://commons.wikimedia.org/wiki/Category:International%20Conference%20Center%20Hiroshima?uselang=en',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/International_Conference_Center_Hiroshima_2008_01.JPG/250px-International_Conference_Center_Hiroshima_2008_01.JPG'
    },
  ]}
/>