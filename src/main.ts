import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
;(() => {
  const setAppHeight = () => {
    document.body.style.setProperty('--app-height', `${window.innerHeight}px`)
  }

  setAppHeight()

  document.addEventListener('resize', setAppHeight)
})()
