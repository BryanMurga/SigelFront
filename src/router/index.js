import { createRouter, createWebHistory } from 'vue-router'

import { getRole } from '../sessions'

import HomeView from '../views/admin/Home.vue'
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'
import AsignacionesView from '../views/admin/Asignaciones.vue'
import PruebaView from '../views/Prueba.vue'
import LeadsView from '../views/admin/Leads.vue'
import TemplateView from '../views/Template.vue'
import PromotorListView from '../views/admin/PromotorList.vue'
import HomeVue from '../views/admin/Home.vue'
import RegisterPromotor from '../views/admin/RegisterPromotor.vue'
import Reasignaciones from '../views/admin/Reasignaciones.vue'
import IndicadoresView from '../views/admin/Indicadores.vue'
import DashPromotor from '../views/promotor/DashPromotor.vue'
import RegistrarLead from '../views/promotor/RegistrarLead.vue'

import LeadsPromotor from '../views/promotor/Leads.vue'

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
      path: '/leads',
      name: 'leads',
      component: LeadsView,
      beforeEnter: (to, from, next) => {
        if (getRole() === 'admin') {
          // Acceso permitido para administradores
          next();
        } else {
          // Redirigir a la página de inicio de sesión o a otro lugar adecuado
          next({ name: 'login' });
        }
      }
    },
    {
      path: '/template',
      name: 'template',
      component: TemplateView,
    },
    {
      path: '/promotor-list',
      name: 'promotor-list',
      component: PromotorListView,
      beforeEnter: (to, from, next) => {
        if (getRole() === 'admin') {
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
      path: '/home-adm',
      name: 'home-adm',
      component: HomeView, 
    },
    {
      path:'/register-promotor',
      name:'register-promotor',
      component: RegisterPromotor,
      beforeEnter: (to, from, next) => {
        if (getRole() === 'admin') {
          // Acceso permitido para administradores
          next();
        } else {
          // Redirigir a la página de inicio de sesión o a otro lugar adecuado
          next({ name: 'login' });
        }
      }
    },
    
   
    {
      path: '/asignaciones',
      name: 'asignaciones',
      component: AsignacionesView,
      beforeEnter: (to, from, next) => {
        if (getRole() === 'admin') {
          // Acceso permitido para administradores
          next();
        } else {
          // Redirigir a la página de inicio de sesión o a otro lugar adecuado
          next({ name: 'login' });
        }
      }
    },

    {
      path: '/reasignaciones',
      name: 'reasignaciones',
      component: Reasignaciones
    },
    {
      path: '/indicadores',
      name: 'indicadores',  
      component: IndicadoresView,
    },

    {
      path: '/dash-promotor',
      name: 'dash-promotor',
      component: DashPromotor,
      beforeEnter: (to, from, next) => {
        if (getRole() === 'promotor') {
          // Acceso permitido para administradores
          next();
        } else {
          // Redirigir a la página de inicio de sesión o a otro lugar adecuado
          next({ name: 'login' });
        }
      }
    },
    {
      path: '/registrar-lead',
      name: 'registrar-lead',
      component: RegistrarLead,
      beforeEnter: (to, from, next) => {
        if (getRole() === 'promotor') {
          // Acceso permitido para administradores
          next();
        } else {
          // Redirigir a la página de inicio de sesión o a otro lugar adecuado
          next({ name: 'login' });
        }
      }
    },

    
  ]
})
export default router;
