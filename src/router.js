import { createRouter, createWebHistory } from 'vue-router'
import eventList from './pages/eventList.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/eventi',
      component: eventList,
      name: 'eventi',
      component: eventList
    }
  ]
})

export default { router }
