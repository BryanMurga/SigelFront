<template>
  <DashboardLayout name="Inscritos">
    <i class="fa-solid fa-users text-2xl" style="color: #48c9b0"></i>
    <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg"
      >Inscritos</span
    >
    <br /><br />

    <form class="flex items-center relative">
      <div class="relative flex-shrink-0">
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          @click="toggleDropdown"
          class="flex-shrink-0 inline-flex items-center py-3.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
        >
          {{ selectedCategory }}
          <svg
            class="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          v-if="isDropdownOpen"
          id="dropdown"
          class="absolute top-full left-0 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          style="z-index: 999"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            <li>
              <button
                type="button"
                class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                @click="selectCategory('Nombre')"
              >
                Nombre
              </button>
            </li>
            <li>
              <button
                type="button"
                class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                @click="selectCategory('Telefono')"
              >
                Teléfono
              </button>
            </li>
            <li>
              <button
                type="button"
                class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                @click="selectCategory('Escuela')"
              >
                Escuela de Procedencia
              </button>
            </li>
            <li>
              <button
                type="button"
                class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                @click="selectCategory('NumeroRecibo')"
              >
                No. Recibo
              </button>
            </li>
            <li>
              <button
                type="button"
                class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                @click="selectCategory('Matricula')"
              >
                Matricula
              </button>
            </li>
            <li>
              <button
                type="button"
                class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                @click="selectCategory('CorreoInstitucional')"
              >
                Correo Institucional
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="relative w-full">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          v-model="searchQuery"
          type="search"
          id="default-search"
          name="leadSearch"
          class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Buscar registros"
          required
        />
      </div>
    </form>

    <div
      class="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center"
    >
      <div></div>

      <div>
        <label
          for="select1"
          class="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
        >
          Filtrado de categoria</label
        >
        <select
          id="select1"
          v-model="selectedFiltrado"
          class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Escoge un filtro</option>
          <option
            v-for="filtrado in filtradoSelect"
            :key="filtrado"
            :value="filtrado"
          >
            {{ filtrado }}
          </option>
        </select>
      </div>

      <div v-if="selectedFiltrado === 'Carrera'">
        <select
          id="carrera"
          v-model="subSelectedFiltrado"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Escoge estatus</option>
          <option
            v-for="carrera in Carreras"
            :key="carrera"
            :value="carrera.Nombre"
          >
            {{ carrera.Nombre }}
          </option>
        </select>
      </div>
      <div v-if="selectedFiltrado === 'Procedencia'">
        <select
          id="carrera"
          v-model="subSelectedFiltrado"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Escoge estatus</option>
          <option v-for="pro in Procedencia" :key="pro" :value="pro">
            {{ pro }}
          </option>
        </select>
      </div>
      <div v-if="selectedFiltrado === 'Estatus'">
        <select
          id="estatus"
          v-model="subSelectedFiltrado"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Escoge un promotor</option>
          <option v-for="est in Estatus" :key="est" :value="est">
            {{ est }}
          </option>
        </select>
      </div>
      <button
        type="button"
        class="px-3 py-2 text-xs font-medium text-center text-white bg-green-800 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        @click="BorrarFiltros()"
      >
        Borrar Filtros
      </button>
    </div>

    <div
      id="verRedesModal"
      tabindex="-1"
      aria-hidden="true"
      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative p-4 w-full max-w-4xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Redes sociales
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="verRedesModal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span @click="closeEditModal" class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5 space-y-4">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table
                class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase dark:text-gray-400"
                >
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    >
                      Facebook
                    </th>
                    <th scope="col" class="px-6 py-3">Instagram</th>
                    <th scope="col" class="px-6 py-3">TikTok</th>
                    <th scope="col" class="px-6 py-3">LinkedIn</th>
                    <th scope="col" class="px-6 py-3">Twiter</th>
                    <th scope="col" class="px-6 py-3">Whatsapp</th>
                    <th scope="col" class="px-6 py-3">Otros</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-if="redes"
                    class="border-b border-gray-200 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      class="px-6 py-10 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {{ redes.RSFacebook || "N/A" }}
                    </th>
                    <td
                      class="px-6 py-10 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {{ redes.RSInstagram || "N/A" }}
                    </td>
                    <td
                      class="px-6 py-10 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {{ redes.RSTiktok || "N/A" }}
                    </td>
                    <td
                      class="px-6 py-10 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {{ redes.RsLinkedln || "N/A" }}
                    </td>
                    <td
                      class="px-6 py-10 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {{ redes.RsTwiter || "N/A" }}
                    </td>
                    <td
                      class="px-6 py-10 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {{ redes.RSWhatsapp || "N/A" }}
                    </td>
                    <td
                      class="px-6 py-10 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {{ redes.RSOtro || "N/A" }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- Modal footer -->
          <div
            class="flex justify-between items-start p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              data-modal-hide="verRedesModal"
              type="button"
              class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>

    <br />

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          style="background-color: #0C4A6E"
          class="text-xs uppercase dark:bg-gray-700 text-white"
        >
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Nombre</th>
            <th scope="col" class="px-6 py-3">Telefono</th>
            <th scope="col" class="px-6 py-3">Escuela de Procedencia</th>
            <th scope="col" class="px-6 py-3">Numero de recibo</th>
            <th scope="col" class="px-6 py-3">Matricula</th>
            <th scope="col" class="px-6 py-3">Carrera de Inscripción</th>
            <th scope="col" class="px-6 py-3">Procedencia</th>
            <th scope="col" class="px-6 py-3">Estatus</th>
            <th scope="col" class="px-6 py-3">Correo Institucional</th>
            <th scope="col" class="px-6 py-3">Redes sociales</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="alumno in filteredAlumnos"
            :key="alumno.AlumnoID"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ alumno.AlumnoID }}
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ alumno.NombreAlumno }}
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ alumno.Telefono }}
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ alumno.EscuelaProcedencia }}
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ alumno.NoRecibo }}
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ alumno.Matricula }}
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ alumno.CarreraInsc }}
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ alumno.Procedencia }}
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ alumno.Estatus }}
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ alumno.CorreoInstitucional }}
            </th>
            <td class="px-6 py-4">
              <button
                @click="asignarAlumno(alumno.AlumnoID)"
                data-modal-target="verRedesModal"
                data-modal-toggle="verRedesModal"
                type="button"
                class="text-white bg-green-800 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Ver
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="grid justify-items-center"
        v-if="!filteredAlumnos.length"
        style="background-color: #f4d03f"
      >
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-grey"
        >
          No hay alumnos registrados
        </h5>
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { getUserName } from "../../sessions";
import DashboardLayout from "../../layouts/DashboardLayout.vue";
import axios from "axios";

// initialize components based on data attribute selectors

onMounted(() => {
  initFlowbite();
});

export default {
  data() {
    return {
      userName: getUserName(),
      alumnos: [],
      searchQuery: "",
      redes: null,
      isDropdownOpen: false,
      selectedCategory: "Nombre",
      filtradoSelect: ["Carrera", "Procedencia", "Estatus"],
      selectedFiltrado: "Carrera",
      subSelectedFiltrado: null,
      Carreras: [],
      Procedencia: ["Local", "Foraneo"],
      Estatus: ["INSC", "BAJA"],
    };
  },
  mounted() {
    this.loadAlumnos();
    this.loadRedes();
    this.loadCarreras();
  },
  computed: {
    filteredAlumnos() {
      if (this.alumnos.length === 0) {
        return [];
      }
      console.log(this.subSelectedFiltrado);

      if (this.selectedFiltrado == "Carrera" && this.subSelectedFiltrado) {
        return this.alumnos.filter((alumno) => {
          const carreraSelect =
            alumno && alumno.CarreraInsc ? alumno.CarreraInsc : "";
          return carreraSelect.includes(this.subSelectedFiltrado);
        });
      }

      if (this.selectedFiltrado == "Procedencia" && this.subSelectedFiltrado) {
        return this.alumnos.filter((alumno) => {
          const procedenciaSelect =
            alumno && alumno.Procedencia ? alumno.Procedencia : "";
          return procedenciaSelect.includes(this.subSelectedFiltrado);
        });
      }

      if (this.selectedFiltrado == "Estatus" && this.subSelectedFiltrado) {
        return this.alumnos.filter((alumno) => {
          const estatusSelect = alumno && alumno.Estatus ? alumno.Estatus : "";
          return estatusSelect.includes(this.subSelectedFiltrado);
        });
      }

      if (this.selectedCategory == "Nombre") {
        return this.alumnos.filter((alumno) => {
          const nombreCompleto =
            alumno && alumno.NombreAlumno ? alumno.NombreAlumno : "";
          return nombreCompleto
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        });
      }

      if (this.selectedCategory == "Telefono") {
        return this.alumnos.filter((alumno) => {
          const telefonoSearch =
            alumno && alumno.Telefono ? alumno.Telefono : "";
          return telefonoSearch
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        });
      }

      if (this.selectedCategory == "Escuela") {
        return this.alumnos.filter((alumno) => {
          const escuelaProcedenciaSearch =
            alumno && alumno.EscuelaProcedencia
              ? alumno.EscuelaProcedencia
              : "";
          return escuelaProcedenciaSearch
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        });
      }

      if (this.selectedCategory == "NumeroRecibo") {
        return this.alumnos.filter((alumno) => {
          const alumnoSearch = alumno && alumno.NoRecibo ? alumno.NoRecibo : "";
          return alumnoSearch
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        });
      }

      if (this.selectedCategory == "Matricula") {
        return this.alumnos.filter((alumno) => {
          const matriculaSearch =
            alumno && alumno.Matricula ? alumno.Matricula : "";
          return matriculaSearch
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        });
      }

      if (this.selectedCategory == "CorreoInstitucional") {
        return this.alumnos.filter((alumno) => {
          const correoSearch =
            alumno && alumno.CorreoInstitucional
              ? alumno.CorreoInstitucional
              : "";
          return correoSearch
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        });
      }
    },
  },
  methods: {
    async loadAlumnos() {
      try {
        // Reemplaza 'tu-endpoint' con la URL real de tu endpoint
        const response = await axios.get("http://localhost:4000/alumno", {
          params: {
            userName: this.userName,
          },
        });
        if (response.data && response.data) {
          this.alumnos = response.data.alumnos;
          // Almacena los leads en el array
        }
        console.log(this.alumnos);
      } catch (error) {}
    },
    async asignarAlumno(alumnoID) {
      await this.loadRedes(alumnoID);
    },
    async loadRedes(alumnoID) {
      console.log(alumnoID);

      try {
        if (!alumnoID) return (this.redes = []);
        const response = await axios.get(
          `http://localhost:4000/alumno/redes/${alumnoID}`
        );
        this.redes = response.data.redes || [];
        console.log(this.redes);
      } catch (error) {
        console.error("Error al cargar las redes", error);
      }
    },
    async loadCarreras() {
      try {
        const response = await axios.get("http://localhost:4000/carrera");
        if (response.data && response.data.carreras) {
          this.Carreras = response.data.carreras;
          this.Carreras = response.data.carreras;
        }
      } catch (error) {
        console.log("Error al obtener las carreras:", error);
      }
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectCategory(category) {
      this.selectedCategory = category;
      this.isDropdownOpen = false;
      // Aquí puedes realizar cualquier otra acción necesaria con la categoría seleccionada
    },
    BorrarFiltros() {
      this.selectedFiltrado = "Carrera";
      this.subSelectedFiltrado = null;
      this.input = "";
    },
  },
  watch: {
    alumnos: {
      handler() {
        this.loadRedes;
        this.filteredAlumnos;
        this.loadAlumnos;
        this.loadCarreras;
      },
    },
    inmediate: true,
  },
  components: { DashboardLayout },
};
</script>


