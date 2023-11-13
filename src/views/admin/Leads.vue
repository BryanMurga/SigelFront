<template>

    <header>
        <div class="lg:ml-64 p-4">
            <i class="fas fa-bars-progress text-2xl" style="color: #48c9b0"></i>
            <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Leads</span>
        </div>
        <SideBarADM class="lg:w-64 md:w-48 sm:w-32"/> <!-- Importa y utiliza el componente SidebarADM -->
        <Search/>
        
    </header>

    <section>
        <div class="flex-1 lg:ml-64">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                                    Nombre Completo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Telefono
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Correo Electronico
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha de primer contacto
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha Nacimiento
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Ciudad
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Carrera de interes
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Estatus
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
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
    </section>



</template>
 
<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { getUserName } from "../../sessions";
import SideBarADM from "../../components/SideBarADM.vue";
import Search from "../../components/Search.vue";

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
});

export default {
    components: {

    },
    data() {
        return {
            userName: getUserName()
        };
        leads:[]
    },
    methods: {
        loadLeads(){
            axios.get('http://localhost:4000/leads')
                .then(response => {
                    this.users = response.data;  // Asigna los usuarios a la propiedad 'users'
                })
                .catch(error => {
                    console.error('Error al cargar usuarios', error);
                });

        }
    },
    components: { SideBarADM, Search }
};

</script>
 
<style>.image-container {
    background-image: url(/uninterlogo.png);
    background-position: center;
    background-size: cover;
    height: 16em;
    width: 16em;
}</style>