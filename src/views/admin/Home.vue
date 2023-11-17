<template>
    <div class="flex-1">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <search /> <!-- Importa y utiliza el componente serch -->
            <sideBarADM /> <!-- Importa y utiliza el componente SidebarADM -->
            <!-- Otro contenido de tu vista -->
            <div class="flex-1 p-5  lg:ml-64 flex">

                    <a href="#"
                        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center">
                        <i class="fas fa-home" style="color: #48c9b0"></i>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Promotores</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse chronological order.</p>
                    </a>

                    <a href="#"
                        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dashboard</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse chronological order.</p>
                    </a>

                    <a href="#"
                        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Indicadores</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse chronological order.</p>
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
 
<style>.image-container {
    background-image: url(/uninterlogo.png);
    background-position: center;
    background-size: cover;
    height: 16em;
    width: 16em;
}</style>