<template>
  <div class="controls-container" :class="{ open: uiStore.controlsOpen }">Controls</div>
</template>

<script setup lang="ts">
import { useUIStore } from './stores/ui'

const uiStore = useUIStore()
</script>
<style scoped lang="scss">
.controls-container {
  width: 48px;

  &.open {
    width: 30%;
  }
}
</style>
