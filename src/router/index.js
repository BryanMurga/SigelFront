import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home.vue'
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'init',
            component: localStorage.token != undefined ? HomeView : LoginView,
        },
        {
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
        }
    ],
})

export default router