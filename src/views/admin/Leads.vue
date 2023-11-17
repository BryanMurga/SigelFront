<template>
    <header>
        <div class="lg:ml-64 p-4">
            <i class="fas fa-bars-progress text-2xl" style="color: #48c9b0"></i>
            <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Leads</span>

            <div class="flex-1 p-4">
                <form>
                    <label for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input v-model="input" type="search" id="default-search" name="leadSearch"
                            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Buscar registros" required />
                        <!-- <div class="items" v-for="lead in filterList()" :key=lead.id>
                                <p>{{ lead.NombreCompleto }}</p>
                            </div>
                            <div class="item-error" v-if="input&&!filterList().length">
                                <p>No se encontraron registros</p>
                            </div> -->
                    </div>
                </form>
            </div>

        </div>
        <SideBarADM class="lg:w-64 md:w-48 sm:w-32" /> <!-- Importa y utiliza el componente SidebarADM -->

    </header>

    <section>
        <div class="flex-1 lg:ml-64">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table v-if="filterList.length > 0"
                    class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                    <tbody class="item leads">
                        <tr v-for="lead in filterList" :key="lead.id"
                            class="item leads px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
                            <th class="px-6 py-4">
                                {{ lead.NombreCompleto }}
                            </th>
                            <td class="px-6 py-4">
                                {{ lead.telefono }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.telefono2 }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.CorreoElectronico }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.CorreoElectronico2 }}
                            </td>
                            <td class="px-6 py-4">
                                {{ formatDate(lead.FechaPrimerContacto) }}
                            </td>
                            <td class="px-6 py-4">
                                {{ formatDate(lead.FechaNac) }}
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
                                {{ lead.CarreraInteres }}
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
                                {{ lead.NombreCampana }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.AsetNameForm }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.IsOrganic }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.MedioContacto }}
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
                                {{ formatDate(lead.FechaInscripcion) }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.CarreraInscrita }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.BecaOfrecida }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.NumeroLista }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.NombrePromotorOri }}
                            </td>
                            <td class="px-6 py-4">
                                {{ formatDate(lead.FechaPromotorOriginal) }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.NombrePromotorAct }}
                            </td>
                            <td class="px-6 py-4">
                                {{ formatDate(lead.FechaPromotorActual) }}
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

                <div class="item-error" v-if="input && !filterList.length">
                    <p class="p-4">No hay coicidencia de registros</p>
                </div>

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
import { ref } from "vue";
import { format } from "date-fns";
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
});

export default {

    data() {
        return {
            userName: getUserName(),
            leads: [],
            buscador: '',
            setTimeoutBuscador: '',
            input: ref(''),
        };

    },
    computed: {
        filterList() {

            if (this.leads.length === 0) {
                return [];
            }

            return this.leads.filter(lead => {
                const nombreCompleto = lead && lead.NombreCompleto ? lead.NombreCompleto : "";
                return nombreCompleto.toLowerCase().includes(this.input.toLowerCase());
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
                if (response.data && response.data.leads) {
                    this.leads = response.data.leads; // Almacena los leads en el array
                }

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
        },
        formatDate(date) {
            if(date){
                const formattedDate = format(new Date(date), "dd/MM/yyyy");
                return formattedDate;
            }else{
                return '';
            }
            // Formatea la fecha utilizando date-fns
            
        },
        
    },
    watch: {
        leads: {
            handler() {
                // Este método se ejecutará cada vez que 'leads' cambie
                // Puedes realizar cualquier lógica adicional aquí
                this.filterList; // Llamar a filterList cuando leads cambie
                this.formatDate; // Llamar a formatDate cuando leads cambie
            },
        },
        inmediate: true,
    },
    components: { SideBarADM, Search },
};

</script>
 
<style></style>