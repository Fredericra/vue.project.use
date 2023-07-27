import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import  AOS  from 'aos';
import router from './Router';
const app =  createApp(App);
app.use(router)
app.use(AOS.init())
app.mount('#app')
