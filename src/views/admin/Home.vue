<template>
    <div class="flex-1">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
            <div class="lg:ml-64 p-4">
            <i class="fa-solid fa-home fa-xl" style="color: #48c9b0"></i>
            <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Home</span>
        </div>
            <search /> <!-- Importa y utiliza el componente serch -->
            <sideBarADM /> <!-- Importa y utiliza el componente SidebarADM -->
            <!-- Otro contenido de tu vista -->
            <div class="p-5 lg:ml-64 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-grey">Inicio</h5>
        </div>
            <div class="p-5 lg:ml-64 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" style="margin-top: 3%;"> <!-- Modificado: Utilizando grid para distribuir tarjetas -->
                <a href="promotor-list"
                    class="block max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center"
                    style="background-color: #48c9b0;"> <!-- Cambia el valor hexadecimal aquí -->
                    <i class="fas fa-circle-user text-7xl" style="color: white"></i>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Promotores</h5>
                </a>

                <a href="#"
                    class="block max-w-sm p-6 bg-green-300 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center"
                    style="background-color: #48c9b0;">
                    <i class="fas fa-gauge-simple-high text-7xl" style="color: white"></i>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dashboard</h5>
                </a>

                <a href="#"
                    class="block max-w-sm p-6 bg-yellow-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center"
                    style="background-color: #48c9b0;">
                    <i class="fas fa-arrow-trend-up text-7xl" style="color: white"></i>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Indicadores</h5>
                </a>
            </div>
        </div>
    </div>
</template>


<script>

import sideBarADM from '../../components/SideBarADM.vue'; 
import search from '../../components/Search.vue';


import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { getUserName } from "../../sessions";

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
});

export default {
    components: {
        sideBarADM,
        search
    },
    data() {
        return {
            userName: getUserName()
        }
    }
}

</script>
 
<style>
.image-container {
    background-image: url(/uninterlogo.png);
    background-position: center;
    background-size: cover;
    height: 16em;
    width: 16em;
}
</style>