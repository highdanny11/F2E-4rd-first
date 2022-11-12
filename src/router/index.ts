// import type { RouteRecordRaw  } from 'vue-router'
import type { App } from 'vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import Root from '@/views/Root.vue'

const routes = [
  {
    path: '/',
    component: Root,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  }
]

export const router = createRouter({
  history:createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: routes
})

export function setupRouter (app:App<Element>){
  app.use(router)
}