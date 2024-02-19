import { createRouter, createWebHistory } from 'vue-router'

import { getRole } from '../sessions'

import HomeView from '../views/admin/Home.vue'
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'
import AsignacionesView from '../views/admin/Asignaciones.vue'
import LeadsView from '../views/admin/Leads.vue'
import TemplateView from '../views/Template.vue'
import PromotorListView from '../views/admin/PromotorList.vue'
import RegisterPromotor from '../views/admin/RegisterPromotor.vue'
import Reasignaciones from '../views/admin/Reasignaciones.vue'
import IndicadoresView from '../views/admin/Indicadores.vue'
import DashPromotor from '../views/promotor/DashPromotor.vue'
import RegistrarLead from '../views/promotor/RegistrarLead.vue'
import LeadsPromotor from '../views/promotor/Leads.vue'
import RegisterContacto from '../views/promotor/RegisterContacto.vue'
import CargarArchivo from '../views/admin/CargarArchivo.vue'
import AlumnoPromotor from '../views/promotor/AlumnoPromotor.vue'
import DashAdmin from '../views/admin/DashAdmin.vue'
import AlumnoCoordinador from '../views/coordinador/AlumnoCoordinador.vue'
import Campaign from '../views/admin/Campaign.vue'
import ReportePsPi from '../views/admin/PsReporte.vue'


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
      path: '/campania',
      name: 'campania',
      component: Campaign,
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
    {
      path: '/leads-promotor',
      name: 'leads-promotor',
      component: LeadsPromotor,
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
      path: '/leads-promotor',
      name: 'leads-promotor',
      component: LeadsPromotor,
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
    path: '/register-contacto/:selectContacto',
    name: 'register-contacto',
    component: RegisterContacto,
    props: true,
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
      path: '/cargar-archivo',
      name: 'cargar-archivo',
      component: CargarArchivo,
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
      path: '/alumno-promotor',
      name: 'alumno-promotor',
      component: AlumnoPromotor,
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
        path: '/dash-admin',
        name: 'dash-admin',
        component: DashAdmin,
        beforeEnter: (to, from, next) => {
          if (getRole() === 'admin') {
            // Acceso permitido para administradores
            next();
          } else {
            // Redirigir a la página de inicio de sesión o a otro lugar adecuado
            next({ name: '/login' });
          }
        }
      },
      {
        path: '/alumno-coordinador',
        name: 'alumno-coordinador',
        component: AlumnoCoordinador,
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
        path: '/reporte-ps-pi',
        name: 'reporte-ps-pi',
        component: ReportePsPi,
        beforeEnter: (to, from, next) => {
          if (getRole() === 'admin') {
            // Acceso permitido para administradores
            next();
          } else {
            // Redirigir a la página de inicio de sesión o a otro lugar adecuado
            next({ name: '/login' });
          }
        }
      },
  ]
})
export default router;
