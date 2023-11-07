import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import Swal from 'sweetalert2'


const app = createApp(App)

app.use(router)


app.mount('#app')