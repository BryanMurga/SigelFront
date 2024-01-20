<template>
  <div>
    <SideBarADM class="lg:w-64 md:w-48 sm:w-32" />
    <div class="lg:ml-64 p-4">
      <i class="fa-solid fa-chart-line text-2xl" style="color: #48c9b0"></i>
      <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg"
        >Dashboard</span
      >
      <br /><br />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-users fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total de inscripciones por Promotor
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de Inscripciones
                {{
                  inscripcionesPorPromotorData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="inscripcionesPorPromotor-chart"></div>
        </div>

        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-user fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total de inscripciones por Edad
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de Inscripciones
                {{
                  inscripcionesPorEdadData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="inscripcionesPorEdad-chart"></div>
        </div>

        <!-- Dentro del div con clase "grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center" -->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-info fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Inscripciones por Estatus
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de Inscripciones
                {{
                  inscripcionesPorStatusData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="inscripcionesPorStatus-chart"></div>
        </div>

        <!-- Dentro del div con clase "grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center" -->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-graduation-cap fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total por Grado
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de Inscripciones
                {{
                  totalPorGradoData.reduce((acc, item) => acc + item.total, 0)
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorGrado-chart"></div>
        </div>

        <!-- Dentro del div con clase "grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center" -->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-money-bill-wave fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total por Beca
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de Inscripciones
                {{
                  totalPorBecaData.reduce((acc, item) => acc + item.total, 0)
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorBeca-chart"></div>
        </div>

        <!-- Dentro del div con clase "grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center" -->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-globe fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total por País
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de Inscripciones
                {{
                  totalPorPaisData.reduce((acc, item) => acc + item.total, 0)
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorPais-chart"></div>
        </div>

        <!-- Dentro del div con clase "grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center" -->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-map-marked fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total por Estado
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de Inscripciones
                {{
                  totalPorEstadoData.reduce((acc, item) => acc + item.total, 0)
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorEstado-chart"></div>
        </div>

        <!-- Dentro del div con clase "grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center" -->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-map-marker-alt fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total por Municipio
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de Inscripciones
                {{
                  totalPorMunicipioData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorMunicipio-chart"></div>
        </div>

        <!-- Dentro del div con clase "grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center" -->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-calendar-alt fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total por Ciclo
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de Inscripciones
                {{
                  totalPorCicloData.reduce((acc, item) => acc + item.total, 0)
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorCiclo-chart"></div>
        </div>

        <!-- Dentro del div con clase "grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center" -->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-book-open fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total por Programa
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de Inscripciones
                {{
                  totalPorProgramaData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorPrograma-chart"></div>
        </div>

        <!-- Dentro del div con clase "grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center" -->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-calendar-alt fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total por Semestre
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de Inscripciones
                {{
                  totalPorSemestreData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorSemestre-chart"></div>
        </div>

        <!-- Dentro del div con clase "grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center" -->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-handshake fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total por Referido
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de Inscripciones
                {{
                  totalPorReferidoData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorReferido-chart"></div>
        </div>

        <!-- Dentro del div con clase "grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center" -->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-school fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total por Escuela
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de Inscripciones
                {{
                  totalPorEscuelaData.reduce((acc, item) => acc + item.total, 0)
                }}
              </h2>
            </div>
          </div>
          <div id="totalPorEscuela-chart"></div>
        </div>

        <!-- Dentro del div con clase "grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center" -->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-calendar fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total de Inscripciones por Año
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de Inscripciones
                {{
                  totalInscripcionesPorAnioData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="totalInscripcionesPorAnio-chart"></div>
        </div>

        <!-- Dentro del div con clase "grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center" -->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-calendar fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Total de Inscripciones por Mes
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de Inscripciones
                {{
                  totalInscripcionesPorMesData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <div id="totalInscripcionesPorMes-chart"></div>
        </div>

   <!-- Dentro del div con clase "grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center" -->
<div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
  <div class="flex items-center">
    <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
      <i class="fa-solid fa-chart-line fa-2x"></i>
    </div>
    <div class="ml-4">
      <p class="text-base font-medium text-gray-900 dark:text-gray-400">Total Donde se Obtiene el Dato</p>
      <h2 class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100">Total de Inscripciones {{ totalDondeObtDatoData.reduce((acc, item) => acc + item.total, 0) }}</h2>
      
    </div>
  </div>
  <div id="totalDondeObtDato-chart"></div>
</div>




      </div>
    </div>
  </div>
</template>

<script>
import ApexCharts from "apexcharts";
import axios from "axios";
import SideBarADM from "../../components/SideBarADM.vue";

export default {
  data() {
    return {
      inscripcionesPorPromotorData: [],
      inscripcionesPorEdadData: [],
      inscripcionesPorStatusData: [],
      totalPorGradoData: [],
      totalPorBecaData: [],
      totalPorPaisData: [],
      totalPorEstadoData: [],
      totalPorMunicipioData: [],
      totalPorCicloData: [],
      totalPorProgramaData: [],
      totalPorSemestreData: [],
      totalPorReferidoData: [],
      totalPorEscuelaData: [],
      totalInscripcionesPorAnioData: [],
      totalInscripcionesPorMesData: [],
      totalDondeObtDatoData: [],
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
      const options = {
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
            data: this.inscripcionesPorPromotorData.map((item) => item.total),
          },
        ],
        xaxis: {
          categories: this.inscripcionesPorPromotorData.map(
            (item) => `${item.PromotorNombre}`
          ),
        },
      };

      const optionsEdad = {
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
            name: "Total de inscripciones",
            data: this.inscripcionesPorEdadData.map((item) => item.total),
          },
        ],
        xaxis: {
          categories: this.inscripcionesPorEdadData.map(
            (item) => `${item.Edad || "Sin especificar"}`
          ),
        },
      };

      const optionsStatus = {
        chart: {
        type: "pie",
        height: 320,
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: true,
        },
      },
      series: this.inscripcionesPorStatusData.map(item => item.total),
      labels: this.inscripcionesPorStatusData.map(item => item.EstatusInsc || "Desconocido"),
      colors: ['#008FFB', '#00E396', '#feb019', '#FF4560'],
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 0,
      },
      dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
          return opts.w.globals.series[opts.seriesIndex];
        },
        style: {
          fontSize: '16px',
          colors: ['#ffffff']
        },
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
      };

      const optionsGrado = {
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
            data: this.totalPorGradoData.map((item) => item.total),
          },
        ],
        xaxis: {
          categories: this.totalPorGradoData.map(
            (item) => `${item.Grado || "Sin especificar"}`
          ),
        },
      };

      const optionsBeca = {
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
            name: "Total de inscripciones",
            data: this.totalPorBecaData.map((item) => item.total),
          },
        ],

        
        xaxis: {
          categories: this.totalPorBecaData.map(
            (item) => `${item.BecaOfrecida || "Sin especificar"}`
          ),
        },
        markers:{
          size: 6,
          shape: 'circle',
          colors: ['#008FFB', '#00E396', '#feb019', '#FF4560'],
          strokeColors: '#fff',
          strokeWidth: 2,
          hover: {
            size: 8,
          }

        },
        dropShadow:{
          enabled: true,
          enabledOnSeries: undefined,
          top: 1,
          left: 1,
          blur: 1,
          opacity: 0.45,
        }
        
      };
      const optionsPais = {
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
            name: "Total de inscripciones",
            data: this.totalPorPaisData.map((item) => item.total),
          },
        ],
        xaxis: {
          categories: this.totalPorPaisData.map(
            (item) => `${item.NombrePais || "Sin especificar"}`
          ),
        },
      };

      const optionsEstado = {
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
            data: this.totalPorEstadoData.map((item) => item.total),
          },
        ],
        xaxis: {
          categories: this.totalPorEstadoData.map(
            (item) => `${item.NombreEstado || "Sin especificar"}`
          ),
        },
      };

      const optionsMunicipio = {
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
            data: this.totalPorMunicipioData.map((item) => item.total),
          },
        ],
        xaxis: {
          categories: this.totalPorMunicipioData.map(
            (item) => `${item.NombreCiudad || "Sin especificar"}`
          ),
        },
      };

      const optionsCiclo = {
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
            name: "Total de inscripciones",
            data: this.totalPorCicloData.map((item) => item.total),
          },
        ],
        xaxis: {
          categories: this.totalPorCicloData.map(
            (item) => `${item.Ciclo || "Sin especificar"}`
          ),
        },
      };

      const optionsPrograma = {
        chart: {
      type: "pie",
      height: 320,
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: true,
      },
    },
    series: this.totalPorProgramaData.map(item => item.total),
    labels: this.totalPorProgramaData.map(item => item.Programa || "Desconocido"),
    colors: ['#008FFB', '#00E396', '#feb019', '#FF4560'],
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      verticalAlign: 'middle',
      floating: false,
      fontSize: '14px',
      offsetX: 0,
      offsetY: 0,
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return opts.w.globals.series[opts.seriesIndex];
      },
      style: {
        fontSize: '16px',
        colors: ['#ffffff']
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
      };

      const optionsSemestre = {
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
            data: this.totalPorSemestreData.map((item) => item.total),
          },
        ],
        xaxis: {
          categories: this.totalPorSemestreData.map(
            (item) => `${item.SemestreIngreso || "Sin especificar"}`
          ),
        },
      };

      const optionsReferido = {
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
            name: "Total de inscripciones",
            data: this.totalPorReferidoData.map((item) => item.total),
          },
        ],
        xaxis: {
          categories: this.totalPorReferidoData.map(
            (item) => `${item.TipoReferido || "Sin especificar"}`
          ),
        },
      };

      const optionsEscuela = {
        chart: {
          type: "scatter",
          height: 320,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: true,
          },
        },
        series: [
          {
            name: "Total de inscripciones",
            data: this.totalPorEscuelaData.map((item) => item.total),
          },
        ],
        xaxis: {
          categories: this.totalPorEscuelaData.map(
            (item) => `${item.EscuelaProcedencia || "Sin especificar"}`
          ),
        },
      };

      const optionsAnio = {
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
            data: this.totalInscripcionesPorAnioData.map((item) => item.total),
          },
        ],
        xaxis: {
          categories: this.totalInscripcionesPorAnioData.map(
            (item) => `${item.anio || "Sin especificar"}`
          ),
        },
      };

      const optionsMes = {
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
            data: this.totalInscripcionesPorMesData.map((item) => item.total),
          },
        ],
        xaxis: {
          categories: this.totalInscripcionesPorMesData.map(
            (item) =>
              `${item.anio || "Sin especificar"} - ${
                item.nombreMes || "Sin especificar"
              }`
          ),
        },
      };

      const optionsDondeObtDato = {
    chart: {
      type: "area",
      height: 320,
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: true,
      },
    },
    series: [{
      name: 'Total de inscripciones',
      data: this.totalDondeObtDatoData.map(item => item.total),
    }],
    xaxis: {
      categories: this.totalDondeObtDatoData.map(item => `${item.DondeObtDato || 'Sin especificar'}`),
    },
  };

  const chartDondeObtDato = new ApexCharts(document.getElementById('totalDondeObtDato-chart'), optionsDondeObtDato);
  chartDondeObtDato.render();

      const chartMes = new ApexCharts(
        document.getElementById("totalInscripcionesPorMes-chart"),
        optionsMes
      );
      chartMes.render();

      const chartAnio = new ApexCharts(
        document.getElementById("totalInscripcionesPorAnio-chart"),
        optionsAnio
      );
      chartAnio.render();

      const chartEscuela = new ApexCharts(
        document.getElementById("totalPorEscuela-chart"),
        optionsEscuela
      );
      chartEscuela.render();

      const chartReferido = new ApexCharts(
        document.getElementById("totalPorReferido-chart"),
        optionsReferido
      );
      chartReferido.render();

      const chartSemestre = new ApexCharts(
        document.getElementById("totalPorSemestre-chart"),
        optionsSemestre
      );
      chartSemestre.render();

      const chartPrograma = new ApexCharts(
        document.getElementById("totalPorPrograma-chart"),
        optionsPrograma
      );
      chartPrograma.render();

      const chartCiclo = new ApexCharts(
        document.getElementById("totalPorCiclo-chart"),
        optionsCiclo
      );
      chartCiclo.render();

      const chartMunicipio = new ApexCharts(
        document.getElementById("totalPorMunicipio-chart"),
        optionsMunicipio
      );
      chartMunicipio.render();

      const chartEstado = new ApexCharts(
        document.getElementById("totalPorEstado-chart"),
        optionsEstado
      );
      chartEstado.render();

      const chartPais = new ApexCharts(
        document.getElementById("totalPorPais-chart"),
        optionsPais
      );
      chartPais.render();

      const chartBeca = new ApexCharts(
        document.getElementById("totalPorBeca-chart"),
        optionsBeca
      );
      chartBeca.render();

      const chartGrado = new ApexCharts(
        document.getElementById("totalPorGrado-chart"),
        optionsGrado
      );
      chartGrado.render();

      const chartStatus = new ApexCharts(
        document.getElementById("inscripcionesPorStatus-chart"),
        optionsStatus
      );
      chartStatus.render();

      const chartEdad = new ApexCharts(
        document.getElementById("inscripcionesPorEdad-chart"),
        optionsEdad
      );
      chartEdad.render();

      const chart = new ApexCharts(
        document.getElementById("inscripcionesPorPromotor-chart"),
        options
      );
      chart.render();
    },
    async fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:4000/graficas/datos-graficas"
        );
        this.inscripcionesPorPromotorData =
          response.data.data.inscripcionesPorPromotor || [];
        this.inscripcionesPorEdadData =
          response.data.data.inscripcionesPorEdad || [];
        this.inscripcionesPorStatusData =
          response.data.data.inscripcionesPorStatus || [];
        this.totalPorBecaData = response.data.data.totalPorBeca || [];
        this.totalPorGradoData = response.data.data.totalPorGrado || [];
        this.totalPorPaisData = response.data.data.totalPorPais || [];
        this.totalPorMunicipioData = response.data.data.totalPorMunicipio || [];
        this.totalPorCicloData = response.data.data.totalPorCiclo || [];
        this.totalPorProgramaData = response.data.data.totalPorPrograma || [];
        this.totalPorSemestreData = response.data.data.totalPorSemestre || [];
        this.totalPorReferidoData = response.data.data.totalPorReferido || [];
        this.totalPorEscuelaData = response.data.data.totalPorEscuela || [];
        this.totalInscripcionesPorAnioData =
          response.data.data.totalInscripcionesPorAnio || [];
        this.totalInscripcionesPorMesData =
          response.data.data.totalInscripcionesPorMes.map((item) => ({
            ...item,
            nombreMes: this.getNombreMes(item.mes),
          })) || [];

        this.totalPorEstadoData = response.data.data.totalPorEstado || [];

        this.totalDondeObtDatoData = response.data.data.totalDondeObtDato || [];


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
    SideBarADM,
  },
};
</script>
