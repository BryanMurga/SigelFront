<template>
  <DashboardLayout name="Listado de promotores" >

      <i class="fas fa-bars-progress text-2xl" style="color: #48c9b0"></i>
      <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Promotores</span>


    <div class="flex flex-col mt-6 md:flex-row md:items-center md:justify-end lg:ml-64 lg:mr-10 lg:mb-5">
      <div class="relative flex-grow">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input v-model="searchQuery" type="search" name="leadSearch"
          class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2 md:mt-0"
          placeholder="Buscar registros" required />
      </div>
    </div>
    <br>

    <section>
        <div class="relative overflow-x-auto max-h-[520px] shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead style="background-color: #0C4A6E" class="text-xs uppercase dark:bg-gray-700 text-white">
              <tr>
                <th scope="col" class="px-6 py-3">Nombre Completo</th>
                <th scope="col" class="px-6 py-3">Correo Electrónico</th>
                <th scope="col" class="px-6 py-3">Teléfono</th>
                <th scope="col" class="px-6 py-3">Estado</th>
                <th scope="col" class="px-6 py-3">Editar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="promotor in filteredPromotores" :key="promotor.PromotorID"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ promotor.Nombre }}
                </th>
                <td class="px-6 py-4">
                  {{ promotor.Correo }}
                </td>
                <td class="px-6 py-4">
                  {{ promotor.Telefono }}
                </td>
                <td class="px-6 py-4" :class="{
                  'text-green-500': promotor.Estado,
                  'text-red-500': !promotor.Estado,
                }">
                  {{ promotor.Estado ? "Activo" : "Inactivo" }}
                </td>
                <td class="px-6 py-4">
                  <fwb-button @click="openEditModal(promotor)" color="green">
                    Editar
                  </fwb-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      <div class="flex justify-end mt-10 mr-40 mb-10">
        <button @click="redirectToAgregarPromotor" class="px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-600">
          Agregar Promotor
        </button>
      </div>
    </section>

  <div v-if="editingPromotor"
    class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 dark:bg-opacity-80">
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 w-full max-w-md p-6">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Editar Promotor
        </h3>
        <button @click="closeEditModal" class="text-gray-400 hover:text-gray-700 dark:hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <form @submit.prevent="actualizarPromotor">
        <label for="editNombre">Nombre:</label>
        <input v-model="editingPromotor.Nombre" id="editNombre" type="text" class="w-full mb-4 p-2 border rounded" />
        <label for="editCorreo">Correo Electrónico:</label>
        <input v-model="editingPromotor.Correo" id="editCorreo" type="text" class="w-full mb-4 p-2 border rounded" />
        <label for="editTelefono">Teléfono:</label>
        <input v-model="editingPromotor.Telefono" id="editTelefono" type="text" class="w-full mb-4 p-2 border rounded" />
        <label for="editEstatus">Estatus:</label>
        <select v-model="editingPromotor.Estado" id="editEstatus" class="w-full mb-4 p-2 border rounded">
          <option value="1">Activo</option>
          <option value="0">Inactivo</option>
        </select>
        <label for="editPassw">Contraseña:</label>
        <input v-model="editingPromotor.Passw" id="editPassw" type="password" class="w-full mb-4 p-2 border rounded" />
        <div class="flex justify-end mt-4">
          <fwb-button @click="actualizarPromotor" color="blue">Guardar Cambios</fwb-button>
          <fwb-button @click="closeEditModal" color="alternative">Cancelar</fwb-button>
        </div>
      </form>
    </div>
  </div>
</DashboardLayout>
</template>

<script>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";
import DashboardLayout from "../../layouts/DashboardLayout.vue";
import axios from "axios";
import { FwbButton, FwbModal } from "flowbite-vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

onMounted(() => {
  initFlowbite();
});

export default {



  setup() {
    const notify = () => {
      toast("Se ha Actualizado al Promotor!", {
        autoClose: 3000,
        type: "success",
      });
    };

    const errNotify = () => {
      toast("Error al Actualizar. No puedes dejar campos vacios ", {
        autoClose: 2000,
        type: "error",
      });
    };

    const infoNotify = () => {
      toast("Se ha actualizado la Información... ", {
        autoClose: 2000,
        type: "info",
      });
    };

    return { notify, errNotify, infoNotify };
  },
  data() {
    return {
      promotores: [],
      editingPromotor: null,
      selectedPromotor: {
        Nombre: '',
        Correo: '',
        Passw: '',
        Telefono: '',
        Estado: false,
      },
      searchQuery: "",
    };
  },
  mounted() {
    this.loadPromotores();
  },
  computed: {
    filteredPromotores() {
      if (!this.searchQuery) return this.promotores;
      return this.promotores.filter((promotor) =>
        promotor.Nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    estadoBooleano() {
      return this.selectedPromotor.Estado === 1;
    },
    estadoTexto() {
      return this.selectedPromotor.Estado ? 'Activo' : 'Inactivo';
    },
  },

  methods: {
    editPromotor(promotor) {
      // Clona el objeto promotor para evitar mutaciones directas
      const promotorEdit = { ...promotor };

      // Convierte el estado de 0 o 1 a false o true
      promotorEdit.Estado = promotorEdit.Estado === 1;

      // Actualiza el promotor seleccionado para editar
      this.selectedPromotor = promotorEdit;
    },


    async loadPromotores() {
      try {
        const response = await axios.get("http://localhost:4000/promotores");
        this.promotores = response.data.listPromotores;
      } catch (error) {
        this.errPromotores();
      }
    },

    openEditModal(promotor) {
      this.editingPromotor = { ...promotor };
    },

    closeEditModal() {
      this.editingPromotor = null;
    },

    async actualizarPromotor() {
      try {
        // Convierte el estado de true/false a 1/0 para la API
        const promotorParaActualizar = { ...this.editingPromotor };

        // Actualiza en la base de datos
        await axios.put(`http://localhost:4000/promotores/update/${promotorParaActualizar.PromotorID}`, promotorParaActualizar);

        // Encuentra el índice del promotor en la lista original para actualizar
        const index = this.promotores.findIndex(promotor => promotor.PromotorID === this.selectedPromotor.PromotorID);
        if (index !== -1) {
          // Convierte el estado a booleano para el frontend si es necesario
          promotorParaActualizar.Estado = !!promotorParaActualizar.Estado;
          // Actualiza el promotor en la lista con los nuevos valores
          this.promotores.splice(index, 1, promotorParaActualizar);
        
        }
        this.closeEditModal();
        this.loadPromotores();
        // Notificación de éxito
        this.notify();



      } catch (error) {
        // Notificación de error
        this.errNotify();
      }
    },
    

    openAddModal() {
      this.addingPromotor = {
        Nombre: "",
        Correo: "",
        Telefono: "",
        Estado: "",

        // Puedes agregar más propiedades según tus necesidades
      };
      this.$refs.addModal.open();
    },
    closeAddModal() {
      this.$refs.addModal.close();
      
    },
    redirectToAgregarPromotor() {
      this.$router.push("/register-promotor");
    },
  },
  components: { DashboardLayout, FwbButton, FwbModal },
};
</script>