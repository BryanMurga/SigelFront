<template>
  <div>
    <div class="lg:ml-64 p-4">
      <i class="fas fa-bars-progress text-2xl" style="color: #48c9b0"></i>
      <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Promotores</span>
    </div>
    <SideBarADM />
    <Search />

    <section>
      <div class="flex-1 lg:ml-64">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  Nombre Completo
                </th>
                <th scope="col" class="px-6 py-3">
                  Correo Electrónico
                </th>
                <th scope="col" class="px-6 py-3">
                  Teléfono
                </th>
                <th scope="col" class="px-6 py-3">
                  Estado
                </th>
                <th scope="col" class="px-6 py-3">
                  Editar
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="promotor in promotores"
                :key="promotor.PromotorID"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ promotor.Nombre }}
                </th>
                <td class="px-6 py-4">
                  {{ promotor.Correo }}
                </td>
                <td class="px-6 py-4">
                  {{ promotor.Telefono }}
                </td>
                <td class="px-6 py-4">
                  {{ promotor.Estado  ? 'Activo':'Inactivo' }}
                </td>
                <td class="px-6 py-4">
                  <fwb-button @click="openEditModal(promotor)" color="blue">
                    Editar
                  </fwb-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>

  <div>
    <div
      v-if="editingPromotor"
      class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 dark:bg-opacity-80"
    >
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 w-full max-w-md p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Editar Promotor</h3>
          <button @click="closeEditModal" class="text-gray-400 hover:text-gray-700 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <form @submit.prevent="updatePromotor">
          <label for="editNombre">Nombre:</label>
          <input v-model="editingPromotor.Nombre" id="editNombre" type="text" class="w-full mb-4 p-2 border rounded">
          <label for="editCorreo">Correo Electrónico:</label>
          <input v-model="editingPromotor.Correo" id="editCorreo" type="text" class="w-full mb-4 p-2 border rounded">
          <label for="editTelefono">Teléfono:</label>
          <input v-model="editingPromotor.Telefono" id="editTelefono" type="text" class="w-full mb-4 p-2 border rounded">
          <div class="flex justify-end mt-4">
            <fwb-button @click="updatePromotor" color="blue">Guardar Cambios</fwb-button>
            <fwb-button @click="closeEditModal" color="alternative">Cancelar</fwb-button>
          </div>
        </form>
      </div>
    </div>
  </div>


  <div class="flex justify-end mt-24 mr-40 ">
      <button @click="redirectToAgregarPromotor" class=" px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800   ">
        Agregar Promotor
      </button>
    </div>

</template>



  <script>
import { onMounted, ref } from 'vue';
import { initFlowbite } from 'flowbite';
import SideBarADM from '../../components/SideBarADM.vue';
import Search from '../../components/Search.vue';
import axios from 'axios';
import { FwbButton, FwbModal } from 'flowbite-vue';
import { useRouter } from 'vue-router';

onMounted(() => {
  initFlowbite();
});

export default {
  data() {
    return {
      promotores: [],
      editingPromotor: null,
      addingPromotor: {
        // Agrega las propiedades necesarias para agregar un nuevo promotor
        Nombre: '',
        Correo: '',
        Telefono: '',
        // Puedes agregar más propiedades según tus necesidades
      },
    };
  },
  mounted() {
    this.loadPromotores();
  },
  methods: {
    async loadPromotores() {
      try {
        const response = await axios.get('http://localhost:4000/promotores');
        this.promotores = response.data.listPromotores;
      } catch (error) {
        console.error('Error al obtener promotores:', error);
      }
    },
    openEditModal(promotor) {
      this.editingPromotor = { ...promotor };
    },
    closeEditModal() {
      this.editingPromotor = null;
    },
    async updatePromotor() {
      try {
        await axios.put(`http://localhost:4000/promotores/update/${this.editingPromotor.PromotorID}`, this.editingPromotor);
        this.closeEditModal();
      } catch (error) {
        console.error('Error al actualizar el promotor:', error);
      }
    },
    openAddModal() {
      this.addingPromotor = {
        Nombre: '',
        Correo: '',
        Telefono: '',
        // Puedes agregar más propiedades según tus necesidades
      };
      this.$refs.addModal.open();
    },
    closeAddModal() {
      this.$refs.addModal.close();
    },
    async addPromotor() {
      try {
        await axios.post('http://localhost:4000/promotores/add', this.addingPromotor);
        this.closeAddModal();
        this.loadPromotores();
      } catch (error) {
        console.error('Error al agregar el promotor:', error);
      }
    },
    redirectToAgregarPromotor() { 
      this.$router.push('/register-promotor');
      },
  },
  components: { SideBarADM, Search, FwbButton, FwbModal },
};
</script>

  

  

  <style>
  .modal-wrapper {
    z-index: 9999;
  }
  
  .modal-content {
    z-index: 10000;
  }
  
  .sidebar {
    z-index: 999;
  }
  </style>
  
  