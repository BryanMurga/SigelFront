<template>
  <DashboardLayout name="Dashboard">
    <section class="h-fit w-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8 md:gap-4 lg:gap-8 py-10">
      <!-- Card Inscripciones por promotor -->
      <CardStatistics 
        title="Inscripciones por Promotor" 
        total="Total de inscripciones"
      >
        <template #total_num>
          {{
            inscripcionesPorPromotorData.reduce(
              (acc, item) => acc + item.total,
              0
            )
          }}
        </template>

        <template #graphics>
          <div id="inscripcionesPorPromotor-chart"></div>
        </template>
      </CardStatistics>

      <!-- Card Inscripciones por promotor de seguimiento -->
      <CardStatistics 
        title="Inscripciones por promotor de seguimiento" 
        total="Total de inscripciones"
      >
        <template #total_num>
          {{
            totalPSeguimientoData.reduce(
              (acc, item) => acc + item.total,
              0
            )
          }}
        </template>

        <template #graphics>
          <div id="totalPSeguimiento-chart"></div>
        </template>
      </CardStatistics>

      <!-- Card Inscripciones por edad -->
      <CardStatistics 
        title="Inscripciones por edad" 
        total="Total de inscripciones"
      >
        <template #total_num>
          {{
            inscripcionesPorEdadData.reduce(
              (acc, item) => acc + item.total,
              0
            )
          }}
        </template>

        <template #graphics>
          <div id="inscripcionesPorEdad-chart"></div>
        </template>
      </CardStatistics>

      <!-- Card Inscripciones por status -->
      <CardStatistics 
        title="Inscripciones por Estatus" 
        total="Total de inscripciones"
      >
        <template #total_num>
          {{
            inscripcionesPorStatusData.reduce(
              (acc, item) => acc + item.total,
              0
            )
          }}
        </template>

        <template #graphics>
          <div id="inscripcionesPorStatus-chart"></div>
        </template>
      </CardStatistics>

      <!-- Card Inscripciones por grado -->
      <CardStatistics 
        title="Inscripciones por grado" 
        total="Total de inscripciones"
      >
        <template #total_num>
          {{
            totalPorGradoData.reduce((acc, item) => acc + item.total, 0)
          }}
        </template>

        <template #graphics>
          <div id="totalPorGrado-chart"></div>
        </template>
      </CardStatistics>

      <!-- Card Inscripciones por beca -->
      <CardStatistics 
        title="Inscripciones por beca" 
        total="Total de inscripciones"
      >
        <template #total_num>
          {{
            totalPorBecaData.reduce((acc, item) => acc + item.total, 0)
          }}
        </template>

        <template #graphics>
          <div id="totalPorBeca-chart"></div>
        </template>
      </CardStatistics>

      <!-- Card Inscripciones por país -->
      <CardStatistics 
        title="Inscripciones por país" 
        total="Total de inscripciones"
      >
        <template #total_num>
          {{
            totalPorPaisData.reduce((acc, item) => acc + item.total, 0)
          }}
        </template>

        <template #graphics>
          <div id="totalPorPais-chart"></div>
        </template>
      </CardStatistics>

      <!-- Card Inscripciones por estado -->
      <CardStatistics 
        title="Inscripciones por estado" 
        total="Total de inscripciones"
      >
        <template #total_num>
          {{
            totalPorEstadoData.reduce((acc, item) => acc + item.total, 0)
          }}
        </template>

        <template #graphics>
          <div id="totalPorEstado-chart"></div>
        </template>
      </CardStatistics>

      <!-- Card Inscripciones por estado -->
      <CardStatistics 
        title="Inscripciones por municipio" 
        total="Total de inscripciones"
      >
        <template #total_num>
          {{
            totalPorMunicipioData.reduce(
              (acc, item) => acc + item.total,
              0
            )
          }}
        </template>

        <template #graphics>
          <div id="totalPorMunicipio-chart"></div>
        </template>
      </CardStatistics>

      <!-- Card Inscripciones por ciclo -->
      <CardStatistics 
        title="Inscripciones por ciclo" 
        total="Total de inscripciones"
      >
        <template #total_num>
          {{
            totalPorCicloData.reduce((acc, item) => acc + item.total, 0)
          }}
        </template>

        <template #graphics>
          <div id="totalPorCiclo-chart"></div>
        </template>
      </CardStatistics>

      <!-- Card Inscripciones por programa -->
      <CardStatistics 
        title="Inscripciones por programa" 
        total="Total de inscripciones"
      >
        <template #total_num>
          {{
            totalPorProgramaData.reduce(
              (acc, item) => acc + item.total,
              0
            )
          }}
        </template>

        <template #graphics>
          <div id="totalPorPrograma-chart"></div>
        </template>
      </CardStatistics>

      <!-- Card Inscripciones por semestre -->
      <CardStatistics 
        title="Inscripciones por semestre" 
        total="Total de inscripciones"
      >
        <template #total_num>
          {{
            totalPorSemestreData.reduce(
              (acc, item) => acc + item.total,
              0
            )
          }}
        </template>

        <template #graphics>
          <div id="totalPorSemestre-chart"></div>
        </template>
      </CardStatistics>

      <!-- Card Inscripciones por referido -->
      <CardStatistics 
        title="Inscripciones por referido" 
        total="Total de inscripciones"
      >
        <template #total_num>
          {{
            totalPorReferidoData.reduce(
              (acc, item) => acc + item.total,
              0
            )
          }}
        </template>

        <template #graphics>
          <div id="totalPorReferido-chart"></div>
        </template>
      </CardStatistics>

      <!-- Card Inscripciones por escuela -->
      <CardStatistics 
        title="Inscripciones por escuela" 
        total="Total de inscripciones"
      >
        <template #total_num>
          {{
            totalPorEscuelaData.reduce((acc, item) => acc + item.total, 0)
          }}
        </template>

        <template #graphics>
          <div id="totalPorEscuela-chart"></div>
        </template>
      </CardStatistics>

      <!-- Card Inscripciones por año -->
      <CardStatistics 
        title="Inscripciones por año" 
        total="Total de inscripciones"
      >
        <template #total_num>
          {{
            totalInscripcionesPorAnioData.reduce(
              (acc, item) => acc + item.total,
              0
            )
          }}
        </template>

        <template #graphics>
          <div id="totalInscripcionesPorAnio-chart"></div>
        </template>
      </CardStatistics>

      <!-- Card Inscripciones por mes -->
      <CardStatistics 
        title="Inscripciones por mes" 
        total="Total de inscripciones"
      >
        <template #total_num>
          {{
            totalInscripcionesPorMesData.reduce(
              (acc, item) => acc + item.total,
              0
            )
          }}
        </template>

        <template #graphics>
          <div id="totalInscripcionesPorMes-chart"></div>
        </template>
      </CardStatistics>

      <!-- Card Inscripciones por mes -->
      <CardStatistics 
        title="Total donde se obtiene el dato" 
        total="Total de inscripciones"
      >
        <template #total_num>
          {{
            totalDondeObtDatoData.reduce(
              (acc, item) => acc + item.total,
              0
            )
          }}
        </template>

        <template #graphics>
          <div id="totalDondeObtDato-chart"></div>
        </template>
      </CardStatistics>

    </section>
  </DashboardLayout>
</template>

<script>
import ApexCharts from "apexcharts";
import axios from "axios";

import DashboardLayout from '../../layouts/DashboardLayout.vue';
import CardStatistics from '../../components/CardStatistics.vue';

export default {
  data() {
    return {
      inscripcionesPorPromotorData: [],
      totalPSeguimientoData: [],
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
      // Inscripciones por promotor
      const options = {
        chart: {
          type: "bar",
          height: 300,
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

      // Inscripciones por promotor de seguimiento
      const optionsPseguimiento = {
        chart: {
          type: "bar",
          height: 300,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: true,
          },
        },
        series: [
          {
            name: "Total de inscripciones",
            data: this.totalPSeguimientoData.map((item) => item.total),
          },
        ],
        xaxis: {
          categories: this.totalPSeguimientoData.map(
            (item) => `${item.PSeguimiento}`
          ),
        },
        responsive: [
          {
            breakpoint: 1024, // Ancho de la ventana
            options: {
              chart: {
                height: 280,
              },
            },
          },
        ],
      };

      // Inscripciones por edad
      const optionsEdad = {
        chart: {
          type: "area",
          height: 300,
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

      // Inscripciones por estatus
      const optionsStatus = {
        chart: {
          type: "pie",
          height: 320,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: true,
          },
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
          floating: false,
          fontSize: "14px",
          offsetX: 0,
          offsetY: 0,
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
        responsive: [
          {
            breakpoint: 640,
            options: {
              chart: {
                width: 320,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };

      // Inscripciones por grado
      const optionsGrado = {
        chart: {
          type: "bar",
          height: 300,
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

      // Inscripciones por beca
      const optionsBeca = {
        chart: {
          type: "area",
          height: 300,
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
        markers: {
          size: 6,
          shape: "circle",
          colors: ["#008FFB", "#00E396", "#feb019", "#FF4560"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 8,
          },
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 1,
          left: 1,
          blur: 1,
          opacity: 0.45,
        },
      };

      // Inscripciones por pais
      const optionsPais = {
        chart: {
          type: "area",
          height: 300,
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

      // Inscripciones por estado
      const optionsEstado = {
        chart: {
          type: "bar",
          height: 300,
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

      // Inscripciones por municipio
      const optionsMunicipio = {
        chart: {
          type: "bar",
          height: 300,
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

      // Inscripciones por ciclo
      const optionsCiclo = {
        chart: {
          type: "area",
          height: 300,
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

      // Inscripciones por programa
      const optionsPrograma = {
        chart: {
          type: "pie",
          height: 320,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: true,
          },
        },
        series: this.totalPorProgramaData.map((item) => item.total),
        labels: this.totalPorProgramaData.map(
          (item) => item.Programa || "Desconocido"
        ),
        colors: ["#008FFB", "#00E396", "#feb019", "#FF4560"],
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          verticalAlign: "middle",
          floating: false,
          fontSize: "14px",
          offsetX: 0,
          offsetY: 0,
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

      // Inscripciones por semestre
      const optionsSemestre = {
        chart: {
          type: "bar",
          height: 300,
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

      // Inscripciones por referido
      const optionsReferido = {
        chart: {
          type: "area",
          height: 300,
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

      // Inscripciones por escuela
      const optionsEscuela = {
        chart: {
          type: "scatter",
          height: 300,
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

      // Inscripciones por año
      const optionsAnio = {
        chart: {
          type: "bar",
          height: 300,
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

      // Inscripciones por mes
      const optionsMes = {
        chart: {
          type: "bar",
          height: 300,
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
              `${item.anio || "Sin especificar"} - ${item.nombreMes || "Sin especificar"
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
        series: [
          {
            name: "Total de inscripciones",
            data: this.totalDondeObtDatoData.map((item) => item.total),
          },
        ],
        xaxis: {
          categories: this.totalDondeObtDatoData.map(
            (item) => `${item.DondeObtDato || "Sin especificar"}`
          ),
        },
      };

      const chartDondeObtDato = new ApexCharts(
        document.getElementById("totalDondeObtDato-chart"),
        optionsDondeObtDato
      );
      chartDondeObtDato.render();

      const chartPseguimiento = new ApexCharts(
        document.getElementById("totalPSeguimiento-chart"),
        optionsPseguimiento
      );
      chartPseguimiento.render();

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

        this.totalPSeguimientoData =
          response.data.data.totalPSeguimiento || [];

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

        //checar metodo para poner meses en vez de numeros
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
    DashboardLayout, CardStatistics
  },
};
</script>
