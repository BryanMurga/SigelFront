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

        

        // Redirige a la vista de promotores después del registro
        this.$router.push('/promotor-list');
      } catch (error) {
        console.error('Error al registrar el promotor:', error.message);
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