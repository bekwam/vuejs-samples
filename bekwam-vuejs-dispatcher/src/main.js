import { createApp } from 'vue'
import App from './subsystem_core/App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
