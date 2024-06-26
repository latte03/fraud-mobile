import '@unocss/reset/tailwind-compat.css'
import './style/index.less'
import 'uno.css'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'

import { createApp } from 'vue'

import App from './App.vue'
import { setupModules } from './modules'
import { setupRouter } from './router'
import { setupStore } from './store'

const app = createApp(App)

setupStore(app)
setupRouter(app)
setupModules(app)
app.mount('#app')
