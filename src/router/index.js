import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home.vue'
import LoginView from '../views/Login.vue'
<<<<<<< HEAD
import RegisterView from '../views/Register.vue'
=======
import PruebaView from '../views/Prueba.vue'
>>>>>>> e80810f21a68cb5a450eab04231fd62c32824345

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'init',
            component: localStorage.token != undefined ? HomeView : LoginView,
        },
        {
<<<<<<< HEAD
            path: '/register',
            name: 'register',
            component: localStorage.token != undefined ? HomeView : RegisterView,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView,
=======
            path: '/prueba',
            name: 'prueba',
            component: localStorage != undefined ? PruebaView : LoginView,
>>>>>>> e80810f21a68cb5a450eab04231fd62c32824345
        }
    ],
})

export default router