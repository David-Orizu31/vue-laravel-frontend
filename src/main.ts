import './assets/main.css'
import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import config from '../formkit.config.ts'
import App from './App.vue'
import router from './router'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(plugin, defaultConfig(config()))
app.use(ToastPlugin);

app.mount('#app')
