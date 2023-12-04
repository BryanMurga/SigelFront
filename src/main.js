import { createApp } from 'vue';
import App from './App.vue';
import VueFinalModal from 'vue-final-modal';
import router from './router'
import './style.css'
import Swal from 'sweetalert2'
import { getRole } from './sessions'

const app = createApp(App);
app.use(VueFinalModal());

//app.use(VueTailwindDatepicker);

app.use(router)


app.mount('#app');
