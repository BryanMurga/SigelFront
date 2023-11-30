<template>
    <header>
        <div class="lg:ml-64 p-4">
            <i class="fas fa-bars-progress text-2xl" style="color: #48c9b0"></i>
            <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Leads</span>

            <div class="flex-1 p-4">
                <div id="verContacto" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
                    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-2xl max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <!-- Modal header -->
                            <div
                                class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    Historial de contacto
                                </h3>
                                <button type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="verContacto">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span @click="closeEditModal" class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <!-- Modal body -->
                            <div class="p-4 md:p-5 space-y-4">


                                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                                    Fecha de contacto
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Comentario
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="contacto in  contactos" :key="contacto.id"
                                                class="border-b border-gray-200 dark:border-gray-700">
                                                <th scope="row"
                                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                    {{ formatDate(contacto.FechaContacto) }}
                                                </th>
                                                <td
                                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                    {{ contacto.Comentario }}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            <div class="item-error" v-if="!contactos.length">
                                <p class="p-4">No hay historial de contactos</p>
                            </div>
                            <!-- Modal footer -->
                            <div
                                class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button data-modal-hide="verContacto" type="button"
                                    class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>


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
                <div class="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-grey">Leads</h5>
                </div>
            </div>

        </div>
        <SideBarADM class="lg:w-64 md:w-48 sm:w-32" /> <!-- Importa y utiliza el componente SidebarADM -->

    </header>

    <section>
        <div class="flex-1 lg:ml-64">
            <div class="relative overflow-x-auto max-h-[520px] shadow-md sm:rounded-lg">
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
                                Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Nombre Completo
                            </th>
                            <th scope="col" class="place-items-center px-4 py-3">
                                Teléfono
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                                Teléfono Secundario
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Correo Electrónico
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Correo Electrónico 2
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
                                País
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
                                {{ lead.LeadID }}
                            </th>
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
                            <td class="px-6 py-4">|
                                {{ lead.Comentarios }}
                            </td>
                            <td class="px-6 py-4">
                                <button @click="VerContactoModal(lead.LeadID)" data-modal-target="verContacto"
                                    data-modal-toggle="verContacto" type="button"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ver</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="item-error" v-if="input && !filterList.length">
                    <p class="grid justify-items-center p-4">No hay coicidencia de registros</p>
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
import axios from "axios";
import { ref } from "vue";
import { format } from "date-fns";
import { FwbButton, FwbModal } from 'flowbite-vue';

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

onMounted(() => {
    initFlowbite();
});

export default {

    //types of toast
    setup() {
        const notify = () => {
            toast("Se ha reasignado el Promotor!", {
                autoClose: 3000,
                type: 'success'
            }); // ToastOptions
        }

        const errAsignacion = (LeadID) => {
            toast(`El lead ${LeadID} no tiene un promotor asignado`, {
                autoClose: 2000,
                type: 'warning'
            }); // ToastOptions
        }

        const errLeads = () => {
            toast("Error al obtener los Leads", {
                autoClose: 2000,
                type: 'error'
            }); // ToastOptions
        }

        const errPromotores = () => {
            toast("Error al obtener los Promotores Activos", {
                autoClose: 2000,
                type: 'error'
            }); // ToastOptions
        }

        const errAsignarPromotor = () => {
            toast("Error al asignar promotor", {
                autoClose: 2000,
                type: 'error'
            }); // ToastOptions
        }

        const infoNotify = () => {
            toast("Se ha actualizado la Información... ", {
                autoClose: 2000,
                type: 'error'
            }); // ToastOptions
        }

        return { notify, errAsignacion, infoNotify, errLeads, errPromotores, errAsignarPromotor };
    },

    data() {
        return {
            userName: getUserName(),
            VerContacto: null,
            leads: [],
            contactos: [],
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
        this.loadContactos();

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
                    this.leads = response.data.leads;
                    // Almacena los leads en el array
                }

            } catch (error) {
                this.errLeads();
            }
            this.loadContactos();
        },
        VerContactoModal(id) {
            this.loadContactos(id);
        },
        loadContactos(id) {
            console.log('Valor de id:', id);
            axios.get(`http://localhost:4000/leads/contacto/${id}`)
                .then(response => {
                    this.contactos = response.data.contacto;
                    if (this.contactos) {
                        this.$modal.show('verContacto');
                    } else {
                        console.error('El objeto de comentarios es nulo o indefinido');
                        
                    }
                })
                .catch(error => {
                    console.error('Error al obtener los comentarios del lead:', error);
                    // Manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario
                });
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
            if (date) {
                const formattedDate = format(new Date(date), "dd/MM/yyyy");
                return formattedDate;
            } else {
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
                this.formatDate;
                this.loadContactos;
            },
        },
        inmediate: true,
    },
    components: { SideBarADM },
};

</script>
 
<style></style>