<template>
  <div>
    <SideBarProm class="lg:w-64 md:w-48 sm:w-32" />
    <div class="lg:ml-64 p-4">
      <i class="fa-solid fa-chart-line text-2xl" style="color: #48c9b0"></i>
      <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg"
        >Dashboard</span
      >
      <br /><br />

      <!-- Nueva sección para el dashboard del usuario -->
      <!-- Ejemplo para Total de Donde se Obtiene el Dato -->
      <div
        v-if="totalDondeObtDatoData && totalDondeObtDatoData.length"
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
              Total Donde se Obtiene el Dato
            </p>
            <h2
              class="mb-2 text-lg font-medium text-gray-400 dark:text-gray-100"
            >
              Total de Inscripciones
              {{
                totalDondeObtDatoData.reduce((acc, item) => acc + (item.total || 0), 0)
              }}
            </h2>
          </div>
        </div>
        <!-- Gráfico -->
        <div id="totalDondeObtDato-chart"></div>
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
      totalDondeObtDatoData: [],
    };
  },
  methods: {
    renderBarChart() {
      if (this.totalDondeObtDatoData && this.totalDondeObtDatoData.length) {
        const dataForChart = this.totalDondeObtDatoData.map((item) => ({
          ...item,
          total: item.total || 0,
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
          series: [
            {
              name: "Total de inscripciones",
              data: dataForChart.map((item) => item.total),
            },
          ],
          xaxis: {
            categories: dataForChart.map((item) => `${item.NombrePromotorAct}`),
          },
        };

        // Renderizar la gráfica solo si el elemento del gráfico está presente
        const chartElement = document.getElementById("totalDondeObtDato-chart");
        if (chartElement) {
          const chartDondeObtDato = new ApexCharts(chartElement, options);
          chartDondeObtDato.render();
        } else {
          console.error("El elemento del gráfico no se encontró.");
        }
      } else {
        console.error("El array totalDondeObtDatoData está indefinido o vacío");
      }

      // Mover la llamada a console.log aquí después de renderizar la gráfica
      this.$nextTick(() => {
        console.log(document.getElementById("totalDondeObtDato-chart"));
      });
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

        this.totalDondeObtDatoData =
          response.data.data.totalDondeObtDato || [];
          console.log(this.totalDondeObtDatoData);

        // Renderizar la gráfica después de cargar los datos
        this.renderBarChart();
      } catch (error) {
        console.error("Error al obtener datos del dashboard:", error);
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

