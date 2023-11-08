import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home.vue'
import LoginView from '../views/Login.vue'
import PruebaView from '../views/Prueba.vue'
import { getRole } from '../sessions';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'init',
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