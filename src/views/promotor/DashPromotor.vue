<template>
  <div>
    <SideBarProm class="lg:w-64 md:w-48 sm:w-32" />
    <div class="lg:ml-64 p-4">
      <i class="fa-solid fa-chart-line text-2xl" style="color: #48c9b0"></i>
      <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Dashboard</span>
      <br /><br />

      <!-- Inscripciones Por Promotor -->
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4 mb-4 w-full overflow-x-auto">
        <div class="flex items-center">
          <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
            <i class="fa-solid fa-user fa-2x"></i>
          </div>
          <div class="ml-4">
            <p class="text-base font-medium text-gray-900 dark:text-gray-400">
              Inscripciones Por Promotor
            </p>
            <h2 class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100">
              Total de Inscripciones
              {{ inscripcionesPorPromotorData.reduce((acc, item) => acc + item.total, 0) }}
            </h2>
          </div>
        </div>
        <!-- Gráfico -->
        <div id="inscripcionesPorPromotor-chart"></div>
      </div>

      <!-- Inscripciones Por Edad -->
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4 mb-4 w-full overflow-x-auto">
        <div class="flex items-center">
          <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
            <i class="fa-solid fa-calendar-alt fa-2x"></i>
          </div>
          <div class="ml-4">
            <p class="text-base font-medium text-gray-900 dark:text-gray-400">
              Inscripciones Por Edad
            </p>
            <h2 class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100">
              Total de Inscripciones
              {{ inscripcionesPorEdadData.reduce((acc, item) => acc + item.total, 0) }}
            </h2>
          </div>
        </div>
        <!-- Gráfico -->
        <div id="inscripcionesPorEdad-chart"></div>
      </div>

      <!-- Agrega más secciones según tus necesidades -->
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
      inscripcionesPorPromotorData: [],
      inscripcionesPorEdadData: [],
      // Agrega más variables según las gráficas que necesites
    };
  },
  methods: {
    renderBarChart(chartId, data) {
      if (data && data.length) {
        const dataForChart = data.map((item) => ({
          x: item.Nombre || item.Edad || 'Sin especificar',
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
    async fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:4000/graficas/datos-graficas"
        );

        this.inscripcionesPorPromotorData = response.data.data.inscripcionesPorPromotor || [];
        this.inscripcionesPorEdadData = response.data.data.inscripcionesPorEdad || [];
        // Agrega más asignaciones según las gráficas que necesites

        // Renderizar las gráficas después de cargar los datos
        this.renderBarChart("inscripcionesPorPromotor-chart", this.inscripcionesPorPromotorData);
        this.renderBarChart("inscripcionesPorEdad-chart", this.inscripcionesPorEdadData);
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

