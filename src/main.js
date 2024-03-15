import { createApp } from 'vue'
import { setupRouter } from '@/router'
import pinia from '@/store'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/normal.css'

const app = createApp(App)
setupRouter(app)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')

const linkArr = document.querySelectorAll('a')
linkArr.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
  })
})