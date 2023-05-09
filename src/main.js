import './assets/css/normal.css'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const linkArr = document.querySelectorAll('a')
linkArr.forEach(link => {
  link.addEventListener('click', e => {
    console.log(e);
    e.preventDefault()
  })
})