<template>

    <div class="mapContainer">
      <VueGoogleMap
        :api-key="config.googleMapsKey"
        :center="{lat: -37.813179, lng: 144.950259}"
        :zoom="12"
        style="width: 100%; height: inherit"
      >
        <MapMarker
          :options="{position: {lat: -37.813179, lng: 144.950259}}"
        />
      </VueGoogleMap>
    </div>

</template>

<script>
import { GoogleMap as VueGoogleMap, Marker as MapMarker } from 'vue3-google-map'
import config from '@/config'
export default {
  name: 'GoogleMap',
  components: { VueGoogleMap, MapMarker },
  data() { return { config } },
};
</script>

<style src="./Google.scss" lang="scss" scoped/>
