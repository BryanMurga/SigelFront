<template>
  <div>
    <div class="lg:ml-60 p-4">
      <i class="fa-solid fa-arrow-trend-up text-2xl" style="color: #48c9b0"></i>
      <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Indicadores</span>
    </div>

    <SideBarADM />

    

    <br>
    <div class="grid justify-items-center" style="background-color: #2e79db;">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">  Registros Generales</h5>
    </div>
    <br>

    <section>
      <div class="flex-1 lg:ml-64">
        <div class="relative overflow-x-auto max-h-[520px] shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400 sticky-header-general"
            :style="{ backgroundColor: '#2e79db' }">
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
              <tr v-for="data in datosGeneral" :key="data.promotorActual"
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
                <td class="px-6 py-4">
                  {{ data.Datos_Trabajando }} %
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800" style="background-color: #2e79db">
                <td class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                  Total
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotal('Count_insc') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotal('P_Prospecto') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotal('PS_Seguimiento') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotal('PI_Inscripcion') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotal('NI_NO_Interesa') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotal('SC_Sin_Contacto') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotal('DI_Dato_No_Valido') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotal('NC_NO_Contesta') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotal('PU_Personal_UNINTER') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotal('AU_Alumno_UNINTER') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotal('DU_Duplicado') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotal('Datos_Trabajados') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotal('Datos_Asignados') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularPorcentajeTotal() }} %
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <br>
    <div class="grid justify-items-center" style="background-color: #000000;">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">  Registros Tiktoks</h5>
    </div>
    <br>

    <section>
      <div class="flex-1 lg:ml-64">
        <div class="relative overflow-x-auto max-h-[520px] shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400 sticky-header-tiktok">
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
                <td class="px-6 py-4">
                  {{ data.Datos_Trabajando }} %
                </td>
              </tr>
              <tr class="bg-black dark:bg-gray-800">
                <td class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                  Total
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalTiktok('Count_insc') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalTiktok('P_Prospecto') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalTiktok('PS_Seguimiento') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalTiktok('PI_Inscripcion') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalTiktok('NI_NO_Interesa') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalTiktok('SC_Sin_Contacto') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalTiktok('DI_Dato_No_Valido') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalTiktok('NC_NO_Contesta') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalTiktok('PU_Personal_UNINTER') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalTiktok('AU_Alumno_UNINTER') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalTiktok('DU_Duplicado') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalTiktok('Datos_Trabajados') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalTiktok('Datos_Asignados') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularPorcentajeTotalTiktok() }} %
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <br>
    <div class="grid justify-items-center" style="background-color: #d3912f;">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">  Registros de META</h5>
    </div>
    <br>

    <section>
      <div class="flex-1 lg:ml-64">
        <div class="relative overflow-x-auto max-h-[520px] shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-black uppercase dark:bg-gray-700 dark:text-gray-400 sticky-header-meta"
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
                <td class="px-6 py-4">
                  {{ data.Datos_Trabajando }} %
                </td>

              </tr>
              <tr class="bg-white dark:bg-gray-800" style="background-color: #d3912f">
                <td class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                  Total
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalMeta('Count_insc') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalMeta('P_Prospecto') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalMeta('PS_Seguimiento') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalMeta('PI_Inscripcion') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalMeta('NI_NO_Interesa') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalMeta('SC_Sin_Contacto') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalMeta('DI_Dato_No_Valido') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalMeta('NC_NO_Contesta') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalMeta('PU_Personal_UNINTER') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalMeta('AU_Alumno_UNINTER') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalMeta('DU_Duplicado') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalMeta('Datos_Trabajados') }}
                </td>
                <td class="px-6 py-4 text-white">
                  {{ calcularTotalMeta('Datos_Asignados') }}
                </td>
                <td class="px-6 py-4 text-white" >
                  {{ calcularPorcentajeTotalMeta() }} %
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
      datosGeneral: [],
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
    this.countGeneral();
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

    async countGeneral() {
      try {
        const response = await axios.get("http://localhost:4000/promotores/count/general");
        this.datosGeneral = response.data.count;
        console.log( "General"+this.datosGeneral);

      } catch (error) {
        console.error("Error al obtener promotores:", error);
      }
    },

    async countData() {
      try {
        const response = await axios.get("http://localhost:4000/promotores/count/tiktok");
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

    calcularTotal(columna) {
      // Suma los valores de la columna especificada
      return this.datosGeneral.reduce((total, data) => total + (data[columna] || 0), 0);
    },

    calcularTotalTiktok(columna) {
      // Suma los valores de la columna especificada
      return this.datos.reduce((total, data) => total + (data[columna] || 0), 0);
    },

    calcularTotalMeta(columna) {
      // Suma los valores de la columna especificada
      return this.datosMeta.reduce((total, data) => total + (data[columna] || 0), 0);
    },

    calcularPorcentajeTotal() {
      // Calcula el promedio de la columna de porcentajes
      const totalTrabajando = this.datosGeneral.reduce((total, data) => total + (data.Datos_Trabajados || 0), 0);
      const totalAsignados = this.datosGeneral.reduce((total, data) => total + (data.Datos_Asignados || 0), 0);
      
      if (totalAsignados === 0) {
        return 0;
      }

      const promedio = (totalTrabajando / totalAsignados) * 100;
      return promedio.toFixed(2); // Redondea a dos decimales
    },

    calcularPorcentajeTotalTiktok() {
      // Calcula el promedio de la columna de porcentajes
      const totalTrabajando = this.datos.reduce((total, data) => total + (data.Datos_Trabajados || 0), 0);
      const totalAsignados = this.datos.reduce((total, data) => total + (data.Datos_Asignados || 0), 0);
      
      if (totalAsignados === 0) {
        return 0;
      }

      const promedio = (totalTrabajando / totalAsignados) * 100;
      return promedio.toFixed(2); // Redondea a dos decimales
    },

    calcularPorcentajeTotalMeta() {
      // Calcula el promedio de la columna de porcentajes
      const totalTrabajando = this.datosMeta.reduce((total, data) => total + (data.Datos_Trabajados || 0), 0);
      const totalAsignados = this.datosMeta.reduce((total, data) => total + (data.Datos_Asignados || 0), 0);
      
      if (totalAsignados === 0) {
        return 0;
      }

      const promedio = (totalTrabajando / totalAsignados) * 100;
      return promedio.toFixed(2); // Redondea a dos decimales
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

.sticky-header-general th {
        position: sticky;
        top: 0;
        background-color: #2e79db; /* Color de fondo del encabezado */
        z-index: 1; /* Para asegurarse de que esté encima del contenido al hacer scroll */
    }

    .sticky-header-tiktok th {
        position: sticky;
        top: 0;
        background-color: #000000; /* Color de fondo del encabezado */
        z-index: 1; /* Para asegurarse de que esté encima del contenido al hacer scroll */
    }

    .sticky-header-meta th {
        position: sticky;
        top: 0;
        background-color: #d3912f; /* Color de fondo del encabezado */
        z-index: 1; /* Para asegurarse de que esté encima del contenido al hacer scroll */
    }
</style>
  