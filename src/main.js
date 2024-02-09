import { createApp } from 'vue'
import App from './App.vue'

import * as bootstrap from 'bootstrap'
import router from './router'

window.vue = {}
window.vue.App = createApp(App).use(router).mount('#app')
/*  .component('font-awesome-icon', FontAwesomeIcon) */
