import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAppStore } from './stores/appStore'

import App from './App.vue'
import router from './router'

import '@/assets/style.css'
import '@/firebase/firebase'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.config.globalProperties.appStore = useAppStore()
app.mount('#app')
