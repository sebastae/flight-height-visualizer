import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  const controlsOpen = ref<boolean>(true)
  const isMobile = ref<boolean>(window.innerWidth < 960)

  document.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 960
  })

  return { controlsOpen, isMobile }
})
