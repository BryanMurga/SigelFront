<template>
  <DashboardLayout name="Reporte Ps-Pi">
    <header>
      <div class="lg:ml-64 p-4">
        <i class="fas fa-bars-progress text-2xl" style="color: #48c9b0"></i>
        <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Reporte Ps-Pi</span>
      </div>
    </header>

    <section>
      <div class="flex-1 lg:ml-64">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <h2 class="text-2xl font-semibold mb-4">Reporte Ps-Pi</h2>

          <!-- Formulario para ingresar fechas y botón para generar el reporte -->
        <!-- Formulario para ingresar fechas y ciclo, y botón para generar el reporte -->
<div class="mb-4 flex items-center">
  <div class="mr-4">
    <label for="fechaInicio" class="mr-2 text-sm font-medium">Fecha de Inicio:</label>
    <input type="date" v-model="fechaInicio" id="fechaInicio" class="border p-2 rounded-md focus:outline-none focus:ring focus:border-sky-600">
  </div>

  <div class="mr-4">
    <label for="fechaFin" class="mr-2 text-sm font-medium">Fecha de Fin:</label>
    <input type="date" v-model="fechaFin" id="fechaFin" class="border p-2 rounded-md focus:outline-none focus:ring focus:border-sky-600">
  </div>


  <div>
    <button @click="generarReporte" class="py-2 px-4 bg-sky-600 hover:bg-sky-700 rounded-md text-white text-sm duration-150">
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
                  <th class="py-2 px-4 bg-sky-600 text-white text-sm duration-150">Grado</th>
                  <th class="py-2 px-4 bg-sky-600 text-white text-sm duration-150">Programa</th>
                  <th class="py-2 px-4 bg-sky-600 text-white text-sm duration-150">Ciclo</th>
                  <th class="py-2 px-4 bg-sky-600 text-white text-sm duration-150">PSeguimiento</th>
                  <th class="py-2 px-4 bg-sky-600 text-white text-sm duration-150">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in reporte" :key="item.Grado + item.Programa + item.PSeguimiento">
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
                <p class="text-sm font-semibold">Total de "PI-INSCRIPCIÓN": {{ totalPI }}</p>
                <p class="text-sm font-semibold">Total de "PS-SEGUIMIENTO": {{ totalPS }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DashboardLayout>
</template>

  
  
  <script>
  import DashboardLayout from '../../layouts/DashboardLayout.vue';
  import axios from 'axios';
  import { onMounted } from 'vue';
  import { initFlowbite } from 'flowbite';
  import { getUserName } from '../../sessions';
  
  onMounted(() => {
    initFlowbite();
  });
  
  export default {
    components: {
      DashboardLayout
    },
    data() {
      return {
        userName: getUserName(),
        fechaInicio: "",
        fechaFin: "",
        reporte: [],
        ciclo : '',
      leadsFiltrados: [],
      };
    },
    methods: {
      generarReporte() {
        axios.post("http://localhost:4000/reportes/reporte-ps-pi", {
          fechaInicio: this.fechaInicio,
          fechaFin: this.fechaFin,
          
        })
        .then(response => {
          this.reporte = response.data.reporte;
          this.ordenarReporte();
        })
        .catch(error => {
          console.error('Error al generar el reporte de Leads:', error);
          alert('Error al generar el reporte de Leads.');
        });
      },

      ordenarReporte() {
      this.reporte.sort((a, b) => {
        // Primero, ordena por "PI-INSCRIPCIÓN"
        if (a.PSeguimiento === 'PI-INSCRIPCIÓN' && b.PSeguimiento !== 'PI-INSCRIPCIÓN') {
          return -1;
        } else if (a.PSeguimiento !== 'PI-INSCRIPCIÓN' && b.PSeguimiento === 'PI-INSCRIPCIÓN') {
          return 1;
        }

        // Si ambos tienen el mismo PSeguimiento o ninguno es "PI-INSCRIPCIÓN", ordena por "PS-SEGUIMIENTO"
        if (a.PSeguimiento === 'PS-SEGUIMIENTO' && b.PSeguimiento !== 'PS-SEGUIMIENTO') {
          return -1;
        } else if (a.PSeguimiento !== 'PS-SEGUIMIENTO' && b.PSeguimiento === 'PS-SEGUIMIENTO') {
          return 1;
        }

        // Si ambos tienen el mismo PSeguimiento o ninguno es "PS-SEGUIMIENTO", no se cambia el orden
        return 0;
      });
    },
    


    },

    computed: {
    totalPI() {
      return this.reporte.reduce((acc, item) => (item.PSeguimiento === 'PI-INSCRIPCIÓN' ? acc + item.total : acc), 0);
    },
    totalPS() {
      return this.reporte.reduce((acc, item) => (item.PSeguimiento === 'PS-SEGUIMIENTO' ? acc + item.total : acc), 0);
    },
  },
  };
  </script>
  
  <style>
  /* Puedes agregar estilos adicionales según sea necesario */
  </style>
  