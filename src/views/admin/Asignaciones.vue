<template>
    <header>
        <div class="lg:ml-64 p-4">
            <i class="fas fa-circle-plus text-2xl" style="color: #48c9b0"></i>
            <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Asignar</span>

            <SideBarADM class="lg:w-64 md:w-48 sm:w-32" /> <!-- Importa y utiliza el componente SidebarADM -->
            <br><br>

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
        <div class="p-5 lg:ml-64 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-grey">Asignaciones</h5>
        </div>
    </header>

    <section>
        <div class="flex-1 lg:ml-64">
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
                            <th scope="col" class="px-6 py-3 text-white">
                                Promotor
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="lead in filterList" :key="lead.LeadID"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ lead.LeadID }}
                            </th>
                            <th class="px-6 py-4">
                                {{ lead.NombreCompleto }}
                            </th>
                            <td class="px-6 py-4">
                                {{ lead.Telefono }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.CorreoElectronico }}
                            </td>
                            <td class="px-2 py-1">
                                <select v-model="lead.selectedPromotor" @change="asignarPromotor(lead.LeadID)"
                                    class="block w-full mt-1 rounded-md border-blue-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    style="color: black;">
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
import { ref } from "vue";

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
                console.error('Error al obtener promotores activos:', error);
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

                await axios.put(`http://localhost:4000/leads/update-promotor/${leadID}`, {
                    PromotorOriginal: lead.selectedPromotor
                });
            } catch (error) {
                this.errAsignarPromotor();
            }
        },

        enviarAsignaciones() {
            this.leads.forEach(async lead => {
                if (lead.selectedPromotor) {
                    try {
                        await axios.put(`http://localhost:4000/leads/update-promotor/${lead.LeadID}`, {
                            PromotorOriginal: lead.selectedPromotor
                        });
                        this.loadLeads();
                        this.notify();
                    } catch (error) {
                        this.errAsignarPromotor();
                    }
                } else {
                    this.errAsignacion(lead.LeadID);
                }
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
    components: { SideBarADM }
};


</script>

<style></style>