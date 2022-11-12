import { createApp } from 'vue'
import '@/assets/stylesheets/index.scss'
import App from './App.vue'
import { setupRouter } from '@/router'

function booststrap(){
  const app = createApp(App)
  setupRouter(app)
  app.mount('#app')
}

booststrap()