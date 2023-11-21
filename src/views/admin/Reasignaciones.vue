<template>
  <header>
    <div class="lg:ml-64 p-4">
      <i class="fas fa-circle-plus text-2xl" style="color: #48c9b0"></i>
      <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg"
        >Reasignaciones</span
      >
    </div>
    <SideBarADM class="lg:w-64 md:w-48 sm:w-32" />
    <Search />

    <div
      class="p-5 lg:ml-64 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center"
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-grey"
      >
        Reasignaciones
      </h5>
    </div>
  </header>

  <section>
    <div class="flex-1 lg:ml-64">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Nombre Completo</th>
              <th scope="col" class="px-6 py-3">Telefono</th>
              <th scope="col" class="px-6 py-3">Correo Electronico</th>
              <th scope="col" class="px-6 py-3">Promotor Actual</th>
              <th scope="col" class="px-6 py-3">Nuevo Promotor</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="lead in leads"
              :key="lead.LeadID"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ lead.NombreCompleto }}
              </th>
              <td class="px-6 py-4">
                {{ lead.telefono }}
              </td>
              <td class="px-6 py-4">
                {{ lead.CorreoElectronico }}
              </td>
              <td class="px-6 py-4">
                {{ lead.promotorActual }}
              </td>
              <td class="px-2 py-1">
                <select
                  v-model="lead.selectedPromotor"
                  @change="reasignar(lead.LeadID)"
                  class="block w-full mt-1 rounded-md border-blue-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  style="color: black"
                >
                  <option
                    v-for="promotor in promotoresActivos"
                    :key="promotor.id"
                    :value="promotor.id"
                    style="color: black"
                  >
                    {{ promotor.Nombre }}
                  </option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <button
          type="button"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          style="text-align: left; float: right"
          @click="enviarAsignaciones"
        >
          <i class="fas fa-regular fa-paper-plane"></i> Enviar
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";
import { getUserName } from "../../sessions";
import SideBarADM from "../../components/SideBarADM.vue";
import Search from "../../components/Search.vue";
import axios from "axios";

export default {
  data() {
    return {
      userName: getUserName(),
      leads: [],
      promotoresActivos: [],
      selectedPromotores: ref({}), // Objeto para almacenar el promotor seleccionado para cada lead
    };
  },
  mounted() {
    this.loadLeads();
    this.loadActivePromotores();
    window.history.pushState({ noBackExitsApp: true }, null, null);
    window.addEventListener("popstate", this.preventBack);
  },
  beforeDestroy() {
    window.removeEventListener("popstate", this.preventBack);
  },
  methods: {
    async loadLeads() {
      try {
        const response = await axios.get("http://localhost:4000/leads");
        this.leads = response.data.leads;
      } catch (error) {
        console.error("Error al obtener leads:", error);
      }
    },
    async loadActivePromotores() {
      try {
        const response = await axios.get(
          "http://localhost:4000/promotores/activos"
        );
        this.promotoresActivos = response.data.promotores;
      } catch (error) {
        console.error("Error al obtener promotores activos:", error);
      }
    },
    preventBack(event) {
      if (event.state && event.state.noBackExitsApp) {
        window.history.pushState({ noBackExitsApp: true }, null, null);
      } else {
        window.history.pushState({ noBackExitsApp: true }, null, null);
      }
    },
    async enviarAsignaciones() {
      const reasignaciones = this.leads.map((lead) => ({
        leadId: lead.LeadID,
        nuevoPromotorId: this.selectedPromotores[lead.LeadID],
      }));

      try {
        const response = await axios.post(
          "http://localhost:4000/leads/reasignar",
          {
            reasignaciones,
          }
        );

        console.log(response.data.message);
        // Actualizar la lista de leads después de la reasignación (opcional)
        this.loadLeads();
      } catch (error) {
        console.error("Error al enviar las reasignaciones:", error);
      }
    },
  },
  components: { SideBarADM, Search },
};
</script>

<style></style>
