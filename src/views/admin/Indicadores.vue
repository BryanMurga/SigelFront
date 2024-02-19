<template>
  <DashboardLayout name="Indicadores">
    <section class="pb-1">
      <Table title="Registros generales" description="Agrega una breve descripcion">
        <template #header>
          <TableRow class="bg-atlantis-400">
            <TableHeader>Nombre promotor</TableHeader>
            <TableHeader>Insc - Inscripción</TableHeader>
            <TableHeader>P - Prospecto</TableHeader>
            <TableHeader>PS - Seguimiento</TableHeader>
            <TableHeader>PI - Inscripción</TableHeader>
            <TableHeader>NI - No Interesa</TableHeader>
            <TableHeader>SC - Sin contacto</TableHeader>
            <TableHeader>DI - Dato no válido</TableHeader>
            <TableHeader>NC - No contesta</TableHeader>
            <TableHeader>PU - Personal Uninter</TableHeader>
            <TableHeader>AU - Alumno Uninter</TableHeader>
            <TableHeader>DU - Duplicado</TableHeader>
            <TableHeader>Datos trabajado</TableHeader>
            <TableHeader>Datos asignados</TableHeader>
            <TableHeader>% Trabajando</TableHeader>
          </TableRow>
        </template>
        <template #default>
          <TableRow v-for="data in datosGeneral" :key="data.promotorActual" class="bg-atlantis-300">
            <TableData>{{ data.NombrePromotor }}</TableData>
            <TableData>{{ data.Count_insc }}</TableData>
            <TableData> {{ data.P_Prospecto }}</TableData>
            <TableData>{{ data.PS_Seguimiento }}</TableData>
            <TableData>{{ data.PI_Inscripcion }}</TableData>
            <TableData>{{ data.NI_NO_Interesa }}</TableData>
            <TableData>{{ data.SC_Sin_Contacto }}</TableData>
            <TableData>{{ data.DI_Dato_No_Valido }}</TableData>
            <TableData>{{ data.NC_NO_Contesta }}</TableData>
            <TableData>{{ data.PU_Personal_UNINTER }}</TableData>
            <TableData>{{ data.AU_Alumno_UNINTER }}</TableData>
            <TableData>{{ data.DU_Duplicado }}</TableData>
            <TableData>{{ data.Datos_Trabajados }}</TableData>
            <TableData>{{ data.Datos_Asignados }}</TableData>
            <TableData>{{ data.Datos_Trabajando }} %</TableData>
          </TableRow>

          <TableRow class="text-white bg-atlantis-600">
            <TableData>Total</TableData>
            <TableData>{{ calcularTotal('Count_insc') }}</TableData>
            <TableData>{{ calcularTotal('P_Prospecto') }}</TableData>
            <TableData>{{ calcularTotal('PS_Seguimiento') }}</TableData>
            <TableData>{{ calcularTotal('PI_Inscripcion') }}</TableData>
            <TableData>{{ calcularTotal('NI_NO_Interesa') }}</TableData>
            <TableData>{{ calcularTotal('SC_Sin_Contacto') }}</TableData>
            <TableData>{{ calcularTotal('DI_Dato_No_Valido') }}</TableData>
            <TableData>{{ calcularTotal('NC_NO_Contesta') }}</TableData>
            <TableData>{{ calcularTotal('PU_Personal_UNINTER') }}</TableData>
            <TableData>{{ calcularTotal('AU_Alumno_UNINTER') }}</TableData>
            <TableData>{{ calcularTotal('DU_Duplicado') }}</TableData>
            <TableData>{{ calcularTotal('Datos_Trabajados') }}</TableData>
            <TableData>{{ calcularTotal('Datos_Asignados') }}</TableData>
            <TableData>{{ calcularPorcentajeTotal() }} %</TableData>
          </TableRow>
        </template>
      </Table>

      <Table title="Registros de TikToks" description="Agrega una breve descripcion">
        <template #header>
          <TableRow class="bg-calypso-400">
            <TableHeader>Nombre promotor</TableHeader>
            <TableHeader>Insc - Inscripción</TableHeader>
            <TableHeader>P - Prospecto</TableHeader>
            <TableHeader>PS - Seguimiento</TableHeader>
            <TableHeader>PI - Inscripción</TableHeader>
            <TableHeader>NI - No Interesa</TableHeader>
            <TableHeader>SC - Sin contacto</TableHeader>
            <TableHeader>DI - Dato no válido</TableHeader>
            <TableHeader>NC - No contesta</TableHeader>
            <TableHeader>PU - Personal Uninter</TableHeader>
            <TableHeader>AU - Alumno Uninter</TableHeader>
            <TableHeader>DU - Duplicado</TableHeader>
            <TableHeader>Datos trabajado</TableHeader>
            <TableHeader>Datos asignados</TableHeader>
            <TableHeader>% Trabajando</TableHeader>
          </TableRow>
        </template>
        <template #default>
          <TableRow v-for="data in datos" :key="data.promotorActual" class="bg-calypso-300">
            <TableData>{{ data.NombrePromotor }}</TableData>
            <TableData>{{ data.Count_insc }}</TableData>
            <TableData> {{ data.P_Prospecto }}</TableData>
            <TableData>{{ data.PS_Seguimiento }}</TableData>
            <TableData>{{ data.PI_Inscripcion }}</TableData>
            <TableData>{{ data.NI_NO_Interesa }}</TableData>
            <TableData>{{ data.SC_Sin_Contacto }}</TableData>
            <TableData>{{ data.DI_Dato_No_Valido }}</TableData>
            <TableData>{{ data.NC_NO_Contesta }}</TableData>
            <TableData>{{ data.PU_Personal_UNINTER }}</TableData>
            <TableData>{{ data.AU_Alumno_UNINTER }}</TableData>
            <TableData>{{ data.DU_Duplicado }}</TableData>
            <TableData>{{ data.Datos_Trabajados }}</TableData>
            <TableData>{{ data.Datos_Asignados }}</TableData>
            <TableData>{{ data.Datos_Trabajando }} %</TableData>
          </TableRow>

          <TableRow class="text-white bg-calypso-600">
            <TableData>Total</TableData>
            <TableData>{{ calcularTotalTiktok('Count_insc') }}</TableData>
            <TableData>{{ calcularTotalTiktok('P_Prospecto') }}</TableData>
            <TableData>{{ calcularTotalTiktok('PS_Seguimiento') }}</TableData>
            <TableData>{{ calcularTotalTiktok('PI_Inscripcion') }}</TableData>
            <TableData>{{ calcularTotalTiktok('NI_NO_Interesa') }}</TableData>
            <TableData>{{ calcularTotalTiktok('SC_Sin_Contacto') }}</TableData>
            <TableData>{{ calcularTotalTiktok('DI_Dato_No_Valido') }}</TableData>
            <TableData>{{ calcularTotalTiktok('NC_NO_Contesta') }}</TableData>
            <TableData>{{ calcularTotalTiktok('PU_Personal_UNINTER') }}</TableData>
            <TableData>{{ calcularTotalTiktok('AU_Alumno_UNINTER') }}</TableData>
            <TableData>{{ calcularTotalTiktok('DU_Duplicado') }}</TableData>
            <TableData>{{ calcularTotalTiktok('Datos_Trabajados') }}</TableData>
            <TableData>{{ calcularTotalTiktok('Datos_Asignados') }}</TableData>
            <TableData>{{ calcularPorcentajeTotalTiktok() }} %</TableData>
          </TableRow>
        </template>
      </Table>

      <Table title="Registros de Meta" description="Agrega una breve descripcion">
        <template #header>
          <TableRow class="bg-torea-bay-400">
            <TableHeader>Nombre promotor</TableHeader>
            <TableHeader>Insc - Inscripción</TableHeader>
            <TableHeader>P - Prospecto</TableHeader>
            <TableHeader>PS - Seguimiento</TableHeader>
            <TableHeader>PI - Inscripción</TableHeader>
            <TableHeader>NI - No Interesa</TableHeader>
            <TableHeader>SC - Sin contacto</TableHeader>
            <TableHeader>DI - Dato no válido</TableHeader>
            <TableHeader>NC - No contesta</TableHeader>
            <TableHeader>PU - Personal Uninter</TableHeader>
            <TableHeader>AU - Alumno Uninter</TableHeader>
            <TableHeader>DU - Duplicado</TableHeader>
            <TableHeader>Datos trabajado</TableHeader>
            <TableHeader>Datos asignados</TableHeader>
            <TableHeader>% Trabajando</TableHeader>
          </TableRow>
        </template>
        <template #default>
          <TableRow v-for="data in datos" :key="data.promotorActual" class="bg-torea-bay-300">
            <TableData>{{ data.NombrePromotor }}</TableData>
            <TableData>{{ data.Count_insc }}</TableData>
            <TableData> {{ data.P_Prospecto }}</TableData>
            <TableData>{{ data.PS_Seguimiento }}</TableData>
            <TableData>{{ data.PI_Inscripcion }}</TableData>
            <TableData>{{ data.NI_NO_Interesa }}</TableData>
            <TableData>{{ data.SC_Sin_Contacto }}</TableData>
            <TableData>{{ data.DI_Dato_No_Valido }}</TableData>
            <TableData>{{ data.NC_NO_Contesta }}</TableData>
            <TableData>{{ data.PU_Personal_UNINTER }}</TableData>
            <TableData>{{ data.AU_Alumno_UNINTER }}</TableData>
            <TableData>{{ data.DU_Duplicado }}</TableData>
            <TableData>{{ data.Datos_Trabajados }}</TableData>
            <TableData>{{ data.Datos_Asignados }}</TableData>
            <TableData>{{ data.Datos_Trabajando }} %</TableData>
          </TableRow>

          <TableRow class="text-white bg-torea-bay-600">
            <TableData>Total</TableData>
            <TableData>{{ calcularTotalMeta('Count_insc') }}</TableData>
            <TableData>{{ calcularTotalMeta('P_Prospecto') }}</TableData>
            <TableData>{{ calcularTotalMeta('PS_Seguimiento') }}</TableData>
            <TableData>{{ calcularTotalMeta('PI_Inscripcion') }}</TableData>
            <TableData>{{ calcularTotalMeta('NI_NO_Interesa') }}</TableData>
            <TableData>{{ calcularTotalMeta('SC_Sin_Contacto') }}</TableData>
            <TableData>{{ calcularTotalMeta('DI_Dato_No_Valido') }}</TableData>
            <TableData>{{ calcularTotalMeta('NC_NO_Contesta') }}</TableData>
            <TableData>{{ calcularTotalMeta('PU_Personal_UNINTER') }}</TableData>
            <TableData>{{ calcularTotalMeta('AU_Alumno_UNINTER') }}</TableData>
            <TableData>{{ calcularTotalMeta('DU_Duplicado') }}</TableData>
            <TableData>{{ calcularTotalMeta('Datos_Trabajados') }}</TableData>
            <TableData>{{ calcularTotalMeta('Datos_Asignados') }}</TableData>
            <TableData>{{ calcularPorcentajeTotalMeta() }} %</TableData>
          </TableRow>
        </template>
      </Table>

      <!-- <div v-if="editingPromotor"
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
            <input v-model="editingPromotor.Telefono" id="editTelefono" type="text"
              class="w-full mb-4 p-2 border rounded" />
            <label for="editEstatus">Estatus:</label>
            <select v-model="editingPromotor.Estado" id="editEstatus" class="w-full mb-4 p-2 border rounded">
              <option value="1">Activo</option>
              <option value="0">Inactivo</option>
            </select>
            <label for="editPassw">Contraseña:</label>
            <input v-model="editingPromotor.Passw" id="editPassw" type="password"
              class="w-full mb-4 p-2 border rounded" />
            <div class="flex justify-end mt-4">
              <fwb-button @click="updatePromotor" color="blue">Guardar Cambios</fwb-button>
              <fwb-button @click="closeEditModal" color="alternative">Cancelar</fwb-button>
            </div>
          </form>
        </div>
      </div> -->
    </section>
  </DashboardLayout>
</template>
  
<script>
import "vue3-toastify/dist/index.css";
import { FwbButton, FwbModal } from "flowbite-vue";
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";
import { toast } from "vue3-toastify";
import axios from "axios";

import DashboardLayout from '../../layouts/DashboardLayout.vue';
import Table from "../../components/Indicadores/Table.vue";
import TableData from '../../components/Indicadores/TableData.vue'
import TableHeader from "../../components/Indicadores/TableHeader.vue";
import TableRow from "../../components/TableRow.vue";


onMounted(() => {
  initFlowbite();
});

export default {
  components: {
    DashboardLayout,
    FwbButton,
    FwbModal,
    Table,
    TableData,
    TableHeader,
    TableRow,
  },
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
        console.log("General" + this.datosGeneral);

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
};

</script>
