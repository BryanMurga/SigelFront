import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home.vue'
import LoginView from '../views/Login.vue'
import PruebaView from '../views/Prueba.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'init',
            component: localStorage.token != undefined ? HomeView : LoginView,
        },
        {
            path: '/prueba',
            name: 'prueba',
            component: localStorage != undefined ? PruebaView : LoginView,
        }
    ],
})

    export default router