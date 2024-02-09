import { createRouter, createWebHistory } from 'vue-router'
import eventList from './pages/eventList.vue'
import appHome from './pages/appHome.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: appHome
    },
    {
      path: '/eventi',
      name: 'eventi',
      component: eventList
    }
  ]
})

export { router }
