<template>
    <DashboardLayout name="Asignaciones">
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

        <section class="pt-6">
            <!-- Alerta -->
            <div v-if="!filterList.length" class="flex items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-100"
                role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">Info</span>
                <div>
                    No hay leads para asignar
                </div>
            </div>

            <Table>
                <template #header>
                    <TableRow>
                        <TableHeaderCell>
                            <div>
                                <input id="'checkbox-table-search-1' + lead.LeadID" type="checkbox"
                                    class="w-4 h-w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                                    v-model="selectedAll" @change="selectedAllLeads">
                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            </div>
                        </TableHeaderCell>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Nombre completo</TableHeaderCell>
                        <TableHeaderCell>Teléfono</TableHeaderCell>
                        <TableHeaderCell>Correo Electrónico</TableHeaderCell>
                        <TableHeaderCell>Promotor</TableHeaderCell>
                    </TableRow>
                </template>
                <template #default>
                    <TableRow v-for="lead in filterList" :key="lead.LeadID" class="border-b">
                        <TableDataCell>
                            <div>
                                <input id="'checkbox-table-search-1' + lead.LeadID" type="checkbox"
                                    class="w-4 h-w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                    :value="lead.LeadID" v-model="selectedLeads">
                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            </div>
                        </TableDataCell>
                        <TableDataCell>{{ lead.LeadID }}</TableDataCell>
                        <TableDataCell>{{ lead.NombreCompleto }}</TableDataCell>
                        <TableDataCell>{{ lead.Telefono }}</TableDataCell>
                        <TableDataCell>{{ lead.CorreoElectronico }}</TableDataCell>
                        <TableDataCell>
                            <label for="default" class="block mb-2 text-sm font-medium text-gray-900">Asigna un
                                promotor</label>
                            <select id="default" v-model="lead.selectedPromotor" @change="asignarPromotor(lead.LeadID)"
                                class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option v-for="promotor in promotoresActivos" :key="promotor.PromotorID"
                                    :value="promotor.PromotorID">
                                    {{ promotor.Nombre }}
                                </option>
                            </select>
                        </TableDataCell>
                    </TableRow>
                </template>
            </Table>

            <div class="flex justify-end w-full">
                <button 
                    type="button" 
                    v-if="promotorSeleccionado"
                    @click="enviarAsignaciones"
                    class="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md duration-150"
                >
                    Enviar <i class="fas fa-regular fa-paper-plane"></i>
                </button>
            </div>

            <div v-show="selectedLeads.length > 0" class="flex items-center space-x-4">
                <label for="asignacion-promotores"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Asignación Multiple</label>

                <select v-model="selectPromotorMultiple" id="asignacion-promotores"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option v-for="promotor in promotoresActivos" :key="promotor.PromotorID" :value="promotor.PromotorID"
                        style="color: black;">
                        {{ promotor.Nombre }}
                    </option>
                </select>

                <button @click="asignarPromotorMultiple()" type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    style="text-align: left;">
                    <i class="fas fa-regular fa-paper-plane"></i> Asignar
                </button>
            </div>
        </section>
    </DashboardLayout>
</template>

<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { getUserName } from "../../sessions";
import axios from "axios";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// Layout
import DashboardLayout from "../../layouts/DashboardLayout.vue";

// Components
import Table from '../../components/Table.vue';
import TableDataCell from '../../components/TableDataCell.vue';
import TableHeaderCell from '../../components/TableHeaderCell.vue';
import TableRow from '../../components/TableRow.vue';

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
});

export default {
    computed: {
        promotorSeleccionado() {
            // Comprueba si hay al menos un lead con promotor seleccionado
            return this.filterList.some(lead => lead.selectedPromotor);
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
            toast("Se ha agregado el Promotor!", {
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
            promotoresActivos: [], // Agrega una variable para almacenar los promotores activos
            selectedPromotor: null,// Variable para almacenar el promotor seleccionado
            input: ref(''),
            selectedLeads: [],
            selectedAll: false,
            selectPromotorMultiple: null,
            updateMultipleLeads: {
                leadIDs: null,
                promotorOriginal: null
            }
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
                const response = await axios.get('http://localhost:4000/leads/asignacion');
                this.leads = response.data.leads; // Almacena los leads en el array
            } catch (error) {
                this.errLeads();
            }
        },
        async loadActivePromotores() {
            try {
                const response = await axios.get('http://localhost:4000/promotores/activos/all');
                this.promotoresActivos = response.data.promotores;


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

                console.log('LeadID:', lead.LeadID);
                console.log('Selected Promotor:', lead.selectedPromotor);

                if (lead.selectedPromotor === undefined || lead.selectedPromotor === null) {
                    console.error('Promotor no seleccionado');
                    return;
                }

            } catch (error) {
                this.errAsignarPromotor();
            }
        },

        async asignarPromotorMultiple() {
            this.updateMultipleLeads.leadIDs = this.selectedLeads;
            this.updateMultipleLeads.promotorOriginal = this.selectPromotorMultiple;
            console.log(this.updateMultipleLeads);
            if (this.updateMultipleLeads.leadIDs === null || this.updateMultipleLeads.promotorOriginal === null) {
                console.error('Promotor no seleccionado');
                return;
            }
            try {
                await axios.put(`http://localhost:4000/leads/update-multiple-leads-promotor`, this.updateMultipleLeads
                );
                this.loadLeads();
                this.notify();

            }
            catch (error) {
                this.errAsignarPromotor();
            }

        },
        enviarAsignaciones() {
            let alertaMostrada = false;
            this.leads.forEach(async lead => {
                if (lead.selectedPromotor) {
                    try {
                        await axios.put(`http://localhost:4000/leads/update-promotor/${lead.LeadID}`, {
                            promotorOriginal: lead.selectedPromotor
                        });
                        this.loadLeads();
                    } catch (error) {
                        this.errAsignarPromotor();
                    }
                } else {
                    if (!alertaMostrada) {
                        this.errAsignacion(lead.LeadID);
                        alertaMostrada = true; // Marcar que la alerta ha sido mostrada
                    }
                }
            });
            //checar si esta bien colocado la notificacion
            this.notify();
        },

        selectedAllLeads() {
            if (this.selectedAll) {
                this.selectedLeads = this.leads.map(lead => lead.LeadID);
                console.log(this.selectedLeads);
            } else {
                this.selectedLeads = [];
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
    components: {
        DashboardLayout,
        Table,
        TableDataCell,
        TableHeaderCell,
        TableRow
    }
};


</script>
