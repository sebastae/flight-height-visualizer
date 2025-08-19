<template>
  <div id="map-container">
    <div id="map" style="height: 100%; width: 100%"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { initMap } from './utils/map';

import 'ol/ol.css'


onMounted(() => {
  initMap('map')
})

</script>

<style scoped lang="scss">
#map-container {
  flex-grow: 1;
}
</style>
