<template>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <search />
        <sideBarADM /> <!-- Importa y utiliza el componente SidebarADM -->
        <!-- Otro contenido de tu vista -->
         <!-- Importa y utiliza el componente serch -->
        <div class="flex-1 p-5  lg:ml-64">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Correo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Telefono
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha de contacto
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="lead in leads" :key="lead.id"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                Yes
                            </td>
                            <td class="px-6 py-4">
                                Yes
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                3.0 lb.
                            </td>
                            <td class="flex items-center px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#"
                                    class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>


        </div>

</template>
 
<script>

import sideBarADM from '../../components/SideBarADM.vue'; // Ruta relativa al componente
import search from '../../components/Search.vue' // Ruta relativa al componente
import axios from 'axios';

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
            userName: getUserName(),
            leads: [],
        }
    },mounted() {
        this.getLeads();
    },
    methods: {
        async getLeads() {
            try{
                const response = await axios.get('http://localhost:4000/leads');
                this.leads = response.listLead;
            }catch (error){
                console.error(error);
            }
        },
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