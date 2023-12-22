<template>
    <header>
        <div class="lg:ml-64 p-4">
            <i class="fas fa-user-pen text-2xl" style="color: #48c9b0"></i>
            <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Reasignar</span>
            <br><br>

            <div id="verReasignacion" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
                    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-2xl max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <!-- Modal header -->
                            <div
                                class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    Historial de promotores reasignaciones
                                </h3>
                                <button type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="verReasignacion">
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
                                                    Fecha de Reasignacion
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Nombre del promotor
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="historyReasignacion in  historyReasignaciones" :key="historyReasignacion.id"
                                                class="border-b border-gray-200 dark:border-gray-700">
                                                <th scope="row"
                                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                    {{ formatDate(historyReasignacion.FechaReasignacion) }}
                                                </th>
                                                <td
                                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                    {{ historyReasignacion.NombrePromotor }}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            <div class="item-error" v-if="!historyReasignaciones.length">
                                <p class="p-4">No hay historial de contactos</p>
                            </div>
                            <!-- Modal footer -->
                            <div
                                class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button data-modal-hide="verReasignacion" type="button"
                                    class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>

            <SideBarADM class="lg:w-64 md:w-48 sm:w-32" /> <!-- Importa y utiliza el componente SidebarADM -->

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
                </div>
            </form>
        </div>

        <div class="p-5 lg:ml-64 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-grey">Reasignaciones</h5>
        </div>
    </header>

    <section>
        <div class="flex-1 p-4 lg:ml-64">
            <div class="relative overflow-x-auto max-h-[520px] shadow-md sm:rounded-lg">
                <table v-if="filterList.length > 0" class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        style="background-color: #48C9B0;">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-white">
                                ID Lead
                            </th>
                            <th scope="col" class="px-6 py-3 text-white">
                                Nombre Completo
                            </th>
                            <th scope="col" class="px-6 py-3 text-white">
                                Telefono
                            </th>
                            <th scope="col" class="px-6 py-3 text-white">
                                Correo Electronico
                            </th>
                            <th scope="col" class="text-justify px-8 py-3 text-white">
                                Promotor Actual
                            </th>
                            <th scope="col" class="text-justify px-8 py-3 text-white">
                                Fecha de promotor actual
                            </th>
                            <th scope="col" class="px-6 py-3 text-white">
                                Reasignar
                            </th>
                            <th scope="col" class="px-6 py-3 text-white">
                                Historial de Reasignaciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="lead in filterList" :key="lead.LeadID"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ lead.LeadID }}
                            </th>
                            <td class="px-6 py-4">
                                {{ lead.NombreCompleto }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.telefono }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.CorreoElectronico }}
                            </td>
                            <td class="px-8 py-4">
                                {{ lead.NombrePromotorAct ? lead.NombrePromotorAct : lead.NombrePromotorOri }}
                            </td>
                            <td class="px-8 py-4">
                                {{ formatDate(lead.FechaPromotorActual) ? formatDate(lead.FechaPromotorActual) : formatDate(lead.FechaPromotorOriginal) }}
                            </td>
                            <td class="px-6 py-4">
                                <select v-model="lead.selectedPromotor" @click="loadActivePromotores(lead.LeadID)"
                                    class="block rounded-md border-blue-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    style="height: 50px; width: 300px; color: black;">
                                    <option v-for="promotor in promotoresActivos" :key="promotor.PromotorID"
                                        :value="promotor.PromotorID" style="color: black;">
                                        {{ promotor.Nombre }}
                                    </option>
                                </select>
                            </td>
                            <td class="px-6 py-4">
                                <button @click="VerReasignacioModal(lead.LeadID)" data-modal-target="verReasignacion"
                                    data-modal-toggle="verReasignacion" type="button"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ver</button>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
                <br>
                <button type="button" v-if="hayLeadsConPromotorSeleccionado"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    style="text-align: left; float: right;" @click="enviarAsignaciones">
                    <i class="fas fa-regular fa-paper-plane"></i> Enviar
                </button>
                <div class="grid justify-items-center" v-if="!filterList.length" style="background-color: #F4D03F;">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-grey">No hay leads para
                        asignar</h5>
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
import { th } from "date-fns/locale";
import { ref } from "vue";
import { format } from "date-fns";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
});

export default {

    computed: {
        hayLeadsConPromotorSeleccionado() {
            return this.leads.some(lead => lead.selectedPromotor !== null);
        },
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
            leads: [],
            selectedPromotor: null,
            promotoresActivos: [],
            historyReasignaciones: [],
            input: ref(''),
            

        };
    },
    mounted() {
        this.loadLeads();
        this.loadActivePromotores();
        this.loadHistoryReasignacion();

        window.history.pushState({ noBackExitsApp: true }, null, null);
        window.addEventListener('popstate', this.preventBack);
    },
    beforeDestroy() {
        window.removeEventListener('popstate', this.preventBack);
    },
    methods: {

        async loadLeads() {
            try {
                const response = await axios.get('http://localhost:4000/leads/reasignacion');
                this.leads = response.data.leads.map(lead => ({
                    ...lead,
                    selectedPromotor: null,
                    // Inicializar el ID del promotor seleccionado como null
                }));
            } catch (error) {
                this.errLeads();
            }
            this.loadHistoryReasignacion();
        },
        async loadActivePromotores(LeadID) {
            try {
                const response = await axios.get('http://localhost:4000/promotores/activos/'+LeadID);
                console.log('Valor de id:', LeadID);
                this.promotoresActivos = response.data.promotores;
                this.selectedPromotor = this.promotoresActivos[0].PromotorID;

            } catch (error) {
                this.errPromotores();
            }
        },

        async asignarPromotor(leadID) {
            try {
                const lead = this.leads.find(lead => lead.LeadID === leadID);
                if (!lead) {
                    console.error('Lead no encontrado');
                    return;
                }

                // Actualiza el valor del promotor seleccionado en el lead
                // pero no realiza la solicitud PUT aquí
                lead.selectedPromotorID = lead.selectedPromotor;

                console.log('LeadID:', lead.LeadID);
                console.log('Selected Promotor ID:', lead.selectedPromotorID); // Obtén el ID del promotor directamente

                // No realizamos la solicitud PUT aquí
                // Las actualizaciones se manejarán en la función enviarAsignaciones
            } catch (error) {
                this.errAsignarPromotor();
            }
        },

        async enviarAsignaciones() {
            try {
                const promises = this.leads.map(async lead => {
                    if (lead.selectedPromotor) {
                        
                        await axios.put(`http://localhost:4000/leads/update-promotor-actual/${lead.LeadID}`, {
                            promotorActual: lead.selectedPromotor
                        });
                    }
                });
                this.notify();
                // Esperar a que todas las actualizaciones se completen antes de recargar los leads
                await Promise.all(promises);

                // Recargar los leads después de que todas las actualizaciones sean exitosas
                await this.loadLeads();
            } catch (error) {
                console.error('Error al asignar promotores:', error);
            }
        },
        VerReasignacioModal(LeadID) {
            this.loadHistoryReasignacion(LeadID);
        },
        loadHistoryReasignacion(LeadID) {
            console.log('Valor de id:', LeadID);
            axios.get(`http://localhost:4000/leads/historial-reasignacion/${LeadID}`)
                .then(response => {
                    this.historyReasignaciones = response.data.historial;
                    if (this.historial) {
                        this.$modal.show('verReasignacion');
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
    }, watch: {
        leads: {
            handler() {
                // Este método se ejecutará cada vez que 'leads' cambie
                // Puedes realizar cualquier lógica adicional aquí
                this.filterList; // Llamar a filterList cuando leads cambie
                this.formatDate;
                this.loadHistoryReasignacion;
            },
        },
        inmediate: true,
    },
    components: {
        SideBarADM,
    },
};

</script>

<style></style>