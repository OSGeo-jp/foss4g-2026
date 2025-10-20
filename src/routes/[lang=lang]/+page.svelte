<script lang="ts">
  import { t } from 'svelte-i18n'
  import Map from '$components/Map.svelte'
  import ImageAndCopyright from '$components/ImageAndCopyright.svelte'
  import HiroshimaImage from '$images/hiroshima.jpg'
  import MeetingPlaceImage from '$images/meeting_place.jpg'
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
  import {
    faCalendarDay,
    faMapLocationDot,
    faDollarSign,
    faAlarmClock,
    faPersonWalkingLuggage,
  } from '@fortawesome/free-solid-svg-icons'
</script>

<div class="grid w-full overflow-hidden">
  <div class="block w-full h-auto col-start-1 row-start-1">
    <ImageAndCopyright
      imageSrc={HiroshimaImage}
      altText={$t('images.hiroshima.alt')}
      copyrightText={$t('images.hiroshima.copyright')}
    />
  </div>
  <div class="col-start-1 text-left row-start-1 self-start w-full text-white m-5">
    <h1 class="text-5xl font-bold ">{$t('title')}</h1>
    <h2 class="text-2xl font-semibold">{$t('teaser.top_content.subtitle')}</h2>
  </div>
  <div class="col-start-1 w-half row-start-1 self-end bg-black/50 p-5 m-10 rounded-lg text-white">
    <p>{$t('teaser.top_content.paragraph_1')}</p>
    <br />
    <p>{$t('teaser.top_content.paragraph_2')}</p>
    <p>{$t('teaser.top_content.paragraph_3')}</p>
    <p>{$t('teaser.top_content.paragraph_4')}</p>
    <p>{$t('teaser.top_content.paragraph_5')}</p>
  </div>
</div>

<div class="rounded-lg bg-gray-800/10 p-5 my-10">
  <div class="mt-5 flex items-center">
    <FontAwesomeIcon icon={faCalendarDay} class="text-2xl text-green-600" />
    <h2 class="text-3xl font-semibold">{$t('teaser.period.label')}</h2>
  </div>
  <p class="text-2xl mt-2">{$t('teaser.period.date')}</p>
  <div class="text-lg">
    <p>{$t('teaser.period.handson.label')}: {$t('teaser.period.handson.date')}</p>
    <p>{$t('teaser.period.main.label')}: {$t('teaser.period.main.date')}</p>
    <p>{$t('teaser.period.sprints.label')}: {$t('teaser.period.sprints.date')}</p>
  </div>
</div>

<div class="rounded-lg bg-gray-800/10 p-5 my-10">
  <div class="mt-5 flex items-center">
    <FontAwesomeIcon icon={faMapLocationDot} class="text-2xl text-green-600" />
    <h2 class="text-3xl font-semibold">{$t('teaser.venue.label')}</h2>
  </div>
  <div class="grid grid-cols-3 gap-4 items-center">
    <div class="col-span-2">
      <p class="text-2xl mt-2">{$t('teaser.venue.main.label')}: {$t('teaser.venue.main.name')}</p>
      <p class="text-2xl mt-2">{$t('teaser.venue.hands_on.label')}: {$t('teaser.venue.hands_on.name')}</p>
    </div>
    <div>
      <ImageAndCopyright
        imageSrc={MeetingPlaceImage}
        altText={$t('images.meeting_place.alt')}
        copyrightText={$t('images.meeting_place.copyright')}
      />
    </div>
  </div>
  <Map
    mapClass="w-full h-[400px] my-5 rounded-lg"
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
</div>

<div class="rounded-lg bg-gray-800/10 p-5 my-10">
  <div class="mt-5 flex items-center">
    <FontAwesomeIcon icon={faDollarSign} class="text-2xl text-green-600" />
    <h2 class="text-3xl font-semibold">{$t('teaser.fee.label')}</h2>
  </div>
  <div>
    <p class="text-2xl mt-2">{$t('teaser.fee.early_bird.label')}: {$t('teaser.fee.early_bird.amount')}</p>
    <p class="text-2xl mt-2">{$t('teaser.fee.regular.label')}: {$t('teaser.fee.regular.amount')}</p>
    <p class="text-2xl mt-2">{$t('teaser.fee.workshop.label')}: {$t('teaser.fee.workshop.amount')}</p>
  </div>
</div>

<div class="rounded-lg bg-gray-800/10 p-5 my-10">
  <div class="mt-5 flex items-center">
    <FontAwesomeIcon icon={faAlarmClock} class="text-2xl text-green-600" />
    <h2 class="text-3xl font-semibold">{$t('teaser.schedule.label')}</h2>
  </div>
  <div>
    <h3 class="text-xl font-semibold mt-2">{$t('teaser.schedule.call_for_proposals.label')}</h3>
    <p>{$t('teaser.schedule.call_for_proposals.period')}</p>
    <h3 class="text-xl font-semibold mt-2">{$t('teaser.schedule.adoption.label')}</h3>
    <p>{$t('teaser.schedule.adoption.period')}</p>
    <h3 class="text-xl font-semibold mt-2">{$t('teaser.schedule.registration_deadline.label')}</h3>
    <p>{$t('teaser.schedule.registration_deadline.period')}</p>
  </div>
</div>

<div class="rounded-lg bg-gray-800/10 p-5 my-10">
  <div class="mt-5 flex items-center">
    <FontAwesomeIcon icon={faPersonWalkingLuggage} class="text-2xl text-green-600" />
    <h2 class="text-3xl font-semibold">{$t('teaser.social_event.label')}</h2>
  </div>
  <div>
    <h3 class="text-xl font-semibold mt-2">{$t('teaser.social_event.gala_dinner.label')}</h3>
    <p>{$t('teaser.social_event.gala_dinner.venue')}</p>
    <h3 class="text-xl font-semibold mt-2">{$t('teaser.social_event.ice_breaker.label')}</h3>
    <p>{$t('teaser.social_event.ice_breaker.venue')}</p>
    <h3 class="text-xl font-semibold mt-2">{$t('teaser.social_event.excursions.label')}</h3>
    <p>{$t('teaser.social_event.excursions.venue')}</p>
  </div>
</div>
