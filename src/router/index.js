import { createRouter, createWebHistory } from 'vue-router'
import { getRole } from '../sessions'

import RegisterView from '../views/Register.vue'
import TemplateView from '../views/Template.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'init',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      beforeEnter: (to, from, next) => {
        if (getRole() === 'coordinador') {
          next();
        } else {
          next({ name: 'login' });
        }
      }
    },

    // Admin Views
    {
      path: '/home-adm',
      name: 'home-adm',
      component: () => import('../views/admin/Home.vue'),
      beforeEnter: (to, from, next) => {
        if (getRole() === 'admin') {
          next();
        } else {
          next({ name: 'login' });
        }
      }
    },
    {
      path: '/promotor-list',
      name: 'promotor-list',
      component: () => import('../views/admin/PromotorList.vue'),
      beforeEnter: (to, from, next) => {
        if (getRole() === 'admin') {
          next();
        } else {
          next({ name: 'login' });
        }
      }
    },
    {
      path: '/register-promotor',
      name: 'register-promotor',
      component: () => import('../views/admin/RegisterPromotor.vue'),
      beforeEnter: (to, from, next) => {
        if (getRole() === 'admin') {
          next();
        } else {
          next({ name: 'login' });
        }
      }
    },
    {
      path: '/promotor/edit/:id',
      name: 'edit-promotor',
      component: () => import('../views/admin/EditPromotor.vue'),
      beforeEnter: (to, from, next) => {
        if (getRole() === 'admin') {
          next();
        } else {
          next({ name: 'login' });
        }
      }
    },
    {
      path: '/dash-admin',
      name: 'dash-admin',
      component: () => import('../views/admin/DashAdmin.vue'),
      beforeEnter: (to, from, next) => {
        if (getRole() === 'admin') {
          next();
        } else {
          next({ name: '/login' });
        }
      }
    },
    {
      path: '/indicadores',
      name: 'indicadores',
      component: () => import('../views/admin/Indicadores.vue'),
      beforeEnter: (to, from, next) => {
        if (getRole() === 'admin') {
          next();
        } else {
          next({ name: '/login' });
        }
      }
    },
    {
      path: '/campania',
      name: 'campania',
      component: () => import('../views/admin/Campaign.vue'),
      beforeEnter: (to, from, next) => {
        if (getRole() === 'admin') {
          next();
        } else {
          next({ name: 'login' });
        }
      }
    },
    {
      path: '/leads',
      name: 'leads',
      component: () => import('../views/admin/Leads.vue'),
      beforeEnter: (to, from, next) => {
        if (getRole() === 'admin') {
          next();
        } else {
          next({ name: 'login' });
        }
      }
    },
    {
      path: '/asignaciones',
      name: 'asignaciones',
      component: () => import('../views/admin/Asignaciones.vue'),
      beforeEnter: (to, from, next) => {
        if (getRole() === 'admin') {
          next();
        } else {
          next({ name: 'login' });
        }
      }
    },
    {
      path: '/reasignaciones',
      name: 'reasignaciones',
      component: () => import('../views/admin/Reasignaciones.vue'),
      beforeEnter: (to, from, next) => {
        if (getRole() === 'admin') {
          next();
        } else {
          next({ name: 'login' });
        }
      }
    },
    {
      path: '/cargar-archivo',
      name: 'cargar-archivo',
      component: () => import('../views/admin/CargarArchivo.vue'),
      beforeEnter: (to, from, next) => {
        if (getRole() === 'admin') {
          next();
        } else {
          next({ name: 'login' });
        }
      }
    },
    
    // Promotor Views
    {
      path: '/dash-promotor',
      name: 'dash-promotor',
      component: () => import('../views/promotor/DashPromotor.vue'),
      beforeEnter: (to, from, next) => {
        if (getRole() === 'promotor') {
          next();
        } else {
          next({ name: 'login' });
        }
      }
    },
    {
      path: '/alumno-promotor',
      name: 'alumno-promotor',
      component: () => import('../views/promotor/AlumnoPromotor.vue'),
      beforeEnter: (to, from, next) => {
        if (getRole() === 'promotor') {
          next();
        } else {
          next({ name: 'login' });
        }
      }
    },
    {
      path: '/registrar-lead',
      name: 'registrar-lead',
      component: () => import('../views/promotor/RegistrarLead.vue'),
      beforeEnter: (to, from, next) => {
        if (getRole() === 'promotor') {
          next();
        } else {
          next({ name: 'login' });
        }
      }
    },
    {
      path: '/leads-promotor',
      name: 'leads-promotor',
      component: () => import('../views/promotor/Leads.vue'),
      beforeEnter: (to, from, next) => {
        if (getRole() === 'promotor') {
          next();
        } else {
          next({ name: 'login' });
        }
      }
    },
    {
      path: '/register-contacto/:selectContacto',
      name: 'register-contacto',
      component: () => import('../views/promotor/RegisterContacto.vue'),
      props: true,
      beforeEnter: (to, from, next) => {
        if (getRole() === 'promotor') {
          next();
        } else {
          next({ name: 'login' });
        }
      }
    },


    // Coordinador Views
    {
      path: '/alumno-coordinador',
      name: 'alumno-coordinador',
      component: () => import('../views/coordinador/AlumnoCoordinador.vue'),
      beforeEnter: (to, from, next) => {
        if (getRole() === 'coordinador') {
          // Acceso permitido para administradores
          next();
        } else {
          // Redirigir a la página de inicio de sesión o a otro lugar adecuado
          next({ name: '/login' });
        }
      }
    },

    {
      path: '/template',
      name: 'template',
      component: TemplateView,
    },
  ]
})
export default router;
