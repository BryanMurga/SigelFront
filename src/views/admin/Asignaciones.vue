<template>
    <header>
        <div class="lg:ml-64 p-4">
            <i class="fas fa-circle-plus text-2xl" style="color: #48c9b0"></i>
            <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Asignar</span>
        </div>
        <SideBarADM class="lg:w-64 md:w-48 sm:w-32" /> <!-- Importa y utiliza el componente SidebarADM -->
        <Search />
        <div class="p-5 lg:ml-64 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-grey">Asignaciones</h5>
        </div>
    </header>

    <section>
        <div class="flex-1 lg:ml-64">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>

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
                                Promotor
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="lead in leads" :key="lead.LeadID"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ lead.NombreCompleto }}
                            </th>
                            <td class="px-6 py-4">
                                {{ lead.Telefono }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.CorreoElectronico }}
                            </td>
                            <td class="px-2 py-1">
                                <select v-model="selectedPromotor" @change="asignarPromotor(lead.LeadID)"
                                    class="block w-full mt-1 rounded-md border-blue-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    style="color: black;">
                                    <option v-for="promotor in promotoresActivos" :key="promotor.id" :value="promotor.id"
                                        style="color: black;">
                                        {{ promotor.Nombre }}
                                    </option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br>
                <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                style="text-align: left; float: right;"
                    @click="enviarAsignaciones">
                    <i class="fas fa-regular fa-paper-plane"></i>   Enviar
                </button>

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
import axios from "axios";

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
});

export default {
    data() {
        return {
            userName: getUserName(),
            leads: [],
            promotoresActivos: [], // Agrega una variable para almacenar los promotores activos
            selectedPromotor: null // Variable para almacenar el promotor seleccionado
        };

    },
    mounted() {
        this.loadLeads();
        this.loadActivePromotores(); // Llama a la función para cargar promotores activos
        // Agrega un nuevo estado al historial cuando el componente se monta
        window.history.pushState({ noBackExitsApp: true }, null, null);

        window.addEventListener('popstate', this.preventBack);

    },
    beforeDestroy() {
        // Elimina el event listener cuando el componente se destruye
        window.removeEventListener('popstate', this.preventBack);
    },
    methods: {
        async loadLeads() {
            try {
                // Reemplaza 'tu-endpoint' con la URL real de tu endpoint
                const response = await axios.get('http://localhost:4000/leads');
                this.leads = response.data.leads; // Almacena los leads en el array
            } catch (error) {
                console.error('Error al obtener leads:', error);
            }
        },
        async loadActivePromotores() {
            try {
                const response = await axios.get('http://localhost:4000/promotores/activos');
                this.promotoresActivos = response.data.promotores;
            } catch (error) {
                console.error('Error al obtener promotores activos:', error);
            }
        },
        preventBack(event) {
            // Verifica si hay un estado personalizado en el historial
            if (event.state && event.state.noBackExitsApp) {
                // Vuelve a agregar el estado y evita retroceder
                window.history.pushState({ noBackExitsApp: true }, null, null);
            } else {
                window.history.pushState({ noBackExitsApp: true }, null, null);
            }
        },
    },
    components: { SideBarADM, Search }
};


</script>

<style></style>