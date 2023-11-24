<template>
    <header>
        <div class="lg:ml-64 p-4">
            <i class="fas fa-user-pen text-2xl" style="color: #48c9b0"></i>
            <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Reasignar</span>
        </div>
        <SideBarADM class="lg:w-64 md:w-48 sm:w-32" /> <!-- Importa y utiliza el componente SidebarADM -->
        <Search />
        <div class="p-5 lg:ml-64 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-grey">Reasignaciones</h5>
        </div>
    </header>

    <section>
        <div class="flex-1 p-4 lg:ml-64">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                            <th scope="col" class="px-6 py-3 text-white">
                                Reasignar
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="lead in leads" :key="lead.LeadID"
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
                            <td class="px-6 py-4">

                                <select v-model="lead.selectedPromotor"  @click="loadActivePromotores(lead.LeadID)"
                                    class="block rounded-md border-blue-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    style="height: 50px; width: 300px; color: black;">
                                    <option v-for="promotor in promotoresActivos" :key="promotor.PromotorID"
                                        :value="promotor.PromotorID" style="color: black;">
                                        {{ promotor.Nombre }}
                                    </option>
                                </select>
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
                <div class="grid justify-items-center" v-if="!leads.length" style="background-color: #F4D03F;">
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
import Search from "../../components/Search.vue";
import axios from "axios";
import { th } from "date-fns/locale";

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
        }
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

        };
    },
    mounted() {
        this.loadLeads();
        this.loadActivePromotores();

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
        },
        async loadActivePromotores(LeadID) {
            try {
                console.log('Valor de id:', LeadID);
                const response = await axios.get(`http://localhost:4000/promotores/activos/${LeadID}`);
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
                            PromotorActual: lead.selectedPromotor
                        });
                        this.notify();
                    }
                });

                // Esperar a que todas las actualizaciones se completen antes de recargar los leads
                await Promise.all(promises);

                // Recargar los leads después de que todas las actualizaciones sean exitosas
                await this.loadLeads();
            } catch (error) {
                console.error('Error al asignar promotores:', error);
                this.errAsignarPromotor();
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