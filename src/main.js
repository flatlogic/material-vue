import { createApp } from 'vue'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'
import Toast, { useToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import App from './App.vue'
import router from './Routes.js'
import store from './store/index.js'
import vuetify from './plugins/vuetify.js'

const app = createApp(App)
app.use(store).use(router).use(vuetify).use(Toast)
app.config.globalProperties.$toast = useToast()
app.mount('#app')
