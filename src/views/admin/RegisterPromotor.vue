<template>
  <div>
    <div class="lg:ml-64 p-4">
      <i class="fas fa-bars-progress text-2xl" style="color: #48c9b0"></i>
      <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Promotores</span>
    </div>
    <SideBarADM />

    <section class="flex items-center justify-center h-scrren ">
      <div class="w-full max-w-md p-6">
        <form @submit.prevent="registerPromotor" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="nombre">
              Nombre Completo
            </label>
            <input v-model="promotor.Nombre" type="text" id="nombre" placeholder="Nombre completo" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            <p v-if="promotor.Nombre && !validateNombre" class="text-red-500 text-xs italic">Por favor, ingresa un nombre válido.</p>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="telefono">
              Teléfono
            </label>
            <input v-model="promotor.Telefono" type="text" id="telefono" placeholder="Teléfono" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            <p v-if="promotor.Telefono && !validateTelefono" class="text-red-500 text-xs italic">Por favor, ingresa un teléfono válido.</p>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="correo">
              Correo Electrónico
            </label>
            <input v-model="promotor.Correo" type="email" id="correo" placeholder="Correo electrónico" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            <p v-if="promotor.Correo && !validateCorreo" class="text-red-500 text-xs italic">Por favor, ingresa un correo válido.</p>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="passw">
              Passw
            </label>
            <input v-model="promotor.Passw" type="password" id="passw" placeholder="Passw" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="confirmarPassw">
              Confirmar Passw
            </label>
            <input v-model="confirmarContrasena" type="password" id="confirmarPassw" placeholder="Confirmar Passw" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            <p v-if="promotor.Passw && confirmarContrasena && promotor.Passw !== confirmarContrasena" class="text-red-500 text-xs italic">Las contraseñas no coinciden.</p>
          </div>
          <div class="flex items-center justify-between">
            <button type="submit" class="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
              Registrar Promotor
            </button>
          </div>
        </form>
      </div>
    </section>
    <!-- Toasts -->
    

<div id="toast-success" class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span class="sr-only">Check icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">Item moved successfully.</div>
    <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
</div>
<div id="toast-danger" class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
        </svg>
        <span class="sr-only">Error icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">Item has been deleted.</div>
    <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
</div>
<div id="toast-warning" class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
        </svg>
        <span class="sr-only">Warning icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">Improve password difficulty.</div>
    <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-warning" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
</div>


  </div>
</template>


<script>
import { onMounted, ref } from 'vue';
import { initFlowbite } from 'flowbite'; // Ajusta las importaciones según la API de Flowbite
import SideBarADM from '../../components/SideBarADM.vue';
import axios from 'axios';

onMounted(() => {
  initFlowbite();
});

export default {
  data() {
    return {
      promotor: {
        Nombre: '',
        Telefono: '',
        Correo: '',
        Passw: '',
      },  
      confirmarContrasena: '',
    };
  },
  computed: {
    validateNombre() {
      return /^[A-Za-z\s]+$/.test(this.promotor.Nombre);
    },
    validateTelefono() {
      return /^[0-9]+$/.test(this.promotor.Telefono);
    },
    validateCorreo() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.promotor.Correo);
    },
  },
  methods: {
    async registerPromotor() {
      try {
        const { Nombre, Telefono, Correo, Passw } = this.promotor;

        if (!Nombre || !Telefono || !Correo || !Passw || !this.validateNombre || !this.validateTelefono || !this.validateCorreo || Passw !== this.confirmarContrasena) {
          throw new Error('Por favor, completa todos los campos correctamente.');
        }

        
        await axios.post('http://localhost:4000/promotores/create', {
          Nombre,
          Telefono,
          Correo,
          Passw,
        });

        // Muestra el Toast de éxito utilizando la función de Flowbite
        showToast({
          text: 'Promotor creado exitosamente',
          type: 'success',
        });

        // Redirige a la vista de promotores después del registro
        this.$router.push('/promotor-list');
      } catch (error) {
        console.error('Error al registrar el promotor:', error.message);

        // Muestra el Toast de error utilizando la función de Flowbite
        // showToast({
        //   text: 'Error al registrar el promotor',
        //   type: 'danger',
        // });
      }
    },
  },
  components: {
    SideBarADM,
  },
};
</script>

<style scoped>
/* Estilos específicos para esta vista si es necesario */
</style>