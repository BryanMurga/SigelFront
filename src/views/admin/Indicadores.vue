<template>
  <div>
    <div class="lg:ml-60 p-4">
      <i class="fas fa-bars-progress text-2xl" style="color: #48c9b0"></i>
      <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Promotores</span>
    </div>

    <SideBarADM />

    <div class="mt-6 ml-64 mr-10 mb-5">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input v-model="searchQuery" type="search" name="leadSearch"
          class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Buscar registros" required />
      </div>
    </div>

    <br>
    <div class="grid justify-items-center" style="background-color: #000000;">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Registros Tiktoks</h5>
    </div>
    <br>

    <section>
      <div class="flex-1 lg:ml-64">
        <div class="relative overflow-x-auto max-h-[520px] shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">NOMBRE PROMOTOR</th>
                <th scope="col" class="px-6 py-3">INSC-INSCRIPCION</th>
                <th scope="col" class="px-6 py-3">P-PROSPECTO</th>
                <th scope="col" class="px-6 py-3">PS-SEGUIMIENTO</th>
                <th scope="col" class="px-6 py-3">PI-INSCRIPCION</th>
                <th scope="col" class="px-6 py-3">NI-NO INTERASA</th>
                <th scope="col" class="px-6 py-3">SC-SIN CONTACTO</th>
                <th scope="col" class="px-6 py-3">DI-DATO NO VALIDO</th>
                <th scope="col" class="px-6 py-3">NC-NO CONTESTA</th>
                <th scope="col" class="px-6 py-3">PU-PERSONAL UNINTER</th>
                <th scope="col" class="px-6 py-3">AU-ALUMNO UNINTER</th>
                <th scope="col" class="px-6 py-3">DU-DUPLICADO</th>
                <th scope="col" class="px-6 py-3">DATOS TRABAJADO</th>
                <th scope="col" class="px-6 py-3">DATOS ASIGNADOS</th>
                <th scope="col" class="px-6 py-3">% TRABAJANDO</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in datos" :key="data.promotorActual"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ data.NombrePromotor }}
                </td>
                <td class="px-6 py-4">
                  {{ data.Count_insc }}
                </td>
                <td class="px-6 py-4">
                  {{ data.P_Prospecto }}
                </td>
                <td class="px-6 py-4">
                  {{ data.PS_Seguimiento }}
                </td>
                <td class="px-6 py-4">
                  {{ data.PI_Inscripcion }}
                </td>
                <td class="px-6 py-4">
                  {{ data.NI_NO_Interesa }}
                </td>
                <td class="px-6 py-4">
                  {{ data.SC_Sin_Contacto }}
                </td>
                <td class="px-6 py-4">
                  {{ data.DI_Dato_No_Valido }}
                </td>
                <td class="px-6 py-4">
                  {{ data.NC_NO_Contesta }}
                </td>
                <td class="px-6 py-4">
                  {{ data.PU_Personal_UNINTER }}
                </td>
                <td class="px-6 py-4">
                  {{ data.AU_Alumno_UNINTER }}
                </td>
                <td class="px-6 py-4">
                  {{ data.DU_Duplicado }}
                </td>
                <td class="px-6 py-4">
                  {{ data.Datos_Trabajados }}
                </td>
                <td class="px-6 py-4">
                  {{ data.Datos_Asignados }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <br>
    <div class="grid justify-items-center" style="background-color: #d3912f;">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">Registros de META</h5>
    </div>
    <br>

    <section>
      <div class="flex-1 lg:ml-64">
        <div class="relative overflow-x-auto max-h-[520px] shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-black uppercase dark:bg-gray-700 dark:text-gray-400"
              :style="{ backgroundColor: '#d3912f' }">
              <tr>
                <th scope="col" class="px-6 py-3">NOMBRE PROMOTOR</th>
                <th scope="col" class="px-6 py-3">INSC-INSCRIPCION</th>
                <th scope="col" class="px-6 py-3">P-PROSPECTO</th>
                <th scope="col" class="px-6 py-3">PS-SEGUIMIENTO</th>
                <th scope="col" class="px-6 py-3">PI-INSCRIPCION</th>
                <th scope="col" class="px-6 py-3">NI-NO INTERASA</th>
                <th scope="col" class="px-6 py-3">SC-SIN CONTACTO</th>
                <th scope="col" class="px-6 py-3">DI-DATO NO VALIDO</th>
                <th scope="col" class="px-6 py-3">NC-NO CONTESTA</th>
                <th scope="col" class="px-6 py-3">PU-PERSONAL UNINTER</th>
                <th scope="col" class="px-6 py-3">AU-ALUMNO UNINTER</th>
                <th scope="col" class="px-6 py-3">DU-DUPLICADO</th>
                <th scope="col" class="px-6 py-3">DATOS TRABAJADO</th>
                <th scope="col" class="px-6 py-3">DATOS ASIGNADOS</th>
                <th scope="col" class="px-6 py-3">% TRABAJANDO</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in datosMeta" :key="data.promotorActual"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ data.NombrePromotor }}
                </td>
                <td class="px-6 py-4">
                  {{ data.Count_insc }}
                </td>
                <td class="px-6 py-4">
                  {{ data.P_Prospecto }}
                </td>
                <td class="px-6 py-4">
                  {{ data.PS_Seguimiento }}
                </td>
                <td class="px-6 py-4">
                  {{ data.PI_Inscripcion }}
                </td>
                <td class="px-6 py-4">
                  {{ data.NI_NO_Interesa }}
                </td>
                <td class="px-6 py-4">
                  {{ data.SC_Sin_Contacto }}
                </td>
                <td class="px-6 py-4">
                  {{ data.DI_Dato_No_Valido }}
                </td>
                <td class="px-6 py-4">
                  {{ data.NC_NO_Contesta }}
                </td>
                <td class="px-6 py-4">
                  {{ data.PU_Personal_UNINTER }}
                </td>
                <td class="px-6 py-4">
                  {{ data.AU_Alumno_UNINTER }}
                </td>
                <td class="px-6 py-4">
                  {{ data.DU_Duplicado }}
                </td>
                <td class="px-6 py-4">
                  {{ data.Datos_Trabajados }}
                </td>
                <td class="px-6 py-4">
                  {{ data.Datos_Asignados }}
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </section>

  </div>

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
      <form @submit.prevent="updatePromotor">
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
          <fwb-button @click="updatePromotor" color="blue">Guardar Cambios</fwb-button>
          <fwb-button @click="closeEditModal" color="alternative">Cancelar</fwb-button>
        </div>
      </form>
    </div>
  </div>
</template>
  
<script>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";
import SideBarADM from "../../components/SideBarADM.vue";
import axios from "axios";
import { FwbButton, FwbModal } from "flowbite-vue";
import { useRouter } from "vue-router";
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
      datos: [],
      datosMeta: [],
      editingPromotor: null,
      addingPromotor: {
        Nombre: "",
        Correo: "",
        Telefono: "",
        Estado: "",
        Passw: "",
      },
      searchQuery: "",
    };
  },
  mounted() {
    this.loadPromotores();
    this.countData();
    this.countDataMeta();
  },
  computed: {
    filteredPromotores() {
      if (!this.searchQuery) return this.promotores;
      return this.promotores.filter((promotor) =>
        promotor.Nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {

    async loadPromotores() {
      try {
        const response = await axios.get("http://localhost:4000/promotores");
        this.promotores = response.data.listPromotores;
        console.log(this.promotores);
      } catch (error) {
        console.error("Error al obtener promotores:", error);
      }
    },

    async countData() {
      try {
        const response = await axios.get("http://localhost:4000/promotores/count");
        this.datos = response.data.count;
        console.log(this.datos);

      } catch (error) {
        console.error("Error al obtener promotores:", error);
      }
    },

    async countDataMeta() {
      try {
        const response = await axios.get("http://localhost:4000/promotores/count/meta");
        this.datosMeta = response.data.count;
        console.log(this.datosMeta);

      } catch (error) {
        console.error("Error al obtener promotores:", error);
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
        await axios.put(

          `http://localhost:4000/promotores/update/${this.editingPromotor.PromotorID}`,
          this.editingPromotor
        );

        this.closeEditModal();
        this.loadPromotores()

        this.notify();
      } catch (error) {
        console.error("Error al actualizar el promotor:", error);
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
  components: { SideBarADM, FwbButton, FwbModal },
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
  