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
                <!-- Main modal -->
                <div id="crud-modal" tabindex="-1" aria-hidden="true"
                    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-md max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <!-- Modal header -->
                            <div
                                class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    Create New Product
                                </h3>
                                <button type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-toggle="crud-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <!-- Modal body -->
                            <form class="p-4 md:p-5">
                                <div class="grid gap-4 mb-4 grid-cols-2">
                                    <div class="col-span-2">
                                        <label for="name"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                        <input type="text" name="name" id="name"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type product name" required="">
                                    </div>
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="price"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                        <input type="number" name="price" id="price"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="$2999" required="">
                                    </div>
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="category"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                        <select id="category"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <option selected="">Select category</option>
                                            <option value="TV">TV/Monitors</option>
                                            <option value="PC">PC</option>
                                            <option value="GA">Gaming/Console</option>
                                            <option value="PH">Phones</option>
                                        </select>
                                    </div>
                                    <div class="col-span-2">
                                        <label for="description"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product
                                            Description</label>
                                        <textarea id="description" rows="4"
                                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Write product description here"></textarea>
                                    </div>
                                </div>
                                <button type="submit"
                                    class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    Add new product
                                </button>
                            </form>
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
        <SideBarProm class="lg:w-64 md:w-48 sm:w-32" /> <!-- Importa y utiliza el componente SidebarADM -->

    </header>

    <section>
        <div class="flex-1 lg:ml-64">
            <div class="relative overflow-x-auto max-h-[520px] shadow-md sm:rounded-lg">
                <table v-if="filterList.length > 0"
                    class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col">
                                Seleccionar
                            </th>
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
                                Gestionar
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Contacto
                            </th>
                        </tr>
                    </thead>
                    <tbody class="item leads">
                        <tr v-for="lead in filterList" :key="lead.id"
                            class="item leads px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input id="'checkbox-table-search-1' + lead.LeadID" type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        :value="lead" v-model="selectedLeads">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
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
                                <button @click="VerContactoModal(lead.LeadID)" data-modal-target="crud-modal"
                                    data-modal-toggle="crud-modal" type="button"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Gestionar</button>
                            </td>
                            <td class="px-6 py-4">
                                <button @click="VerContactoModal(lead.LeadID)" data-modal-target="verContacto"
                                    data-modal-toggle="verContacto" type="button"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ver</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br>
            <button type="button"
                class="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                style="text-align: left; float: left;" @click="enviarAsignaciones">
                <i class="fas fa-regular fa-paper-plane"></i> Actualizar varios
            </button>
            <div class="item-error" v-if="input && !filterList.length">
                <p class="grid justify-items-center p-4">No hay coicidencia de registros</p>
            </div>
        </div>
    </section>
</template>
 
<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { getUserName } from "../../sessions";
import SideBarProm from "../../components/SideBarProm.vue";
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
            selectedLeads: [], // Arreglo para almacenar los leads seleccionados
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

        handleLeadSelection(lead) {
            const leadIndex = this.selectedLeads.findIndex(item => item.id === lead.LeadID);

            if (leadIndex === -1) {
                const nuevosDatos = {
                    EscuelaProcedencia: lead.EscuelaProcedencia,
                    Pais: lead.NombrePais,
                    Estado: lead.NombreEstado,
                    Ciudad: lead.NombreCiudad,
                    PSeguimiento: lead.PSeguimiento,
                    CarreraInteres: lead.CarreraInteres,
                    Grado: lead.Grado,
                    Programa: lead.Programa,
                    EstatusInscripcion: lead.EstatusInsc,
                    SemestreIngreso: lead.SemestreIngreso,
                    Ciclo: lead.Ciclo,
                    Campana: lead.CampanaID,
                    AsetNameForm: lead.AsetNameForm,
                    IsOrganic: lead.IsOrganic
                };

                const newLead = {
                    id: lead.LeadID,
                    nuevosDatos,
                    MedioContacto: lead.MedioDeContactoID,
                    selectedDate: new Date(), // Fecha en que fue seleccionado
                    otroAtributo: 'Información adicional',
                };

                this.selectedLeads.push(newLead);
            } else {
                this.selectedLeads.splice(leadIndex, 1);
            }
        },


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

        enviarAsignaciones() {
            // Aquí puedes acceder a los leads seleccionados en this.selectedLeads
            console.log('Leads seleccionados:', this.selectedLeads);
            // Puedes hacer lo que necesites con estos datos, como enviarlos al servidor, etc.
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
    components: { SideBarProm },
};

</script>
 
<style></style>