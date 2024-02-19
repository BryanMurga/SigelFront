<template>
  <DashboardLayout name="Dash" >
  <div>
    <div class="lg:ml-64 p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
        <!-- Sección de inscripciones por Grado del promotor -->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-chart-line fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Inscripciones por Promotor
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de Inscripciones
                {{
                  inscripcionesPorPromData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="inscripcionesPorProm-chart"></div>
        </div>

        <!-- Sección de PS-PI del promotor -->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-square-poll-vertical"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                PS-Seguimiento
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de datos PS-PI:
                {{
                  pseguimientoPromData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="pseguimientoPromData-chart"></div>
        </div>

        <!--Total por ciclo -->

        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-arrows-spin"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total de Inscripciones por Ciclo
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de datos Por ciclo:
                {{
                  pseguimientoPromData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorCiclo-chart"></div>
        </div>

        <!-- Total Por pais-->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-earth-americas fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total de Inscripciones por País
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de datos Por País:
                {{
                  totalPorPaisPromData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorPais-chart"></div>
        </div>

        <!-- Total Por Estado-->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-earth-americas fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total por Estados
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de datos Por Estado:
                {{
                  totalPorEstadoPromData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorEstadoProm-chart"></div>
        </div>

        <!-- Total Por Ciudad-->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-earth-americas fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total por Ciudad
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de datos Por Ciudad:
                {{
                  totalPorCiudadPromData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorCiudad-chart"></div>
        </div>

        <!-- Total Por Año y Mes-->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-calendar-days fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total de Inscripciones por Mes y Año
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de datos:
                {{
                  totalPorMesAnioPromData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorMesAnio-chart"></div>
        </div>

        <!-- Total Por Escuela de procedencia-->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-school"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total por Escuela de procedencia
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de datos:
                {{
                  totalPorMesAnioPromData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorEscProd-chart"></div>
        </div>

        <!-- Total por Edades -->

        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-child-reaching"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total por Edad
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de datos:
                {{
                  totalPorEdadesPromData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorEdades-chart"></div>
        </div>

        <!-- Total por Beca -->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-money-bill"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total por Beca Ofertada
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de datos:
                {{
                  totalPorBecaPromData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorBeca-chart"></div>
        </div>

        <!-- Total por Referido -->

        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-arrows-down-to-people"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total por Referido
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de datos:
                {{
                  totalPorReferidoPromData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorReferido-chart"></div>
        </div>

        <!-- Total por Medio de Contacto -->

        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-address-book"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total por Medio de Contacto
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de datos:
                {{
                  totalPorMedioContactoPromData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorMedioContacto-chart"></div>
        </div>

        <!-- Agrega más secciones según tus necesidades -->
      </div>
    </div>
  </div>
  
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "../../layouts/DashboardLayout.vue";
import CardLink from "../../components/CardLink.vue";
import ApexCharts from "apexcharts";
import axios from "axios";
// import SideBarProm from "../../components/SideBarADM.vue";
import { getUserName } from "../../sessions";

export default {
  data() {
    return {
      userName: getUserName(),
      inscripcionesPorPromData: [],
      pseguimientoPromData: [],
      totalPorCicloPromData: [],
      totalPorPaisPromData: [],
      totalPorEstadoPromData: [],
      totalPorCiudadPromData: [],
      totalPorMesAnioPromData: [],
      totalPorEscProdPromData: [],
      totalPorEdadesPromData: [],
      totalPorBecaPromData: [],
      totalPorReferidoPromData: [],
      totalPorMedioContactoPromData: [],
    };
  },

  methods: {
    getNombreMes(numeroMes) {
      const nombresMeses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
      return nombresMeses[numeroMes - 1] || "Sin especificar";
    },

    renderBarChart() {
      const optionsinscripcionesProm = {
        chart: {
          type: "bar",
          height: 320,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: true,
          },
        },
        series: [
          {
            name: "Total de inscripciones",
            data: this.inscripcionesPorPromData.map((item) => item.total),
          },
        ],
        xaxis: {
          categories: this.inscripcionesPorPromData.map(
            (item) => `${item.Grado}`
          ),
        },
      };
      const chartoptionsinscripcionesProm = new ApexCharts(
        document.getElementById("inscripcionesPorProm-chart"),
        optionsinscripcionesProm
      );
      chartoptionsinscripcionesProm.render();

      const optionPseguimientoProm = {
        chart: {
          type: "bar",
          height: 320,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: true,
          },
        },
        series: [
          {
            name: "Total de PS-PI",
            data: this.pseguimientoPromData.map((item) => item.total),
          },
        ],
        xaxis: {
          categories: this.pseguimientoPromData.map(
            (item) => `${item.PSeguimiento}`
          ),
        },
        colors: ["#008FFB", "#FF4560", "#feb019", "#00E396", "#1a8cff", "#FFD700", "#8B008B", "#4CAF50", "#FF6347", "#808080", "#CD853F", "#FF8C00", "#000000"],

      };
      const chartPseguimientoProm = new ApexCharts(
        document.getElementById("pseguimientoPromData-chart"),
        optionPseguimientoProm
      );
      chartPseguimientoProm.render();

      const optionCiclo = {
        chart: {
          type: "line",
          height: 320,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: true,
          },
        },
        series: [
          {
            name: "Total de Inscripciones Por Ciclo",
            data: this.totalPorCicloPromData.map((item) => item.total),
          },
        ],
        xaxis: {
          categories: this.totalPorCicloPromData.map((item) => `${item.Ciclo}`),
        },
        plotoptions: {
          bar: {
            horizontal: true,
          },
        },
      };
      const chartCiclo = new ApexCharts(
        document.getElementById("totalPorCiclo-chart"),
        optionCiclo
      );
      chartCiclo.render();

      const optionPais = {
        chart: {
          type: "bar",
          height: 320,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: true,
          },
        },

        series: [
          {
            name: "Total de Inscripciones Por País",
            data: this.totalPorPaisPromData.map((item) => item.total),
          },
        ],

        xaxis: {
          categories: this.totalPorPaisPromData.map(
            (item) => `${item.NombrePais}`
          ),
        },

        plotoptions: {
          bar: {
            horizontal: true,
            columnWidth: "70%",
          },
        },
      };

      const chartPais = new ApexCharts(
        document.getElementById("totalPorPais-chart"),
        optionPais
      );
      chartPais.render();

      const optionEstado = {
        chart: {
          type: "area",
          height: 320,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: true,
          },
        },

        series: [
          {
            name: "Total de Inscripciones Por Estado",
            data: this.totalPorEstadoPromData.map((item) => item.total),
          },
        ],

        xaxis: {
          categories: this.totalPorEstadoPromData.map(
            (item) => `${item.NombreEstado}`
          ),
        },

        plotoptions: {
          bar: {
            horizontal: true,
            columnWidth: "70%",
          },
        },
      };

      const chartEstado = new ApexCharts(
        document.getElementById("totalPorEstadoProm-chart"),
        optionEstado
      );
      chartEstado.render();

      const optionCiudad = {
        chart: {
          type: "area",
          height: 320,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: true,
          },
        },

        series: [
          {
            name: "Total de Inscripciones Por Ciudad",
            data: this.totalPorCiudadPromData.map((item) => item.total),
          },
        ],

        xaxis: {
          categories: this.totalPorCiudadPromData.map(
            (item) => `${item.NombreCiudad}`
          ),
        },

        plotoptions: {
          bar: {
            horizontal: true,
            columnWidth: "70%",
          },
        },
      };

      const chartCiudad = new ApexCharts(
        document.getElementById("totalPorCiudad-chart"),
        optionCiudad
      );
      chartCiudad.render();

      const optionMesAnio = {
        chart: {
          type: "area",
          height: 320,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: true,
          },
        },

        series: [
          {
            name: "Total de Inscripciones Por Mes y Año",
            data: this.totalPorMesAnioPromData.map((item) => item.total),
          },
        ],

        xaxis: {
          categories: this.totalPorMesAnioPromData.map(
            (item) =>
              `${item.anio || "Sin especificar"} - ${
                item.nombreMes || "Sin especificar"
              }`
          ),
        },

        plotoptions: {
          bar: {
            horizontal: true,
            columnWidth: "70%",
          },
        },
      };
      const chartMesAnio = new ApexCharts(
        document.getElementById("totalPorMesAnio-chart"),
        optionMesAnio
      );
      chartMesAnio.render();

      const optionEscuelaProd = {
        chart: {
          type: "bar",
          height: 320,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: true,
          },
        },

        series: [
          {
            name: "Total de Inscripciones Por Escuela de Procedencia",
            data: this.totalPorEscProdPromData.map((item) => item.total),
          },
        ],

        xaxis: {
          categories: this.totalPorEscProdPromData.map(
            (item) => `${item.EscuelaProcedencia || "Sin especificar"}`
          ),
        },

        plotoptions: {
          bar: {
            horizontal: true,
            columnWidth: "70%",
          },
        },
        colors: ["#1a8cff"],
      };
      const chartEscuelaProd = new ApexCharts(
        document.getElementById("totalPorEscProd-chart"),
        optionEscuelaProd
      );
      chartEscuelaProd.render();

      const optionEdades = {
        chart: {
          type: "line",
          height: 320,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: true,
          },
        },

        series: [
          {
            name: "Total de Inscripciones Por Edades",
            data: this.totalPorEdadesPromData.map((item) => item.total),
          },
        ],

        xaxis: {
          categories: this.totalPorEdadesPromData.map(
            (item) => `${item.Edad || "Sin especificar"}`
          ),
        },

        plotoptions: {
          bar: {
            horizontal: true,
            columnWidth: "70%",
          },
        },
        colors: ["#1a8cff"],
      };

      const chartEdades = new ApexCharts(
        document.getElementById("totalPorEdades-chart"),
        optionEdades
      );
      chartEdades.render();

      const optionBeca = {
        chart: {
          type: "bar",
          height: 320,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: true,
          },
        },
        series: [
          {
            name: "Total de Inscripciones Por Beca",
            data: this.totalPorBecaPromData.map((item) => item.total),
          },
        ],

        xaxis: {
          categories: this.totalPorBecaPromData.map(
            (item) => `${item.BecaOfrecida || "Sin especificar"}`
          ),
        },

        plotoptions: {
          bar: {
            horizontal: true,
            columnWidth: "70%",
          },
        },
        colors: ["#1a8cff"],
      };
      const chartBeca = new ApexCharts(
        document.getElementById("totalPorBeca-chart"),
        optionBeca
      );
      chartBeca.render();

      const optionReferido = {
        chart: {
          type: "area",
          height: 320,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: true,
          },
        },
        series: [
          {
            name: "Total de Inscripciones Por Referido",
            data: this.totalPorReferidoPromData.map((item) => item.total),
          },
        ],

        xaxis: {
          categories: this.totalPorReferidoPromData.map(
            (item) => `${item.TipoReferido || "Sin especificar"}` //\n${item.NombreReferido || "Sin especificar"}
          ),
        },

        plotoptions: {
          bar: {
            horizontal: true,
            columnWidth: "70%",
          },
        },
        colors: ["#1a8cff"],
      };
      const chartReferido = new ApexCharts(
        document.getElementById("totalPorReferido-chart"),
        optionReferido
      );
      chartReferido.render();

      const optionMedioContacto = {
        chart: {
          type: "line",
          height: 320,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: true,
          },
        },
        series: [
          {
            name: "Total de Inscripciones Por Medio de Contacto",
            data: this.totalPorMedioContactoPromData.map((item) => item.total),
          },
        ],

        xaxis: {
          categories: this.totalPorMedioContactoPromData.map(
            (item) => `${item.MedioContacto || "Sin especificar"}`
          ),
        },

        plotoptions: {
          bar: {
            horizontal: true,
            columnWidth: "70%",
          },
        },
        colors: ["#1a8cff"],
      };
      const chartMedioContacto = new ApexCharts(
        document.getElementById("totalPorMedioContacto-chart"),
        optionMedioContacto
      );
      chartMedioContacto.render();
    },

    async fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:4000/graficas/dash-prom",
          {
            params: {
              userName: this.userName,
            },
          }
        );
        this.inscripcionesPorPromData =
          response.data.data.inscripcionesPorProm || [];

        this.pseguimientoPromData = response.data.data.pseguimientoProm || [];

        this.totalPorCicloPromData = response.data.data.totalPorCicloProm || [];

        this.totalPorPaisPromData = response.data.data.totalPorPaisProm || [];

        this.totalPorEstadoPromData =
          response.data.data.totalPorEstadoProm || [];

        this.totalPorCiudadPromData =
          response.data.data.totalPorCiudadProm || [];

        this.totalPorMesAnioPromData =
          response.data.data.totalPorMesAnioProm.map((item) => ({
            ...item,
            nombreMes: this.getNombreMes(item.mes),
          })) || [];

        this.totalPorEscProdPromData =
          response.data.data.totalPorEscProdProm || [];

        this.totalPorEdadesPromData =
          response.data.data.totalPorEdadesProm || [];

        this.totalPorBecaPromData = response.data.data.totalPorBecaProm || [];

        this.totalPorReferidoPromData =
          response.data.data.totalPorReferidoProm || [];

        this.totalPorMedioContactoPromData =
          response.data.data.totalPorMedioContactoProm || [];

        this.renderBarChart();
      } catch (error) {
        console.error("Error al obtener datos del backend:", error);
      }
    },
  },

  mounted() {
    this.fetchData();
  },
  components: {
    DashboardLayout,
    CardLink,
  },
};
</script>
