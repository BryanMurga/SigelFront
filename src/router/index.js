import { createRouter, createWebHistory } from 'vue-router'

import { getRole } from '../sessions'

import HomeView from '../views/Home.vue'
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'
import PruebaView from '../views/Prueba.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'init',
            component: LoginView,
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView,
            beforeEnter: (to, from, next) => {
                if (getRole() === 'coordinador') {
                  // Acceso permitido para administradores
                  next();
                } else {
                  // Redirigir a la página de inicio de sesión o a otro lugar adecuado
                  next({ name: 'login' });
                }
              }
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
        },
        {
            path: '/prueba',
            name: 'prueba',
            component: PruebaView,
            beforeEnter: (to, from, next) => {
                if (getRole() === 'admin') {
                  // Acceso permitido para administradores
                  next();
                } else {
                  // Redirigir a la página de inicio de sesión o a otro lugar adecuado
                  next({ name: 'login' });
                }
              }
        }


    ],
})

    export default router