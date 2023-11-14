<template>
    <header>
        <div class="lg:ml-64 p-4">
            <i class="fas fa-bars-progress text-2xl" style="color: #48c9b0"></i>
            <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Leads</span>
        </div>
        <SideBarADM class="lg:w-64 md:w-48 sm:w-32" /> <!-- Importa y utiliza el componente SidebarADM -->
        <Search v-model="searchQuery"/>

    </header>

    <section>
        <div class="flex-1 lg:ml-64">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <!-- <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                </div>
                            </th> -->
                            <th scope="col" class="px-6 py-3">
                                Nombre Completo
                            </th>
                            <th scope="col" class="place-items-center px-4 py-3">
                                Telefono
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                                Telefono 2
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Correo Electronico
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Correo Electronico 2
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha de primer contacto
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha Nacimiento
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Escuela de procedencia
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Pais
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Estado
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Ciudad
                            </th>
                            <th scope="col" class="px-6 py-3">
                                P-Seguimiento
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Carrera de interes
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Grado
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Programa
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Estatus Incripción
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Semestre de ingreso
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Ciclo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Campaña
                            </th>
                            <th scope="col" class="px-6 py-3">
                                AsetNameForm
                            </th>
                            <th scope="col" class="px-6 py-3">
                                IsOrganic
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Medio de Contacto
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Tipo Referido
                            </th>
                            <th scope="col" class="px-6 py-3">
                                NombreReferido
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Donde se obtuvo dato
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha de Inscripcion
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Carrera de Inscripcion
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Beca Ofrecida
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Numero de Lista
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Promotor Original
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha de promotor original
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Promotor Actual
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha de promotor actual
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Comentarios
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Contacto
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="lead in leads" :key="lead.LeadID"
                            class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
                            <!-- <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td> -->
                            <th class="px-6 py-4">
                                {{ lead.NombreCompleto }}
                            </th>
                            <td class="px-6 py-4">
                                {{ lead.Telefono }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.Telefono2 }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.CorreoElectronico }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.CorreoElectronico2 }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.FechaPrimerContacto }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.FechaNac }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.EscuelaProcedencia }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.NombrePais }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.NombreEstado }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.NombreCiudad }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.PSeguimiento }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.CarreraInteresID }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.Grado }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.Programa }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.EstatusInsc }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.SemestreIngreso }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.Ciclo }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.CampanaID }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.AsetNameForm }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.IsOrganic }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.MedioDeContactoID }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.TipoReferido }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.NombreReferido }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.DondeObtDato }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.FechaInscripcion }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.CarreraInscripcion }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.BecaOfrecida }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.NumeroLista }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.PromotorOriginal }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.FechaPromotorOriginal }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.PromotorActual }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.FechaPromotorActual }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.Comentarios }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.Contacto }}
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
            searchQuery: '',
        };

    },
    computed: {
        filteredLeads() {
            // Filter leads based on the search query
            return this.leads.filter((lead) => {
                return Object.values(lead).some((value) => {
                    if (value) {
                        const stringValue = String(value).toLowerCase();
                        const lowercasedQuery = this.searchQuery.toLowerCase();
                        return stringValue.includes(lowercasedQuery);
                    }
                    return false;
                });
            });
        },
    },
    mounted() {
        this.loadLeads();
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
        preventBack(event) {
            // Verifica si hay un estado personalizado en el historial
            if (event.state && event.state.noBackExitsApp) {
                // Vuelve a agregar el estado y evita retroceder
                window.history.pushState({ noBackExitsApp: true }, null, null);
            } else {
                window.history.pushState({ noBackExitsApp: true }, null, null);
            }
        }
    },
    components: { SideBarADM, Search },
};

</script>
 
<style></style>