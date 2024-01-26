<template>
  <div>
    <SideBarProm class="lg:w-64 md:w-48 sm:w-32" />
    <div class="lg:ml-64 p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
      

        <!-- Inscripciones Por Edad -->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mb-4"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-calendar-alt fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Inscripciones Por Edad
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
          <!-- Gráfico -->
          <div id="inscripcionesPorEdad-chart"></div>
        </div>

        <!-- Inscripciones por Estatus -->
        <div
          class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mb-4"
        >
          <div class="flex items-center">
            <div
              class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
            >
              <i class="fa-solid fa-info fa-2x"></i>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900 dark:text-gray-400">
                Estatus de los Leads
              </p>
              <h2
                class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
              >
                Total de inscripciones:
                {{
                  inscripcionesPorStatusData.reduce(
                    (acc, item) => acc + item.total,
                    0
                  )
                }}
              </h2>
            </div>
          </div>
          <!-- Gráfico -->
          <div id="inscripcionesPorStatus-chart"></div>
        </div>

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
        <!-- Agrega más secciones según tus necesidades -->
      

      </div>
    </div>
  </div>
</template>

<script>
import ApexCharts from "apexcharts";
import SideBarProm from "../../components/SideBarProm.vue";
import axios from "axios";
import { getUserName } from "../../sessions";

export default {
  data() {
    return {
      userName: getUserName(),
      // inscripcionesPorPromotorData: [],
      inscripcionesPorEdadData: [],
      inscripcionesPorStatusData: [],
      totalPorGradoData: [],
      totalPorBecaData: [],
      totalInscripcionesPorAnioData: [],
      totalInscripcionesPorMesData: [],


      // Agrega más variables según las gráficas que necesites
    };
  },
  methods: {

    renderBarChart(chartId, data) {
      if (data && data.length) {
        const dataForChart = data.map((item) => ({
          x: item.Nombre || item.Edad || "Sin especificar",
          y: item.total || 0,
        }));

        const options = {
          chart: {
            type: "bar",
            height: 320,
            fontFamily: "Inter, sans-serif",
            toolbar: {
              show: true,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          xaxis: {
            categories: dataForChart.map((item) => item.x),
          },
          series: [
            {
              name: "Total",
              data: dataForChart.map((item) => item.y),
            },
          ],
        };

        // Renderizar la gráfica solo si el elemento del gráfico está presente
        const chartElement = document.getElementById(chartId);
        if (chartElement) {
          const chart = new ApexCharts(chartElement, options);
          chart.render();
        } else {
          console.error("El elemento del gráfico no se encontró.");
        }
      } else {
        console.error("El array de datos está indefinido o vacío");
      }
    },

    renderPieChartInscripcionesPorStatus() {
      const optionsStatus = {
        // Configuración específica del gráfico para Inscripciones Por Estatus
        chart: {
          type: "pie",
          height: 320,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: true,
          },
          // Otras opciones del gráfico...
        },
        series: this.inscripcionesPorStatusData.map((item) => item.total),
        labels: this.inscripcionesPorStatusData.map(
          (item) => item.EstatusInsc || "Desconocido"
        ),
        colors: ["#008FFB", "#00E396", "#feb019", "#FF4560"],
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          verticalAlign: "middle",
          fontSize: "14px",
          formatter: function (val, opts) {
            return val + " : " + opts.w.globals.series[opts.seriesIndex];
          },

          // Otras opciones de leyenda...
        },
        dataLabels: {
          enabled: true,
          // Otras opciones de etiquetas de datos...

        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };

      // Renderizar la gráfica solo si el elemento del gráfico está presente
      const chartElement = document.getElementById(
        "inscripcionesPorStatus-chart"
      );
      if (chartElement) {
        const chartStatus = new ApexCharts(chartElement, optionsStatus);
        chartStatus.render();
      } else {
        console.error("El elemento del gráfico no se encontró.");
      }
    },

    renderTotalPorGradoChart() {
      if (this.totalPorGradoData && this.totalPorGradoData.length) {
        const dataForChart = this.totalPorGradoData.map((item) => ({
          x: item.Grado || "Desconocido",
          y: item.total || 0,
        }));

        const options = {
          chart: {
            type: "bar",
            height: 320,
            fontFamily: "Inter, sans-serif",
            toolbar: {
              show: true,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          xaxis: {
            categories: dataForChart.map((item) => item.x),
          },
          series: [
            {
              name: "Total de inscripciones",
              data: dataForChart.map((item) => item.y),
            },
          ],
        };

        const chartElement = document.getElementById("totalPorGrado-chart");
        if (chartElement) {
          const chartTotalPorGrado = new ApexCharts(chartElement, options);
          chartTotalPorGrado.render();
        } else {
          console.error("El elemento del gráfico no se encontró.");
        }
      } else {
        console.error("El array totalPorGradoData está indefinido o vacío");
      }
    },

    renderTotalPorBecaChart() {
      if (this.totalPorBecaData && this.totalPorBecaData.length) {
        const dataForChart = this.totalPorBecaData.map((item) => ({
          x: item.BecaOfrecida || "Desconocido",
          y: item.total || 0,
        }));

        const options = {
          chart: {
            type: "donut",
            height: 320,
            fontFamily: "Inter, sans-serif",
            toolbar: {
              show: true,
            },
          },
          labels: dataForChart.map((item) => item.x),
          series: dataForChart.map((item) => item.y),
          colors: ["#008FFB", "#00E396", "#feb019", "#FF4560"],
          legend: {
            show: true,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            fontSize: "14px",
          },
          dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
              return opts.w.globals.series[opts.seriesIndex];
            },
            style: {
              fontSize: "16px",
              colors: ["#ffffff"],
            },
          },
        };

        const chartElement = document.getElementById("totalPorBeca-chart");
        if (chartElement) {
          const chartTotalPorBeca = new ApexCharts(chartElement, options);
          chartTotalPorBeca.render();
        } else {
          console.error("El elemento del gráfico no se encontró.");
        }
      } else {
        console.error("El array totalPorBecaData está indefinido o vacío");
      }
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

        this.totalPorGradoData = response.data.data.totalPorGrado || [];

        this.totalPorBecaData = response.data.data.totalPorBeca || [];


        // Agrega más asignaciones según las gráficas que necesites
       

        // Llama a tus funciones de renderización aquí
        if (this.totalInscripcionesPorAnioData.length > 0) {
          this.renderTotalInscripcionesPorAnioChart();
        }

        if (this.totalInscripcionesPorMesData.length > 0) {
          this.renderTotalInscripcionesPorMesChart();
        }


        // Renderizar las gráficas después de cargar los datos
        this.renderBarChart(
          "inscripcionesPorPromotor-chart",
          this.inscripcionesPorPromotorData
        );
        this.renderBarChart(
          "inscripcionesPorEdad-chart",
          this.inscripcionesPorEdadData
        );
        
        this.renderPieChartInscripcionesPorStatus();

        this.renderTotalPorGradoChart();
        this.renderTotalPorBecaChart();

       
        // Agrega más renderizaciones según las gráficas que necesites
      } catch (error) {
        console.error("Error al obtener datos del backend:", error);
      }
    },
  },
  mounted() {
    // Llamar al método para obtener datos del dashboard al montar el componente
    this.fetchData();
  },
  components: {
    SideBarProm,
  },
};
</script>
