<template>
  <header>
    <h1>Flight Height Visualizer</h1>
    <button @click="uiStore.controlsOpen = !uiStore.controlsOpen">Toggle {{ uiStore.controlsOpen ? 'open' : 'close' }}</button>
  </header>
</template>

<script setup lang="ts">
import { useUIStore } from './stores/ui';

  const uiStore = useUIStore()
</script>

<style scoped lang="css">
header {
  height: 48px;
  display: flex;

  justify-content: space-between;

}
</style>
