import { createRouter, createWebHistory } from 'vue-router'
import eventList from './pages/eventList.vue'
import appHome from './pages/appHome.vue'
import singleEvent from './pages/singleEvent.vue'
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
    },
    {
      path: '/eventi/:id',
      name: 'single-event',
      component: singleEvent
    }
  ]
})

export { router }
