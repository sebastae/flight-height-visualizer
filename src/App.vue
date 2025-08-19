<template>
  <div class="app-container">
    <AppHeader />
    <main>
      <OpenLayersMap />
      <AppControls />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppControls from './AppControls.vue'
import AppHeader from './AppHeader.vue'
import OpenLayersMap from './OpenLayersMap.vue'
</script>

<style scoped lang="scss">
.app-container {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 960px) {
    flex-direction: row;

    #map-container {
      width: 70%;
    }
  }
}
</style>
