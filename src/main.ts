import { createApp } from 'vue'
import '@/assets/stylesheets/index.scss'
// import 'bootstrap'
import App from './App.vue'
import { setupRouter } from '@/router'

// createApp(App).mount('#app')
function booststrap(){
  const app = createApp(App)
  setupRouter(app)
  app.mount('#app')
}

booststrap()