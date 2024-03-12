<template>
  <DashboardLayout name="Reporte Semanal de Seguimiento">
    <section class="pb-1">
      <div class="relative overflow-x-auto shadow-xl sm:rounded-lg">
        <h2 class="text-2xl font-semibold mb-4">
          <i class="fa-solid fa-bars-progress" style="color: #48c9b0"></i>
          Reporte Ps-Pi
        </h2>

        <!-- Formulario para ingresar fechas y botón para generar el reporte -->
        <div class="mb-4 flex items-center">
          <div class="mr-4">
            <label for="fechaInicio" class="mr-2 text-sm font-medium"
              >Fecha de Inicio:</label
            >
            <input
              type="date"
              v-model="fechaInicio"
              id="fechaInicio"
              class="border p-2 rounded-md focus:outline-none focus:ring focus:border-sky-600"
            />
          </div>

          <div class="mr-4">
            <label for="fechaFin" class="mr-2 text-sm font-medium"
              >Fecha de Fin:</label
            >
            <input
              type="date"
              v-model="fechaFin"
              id="fechaFin"
              class="border p-2 rounded-md focus:outline-none focus:ring focus:border-sky-600"
            />
          </div>

          <div>
            <button
              @click="generarReporte"
              class="py-2 px-4 bg-sky-600 hover:bg-sky-700 rounded-md text-white text-sm duration-150"
            >
              Generar Reporte
            </button>
          </div>
        </div>

        <!-- Tabla de resultados -->
        <div v-if="reporte.length > 0">
          <h3 class="text-xl font-semibold mb-2">Reporte de Leads:</h3>
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="py-2 px-4 bg-sky-600 text-white text-sm duration-150"
                >
                  Grado
                </th>
                <th
                  class="py-2 px-4 bg-sky-600 text-white text-sm duration-150"
                >
                  Programa
                </th>
                <th
                  class="py-2 px-4 bg-sky-600 text-white text-sm duration-150"
                >
                  Ciclo
                </th>
                <th
                  class="py-2 px-4 bg-sky-600 text-white text-sm duration-150"
                >
                  PSeguimiento
                </th>
                <th
                  class="py-2 px-4 bg-sky-600 text-white text-sm duration-150"
                >
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in reporte"
                :key="item.Grado + item.Programa + item.PSeguimiento"
              >
                <td class="py-2 px-4 border">{{ item.Grado }}</td>
                <td class="py-2 px-4 border">{{ item.Programa }}</td>
                <td class="py-2 px-4 border">{{ item.Ciclo }}</td>
                <td class="py-2 px-4 border">{{ item.PSeguimiento }}</td>
                <td class="py-2 px-4 border">{{ item.total }}</td>
              </tr>
            </tbody>
          </table>

          <!-- Sección de total por "PI-INSCRIPCIÓN" y "PS-SEGUIMIENTO" -->
          <div class="mt-4 flex justify-end">
            <div class="ml-auto">
              <p class="text-sm font-semibold">
                Total de "PI-INSCRIPCIÓN": {{ totalPI }}
              </p>
              <p class="text-sm font-semibold">
                Total de "PS-SEGUIMIENTO": {{ totalPS }}
              </p>
            </div>
          </div>
        </div>

        <!-- Formulario para ingresar fechas y ciclo para el segundo reporte -->
        <h2 class="text-2xl font-semibold mb-4">
          <i class="fa-solid fa-bars-progress" style="color: #48c9b0"></i>
          Reporte INS por PS- PI
        </h2>

        <div class="mt-8 flex items-center">
          <div class="mr-4">
            <label for="fechaInicioPromotores" class="mr-2 text-sm font-medium"
              >Fecha de Inicio:</label
            >
            <input
              type="date"
              v-model="fechaInicioPromotores"
              id="fechaInicioPromotores"
              class="border p-2 rounded-md focus:outline-none focus:ring focus:border-sky-600"
            />
          </div>

          <div class="mr-4">
            <label for="fechaFinPromotores" class="mr-2 text-sm font-medium"
              >Fecha de Fin:</label
            >
            <input
              type="date"
              v-model="fechaFinPromotores"
              id="fechaFinPromotores"
              class="border p-2 rounded-md focus:outline-none focus:ring focus:border-sky-600"
            />
          </div>

          <div class="mr-4">
            <label for="cicloPromotores" class="mr-2 text-sm font-medium"
              >Ciclo:</label
            >
            <input
              type="text"
              v-model="cicloPromotores"
              id="cicloPromotores"
              class="border p-2 rounded-md focus:outline-none focus:ring focus:border-sky-600"
            />
          </div>

          <div>
            <button
              @click="generarReportePromotores"
              class="py-2 px-4 bg-sky-600 hover:bg-sky-700 rounded-md text-white text-sm duration-150"
            >
              Generar Reporte
            </button>
          </div>
        </div>

        <!-- Tabla de resultados para el segundo reporte -->
        <div v-if="reportePromotores.length > 0">
          <br />

          <!-- Tabla de resultados para el segundo reporte -->
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="py-2 px-4 bg-sky-600 text-white text-sm duration-150"
                >
                  Promotor
                </th>
                <th
                  class="py-2 px-4 bg-sky-600 text-white text-sm duration-150"
                >
                  PI
                </th>
                <th
                  class="py-2 px-4 bg-sky-600 text-white text-sm duration-150"
                >
                  INS-PI
                </th>
                <th
                  class="py-2 px-4 bg-sky-600 text-white text-sm duration-150"
                >
                  PS
                </th>
                <th
                  class="py-2 px-4 bg-sky-600 text-white text-sm duration-150"
                >
                  INS-PS
                </th>
                <th
                  class="py-2 px-4 bg-sky-600 text-white text-sm duration-150"
                >
                  INS-OTRO-STATUS
                </th>
                <th
                  class="py-2 px-4 bg-sky-600 text-white text-sm duration-150"
                >
                  Medio Otra Inscripción
                </th>
                <th
                  class="py-2 px-4 bg-sky-600 text-white text-sm duration-150"
                >
                  TOTAL INS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in reportePromotores" :key="item.Promotor">
                <td class="py-2 px-4 border">{{ item.Promotor }}</td>
                <td class="py-2 px-4 border">{{ item.PI }}</td>
                <td class="py-2 px-4 border">{{ item.INS_PI }}</td>
                <td class="py-2 px-4 border">{{ item.PS }}</td>
                <td class="py-2 px-4 border">{{ item.INS_PS }}</td>
                <td class="py-2 px-4 border">{{ item.INS_OTRO_STATUS }}</td>
                <td class="py-2 px-4 border">
                  {{ item.MedioOtraInscripcion }}
                </td>
                <td class="py-2 px-4 border">{{ item.TOTAL_INS }}</td>
              </tr>
            </tbody>
          </table>

          <div class="mt-4 flex justify-end">
            <div class="ml-auto">
              <p class="text-sm font-semibold">
                Total de "PI-INSCRIPCIÓN": {{ PromTotalPI }},
              </p>
            </div>
            <div>
              <p class="text-sm font-semibold">
                Total de "INS-PI": {{ PromTotalINS_PI }},
              </p>
            </div>
            <div>
              <p class="text-sm font-semibold">
                Total de "PS": {{ PromTotalPS }},
              </p>
            </div>
            <div>
              <p class="text-sm font-semibold">
                Total de "INS-PS": {{ PromTotalINS_PS }},
              </p>
            </div>
            <div>
              <p class="text-sm font-semibold">
                Total de "INS-OTRO-STATUS": {{ PromTotalINS_OTRO_STATUS }},
              </p>
            </div>
            <div>
              <p class="text-sm font-semibold">
                Total de "TOTAL INS": {{ PromTotalTOTAL_INS }}.
              </p>
            </div>
          </div>
        </div>
        <br />
      </div>
    </section>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "../../layouts/DashboardLayout.vue";
import axios from "axios";
import { getUserName } from "../../sessions";
import { toast } from "vue3-toastify";

export default {
  setup() {
    const notify = () => {
      toast("Se ha generado el Reporte", {
        autoClose: 3000,
        type: "success",
      });
    };

    const errNotify = () => {
      toast("Error! No sepuede Generar el Reporte", {
        autoClose: 2000,
        type: "error",
      });
    };

    const infoNotify = () => {
      toast("Verifica que todos los campos sean llenados correctamente...", {
        autoClose: 2000,
        type: "info",
      });
    };

    return { notify, errNotify, infoNotify };
  },

  components: {
    DashboardLayout,
  },
  data() {
    return {
      userName: getUserName(),
      fechaInicio: "",
      fechaFin: "",
      reporte: [],
      ciclo: "",
      leadsFiltrados: [],
      // Nuevos datos para el segundo reporte
      fechaInicioPromotores: "",
      fechaFinPromotores: "",
      cicloPromotores: "",
      reportePromotores: [],
    };
  },
  methods: {
    generarReporte() {
      axios
        .post("http://localhost:4000/reportes/reporte-ps-pi", {
          fechaInicio: this.fechaInicio,
          fechaFin: this.fechaFin,
        })

        .then((response) => {
          if (this.fechaInicio === "" || this.fechaFin === "" || response.data.reporte.length === 0) {
            this.infoNotify();
            return;
          } else {
            this.reporte = response.data.reporte;
            this.ordenarReporte();
            this.notify();
          }
        })
        .catch((error) => {
          this.errNotify();
          console.error("Error al generar el reporte de Leads:", error);
          alert("Error al generar el reporte de Leads.");
        });
    },

    // Método de ordenamiento del primer reporte
    ordenarReporte() {
      this.reporte.sort((a, b) => {
        if (
          a.PSeguimiento === "PI-INSCRIPCIÓN" &&
          b.PSeguimiento !== "PI-INSCRIPCIÓN"
        ) {
          return -1;
        } else if (
          a.PSeguimiento !== "PI-INSCRIPCIÓN" &&
          b.PSeguimiento === "PI-INSCRIPCIÓN"
        ) {
          return 1;
        }

        if (
          a.PSeguimiento === "PS-SEGUIMIENTO" &&
          b.PSeguimiento !== "PS-SEGUIMIENTO"
        ) {
          return -1;
        } else if (
          a.PSeguimiento !== "PS-SEGUIMIENTO" &&
          b.PSeguimiento === "PS-SEGUIMIENTO"
        ) {
          return 1;
        }

        return 0;
      });
    },

    // Nuevo método para generar el segundo reporte
    async generarReportePromotores() {
      try {
        const response = await axios.post(
          "http://localhost:4000/reportes/reporte-ps-pi-promotores",
          {
            ciclo: this.cicloPromotores,
            fechaInicio: this.fechaInicioPromotores,
            fechaFin: this.fechaFinPromotores,
          }
        );

        if (
          this.cicloPromotores === "" ||
          this.fechaInicioPromotores === "" ||
          this.fechaFinPromotores === ""
          || response.data.reporte.length === 0
        ) {
          this.infoNotify();
         
          return;
        } else {
          this.reportePromotores = response.data.reportePromotores;
          this.notify();
        }
      } catch (error) {
        this.infoNotify();
        console.log(this.reportePromotores.length)
          console.log(this.cicloPromotores)
          console.log(this.fechaInicioPromotores)
          console.log(this.fechaFinPromotores)
      }
    },
  },

  computed: {
    totalPI() {
      return this.reporte.reduce(
        (acc, item) =>
          item.PSeguimiento === "PI-INSCRIPCIÓN" ? acc + item.total : acc,
        0
      );
    },
    totalPS() {
      return this.reporte.reduce(
        (acc, item) =>
          item.PSeguimiento === "PS-SEGUIMIENTO" ? acc + item.total : acc,
        0
      );
    },

    PromTotalPI() {
      return this.reportePromotores.reduce(
        (acc, item) => acc + (item.PI ? 1 : 0),
        0
      );
    },
    PromTotalINS_PI() {
      return this.reportePromotores.reduce(
        (acc, item) => acc + (item.INS_PI ? item.INS_PI : 0),
        0
      );
    },
    PromTotalPS() {
      return this.reportePromotores.reduce(
        (acc, item) => acc + (item.PS ? item.PS : 0),
        0
      );
    },
    PromTotalINS_PS() {
      return this.reportePromotores.reduce(
        (acc, item) => acc + (item.INS_PS ? item.INS_PS : 0),
        0
      );
    },
    PromTotalINS_OTRO_STATUS() {
      return this.reportePromotores.reduce(
        (acc, item) => acc + (item.INS_OTRO_STATUS ? item.INS_OTRO_STATUS : 0),
        0
      );
    },
    PromTotalTOTAL_INS() {
      return this.reportePromotores.reduce(
        (acc, item) => acc + (item.TOTAL_INS ? item.TOTAL_INS : 0),
        0
      );
    },
  },
};
</script>
