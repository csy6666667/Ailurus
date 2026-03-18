import { createApp } from 'vue'
import App from './App.vue'
import "./assets/styles/index.css"
import router from './router'
import { createPinia } from 'pinia'
import { initWasmEngine } from './components/utils/wasm/loader'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

initWasmEngine().then(() => {
  app.mount('#app')
})