<template>
    <DashboardLayout name="Leads">

        <!-- Modal -->
        <div id="verContacto" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Historial de contacto
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="verContacto">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
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
                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="verContacto" type="button"
                            class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Fin de Modal -->

        <div class="flex-1 p-4">
            <form class="flex items-center relative">
                <div class="relative flex-shrink-0">
                    <button id="dropdown-button" data-dropdown-toggle="dropdown" @click="toggleDropdown"
                        class="flex-shrink-0 inline-flex items-center py-3.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                        type="button">
                        {{ selectedCategory }} <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <div v-if="isDropdownOpen" id="dropdown"
                        class="absolute top-full left-0 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        style="z-index: 999;">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <button type="button"
                                    class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    @click="selectCategory('Nombre')">
                                    Nombre
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                    class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    @click="selectCategory('Telefono')">
                                    Teléfono
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                    class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    @click="selectCategory('CorreoElectronico')">
                                    CorreoElectronico
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                    class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    @click="selectCategory('EscuelaProcedencia')">
                                    Escuela de Procedencia
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                    class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    @click="selectCategory('Pais')">
                                    Nombre Pais
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                    class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    @click="selectCategory('Estado')">
                                    Nombre Estado
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                    class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    @click="selectCategory('Ciudad')">
                                    Nombre Ciudad
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="relative w-full">
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

            <div class="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                <div>
                    <label for="select1" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                        Filtrado de categoria</label>
                    <select id="select1" v-model="selectedFiltrado"
                        class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Escoge un filtro</option>
                        <option v-for="filtrado in filtradoSelect" :key="filtrado" :value="filtrado">{{ filtrado }}
                        </option>
                    </select>
                </div>

                <div v-if="selectedFiltrado === 'PSeguimiento'">
                    <select id="ps-seguimiento" v-model="subSelectedFiltrado"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Escoge estatus</option>
                        <option v-for="ps in PSeguimientos" :key="ps" :value="ps">{{ ps }}</option>
                    </select>
                </div>
                <div v-if="selectedFiltrado === 'Promotor Actual'">
                    <select id="promotor-actual" v-model="subSelectedFiltrado"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Escoge un promotor</option>
                        <option v-for="promotor in Promotores" :key="promotor" :value="promotor.PromotorID">{{
                            promotor.Nombre }}</option>
                    </select>
                </div>
                <div v-if="selectedFiltrado === 'Medio de Contacto'">
                    <select id="medio-contacto" v-model="subSelectedFiltrado"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Escoge un medio de contacto</option>
                        <option v-for="medio in medioContactos" :key="medio" :value="medio.MedioID">{{ medio.Nombre }}
                        </option>
                    </select>
                </div>
                <div v-if="selectedFiltrado === 'Carrera'">
                    <select id="carrea-interes" v-model="subSelectedFiltrado"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Escoge una carrera</option>
                        <option v-for="carrera in Carreras" :key="carrera" :value="carrera.CarreraID">{{ carrera.Nombre
                        }}</option>
                    </select>
                </div>
                <div v-if="selectedFiltrado === 'Grado'">
                    <select id="grado" v-model="subSelectedFiltrado"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Escoge un programa</option>
                        <option v-for="grado in Grados" :key="grado" :value="grado">{{ grado }}</option>
                    </select>
                </div>
                <div v-if="selectedFiltrado === 'Programa'">
                    <select id="programa" v-model="subSelectedFiltrado"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Escoge un programa</option>
                        <option v-for="programa in Programas" :key="programa" :value="programa">{{ programa }}</option>
                    </select>
                </div>
                <div v-if="selectedFiltrado === 'Campaña'">
                    <select id="campaña" v-model="subSelectedFiltrado"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Escoge una campaña</option>
                        <option v-for="campana in Campanas" :key="campana" :value="campana.CampanaID">{{ campana.Nombre
                        }}</option>
                    </select>
                </div>
                <div v-if="selectedFiltrado === 'IsOrganic'">
                    <select id="isOrganic" v-model="subSelectedFiltrado"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Escoge una opción</option>
                        <option v-for="isO in isOrganic" :key="isO" :value="isO">{{ isO }}</option>
                    </select>
                </div>
                <button type="button"
                    class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    @click="BorrarFiltros()">Borrar Filtros
                </button>
            </div>
        </div>


        <section class="">
            <Table v-if="filterList.length > 0">
                <template #header>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Nombre completo</TableHeaderCell>
                        <TableHeaderCell>Telefono</TableHeaderCell>
                        <TableHeaderCell>Telefono secundario</TableHeaderCell>
                        <TableHeaderCell>Correo electrónico</TableHeaderCell>
                        <TableHeaderCell>Correo alternativo</TableHeaderCell>
                        <TableHeaderCell>Fecha de primer contacto</TableHeaderCell>
                        <TableHeaderCell>Fecha de nacimiento</TableHeaderCell>
                        <TableHeaderCell>Escuela de procedencia</TableHeaderCell>
                        <TableHeaderCell>País</TableHeaderCell>
                        <TableHeaderCell>Estado</TableHeaderCell>
                        <TableHeaderCell>Ciudad</TableHeaderCell>
                        <TableHeaderCell>P-Seguimiento</TableHeaderCell>
                        <TableHeaderCell>Carrera de interés</TableHeaderCell>
                        <TableHeaderCell>Nivel Académico</TableHeaderCell>
                        <TableHeaderCell>Programa</TableHeaderCell>
                        <TableHeaderCell>Estatus Inscripción</TableHeaderCell>
                        <TableHeaderCell>Semestre de ingreso</TableHeaderCell>
                        <TableHeaderCell>Ciclo</TableHeaderCell>
                        <TableHeaderCell>Campaña</TableHeaderCell>
                        <TableHeaderCell>AsetNameForm</TableHeaderCell>
                        <TableHeaderCell>IsOrganic</TableHeaderCell>
                        <TableHeaderCell>Medio de contacto</TableHeaderCell>
                        <TableHeaderCell>Tipo referido</TableHeaderCell>
                        <TableHeaderCell>Nombre referido</TableHeaderCell>
                        <TableHeaderCell>Donde se obtuvo dato</TableHeaderCell>
                        <TableHeaderCell>Fecha de inscripción</TableHeaderCell>
                        <TableHeaderCell>Carrera de inscripción</TableHeaderCell>
                        <TableHeaderCell>Beca ofrecida</TableHeaderCell>
                        <TableHeaderCell>Número de lista</TableHeaderCell>
                        <TableHeaderCell>Promotor original</TableHeaderCell>
                        <TableHeaderCell>Fecha de promotor original</TableHeaderCell>
                        <TableHeaderCell>Promotor actual</TableHeaderCell>
                        <TableHeaderCell>Fecha de promotor actual</TableHeaderCell>
                        <TableHeaderCell>Comentarios</TableHeaderCell>
                        <TableHeaderCell>Contacto</TableHeaderCell>
                    </TableRow>
                </template>
                <template #default>
                    <TableRow v-for="lead in filterList" :key="lead.id" class="border-b">
                        <TableDataCell>{{ lead.LeadID }}</TableDataCell>
                        <TableDataCell>{{ lead.NombreCompleto }}</TableDataCell>
                        <TableDataCell>{{ lead.telefono }}</TableDataCell>
                        <TableDataCell>{{ lead.telefono2 }}</TableDataCell>
                        <TableDataCell>{{ lead.CorreoElectronico }}</TableDataCell>
                        <TableDataCell>{{ lead.CorreoElectronico2 }}</TableDataCell>
                        <TableDataCell>{{ formatDate(lead.FechaPrimerContacto) }}</TableDataCell>
                        <TableDataCell>{{ formatDate(lead.FechaNac) }}</TableDataCell>
                        <TableDataCell>{{ lead.EscuelaProcedencia }}</TableDataCell>
                        <TableDataCell>{{ lead.NombrePais }}</TableDataCell>
                        <TableDataCell>{{ lead.NombreEstado }}</TableDataCell>
                        <TableDataCell>{{ lead.NombreCiudad }}</TableDataCell>
                        <TableDataCell>{{ lead.PSeguimiento }}</TableDataCell>
                        <TableDataCell>{{ lead.CarreraInteres }}</TableDataCell>
                        <TableDataCell>{{ lead.Grado }}</TableDataCell>
                        <TableDataCell>{{ lead.Programa }}</TableDataCell>
                        <TableDataCell>{{ lead.EstatusInsc }}</TableDataCell>
                        <TableDataCell>{{ lead.SemestreIngreso }}</TableDataCell>
                        <TableDataCell>{{ lead.Ciclo }}</TableDataCell>
                        <TableDataCell>{{ lead.NombreCampana }}</TableDataCell>
                        <TableDataCell>{{ lead.AsetNameForm }}</TableDataCell>
                        <TableDataCell>{{ lead.IsOrganic }}</TableDataCell>
                        <TableDataCell>{{ lead.MedioContacto }}</TableDataCell>
                        <TableDataCell>{{ lead.TipoReferido }}</TableDataCell>
                        <TableDataCell>{{ lead.NombreReferido }}</TableDataCell>
                        <TableDataCell>{{ lead.DondeObtDato }}</TableDataCell>
                        <TableDataCell>{{ formatDate(lead.FechaInscripcion) }}</TableDataCell>
                        <TableDataCell>{{ lead.CarreraInscrita }}</TableDataCell>
                        <TableDataCell>{{ lead.BecaOfrecida }}</TableDataCell>
                        <TableDataCell>{{ lead.NumeroLista }}</TableDataCell>
                        <TableDataCell>{{ lead.NombrePromotorOri }}</TableDataCell>
                        <TableDataCell>{{ formatDate(lead.FechaPromotorOriginal) }}</TableDataCell>
                        <TableDataCell>{{ lead.NombrePromotorAct }}</TableDataCell>
                        <TableDataCell>{{ formatDate(lead.FechaPromotorActual) }}</TableDataCell>
                        <TableDataCell>{{ lead.Comentarios }}</TableDataCell>
                        <TableDataCell>
                            <button 
                                @click="VerContactoModal(lead.LeadID)" 
                                data-modal-target="verContacto"
                                data-modal-toggle="verContacto" 
                                type="button"
                                class="py-2 px-4 bg-sky-600 hover:bg-sky-700 rounded-md text-white text-xs duration-150"
                            >
                                Ver
                            </button>
                        </TableDataCell>
                    </TableRow>
                </template>
            </Table>
        </section>
    </DashboardLayout>
</template>
 
<script>
import axios from "axios";
import { ref } from "vue";
import { format } from "date-fns";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { getUserName } from "../../sessions";

// Layout
import DashboardLayout from './../../layouts/DashboardLayout.vue';

// Componentes
import Table from '../../components/Table.vue';
import TableDataCell from '../../components/TableDataCell.vue';
import TableHeaderCell from '../../components/TableHeaderCell.vue';
import TableRow from '../../components/TableRow.vue';

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
            isDropdownOpen: false,
            selectedCategory: 'Nombre',
            filtradoSelect: ['PSeguimiento', 'Promotor Actual', 'Medio de Contacto', 'Carrera', 'Grado', 'Programa', 'Campaña', 'IsOrganic'],
            selectedFiltrado: 'PSeguimiento',
            subSelectedFiltrado: null,
            PSeguimientos: ['AU-ALUMNO UNINTER', 'INSC-INSCRIPCIÓN', 'NI-NO INTERESA', 'P-PROSPECTO', 'PI-INSCRIPCIÓN', 'PS-SEGUIMIENTO', 'SC-SIN CONTACTO', 'PU-PERSONAL UNINTER', 'DU-DUPLICADO', 'DI-DATO NO VALIDO', 'BA-BAJA ALUMNO', 'VACIO'],
            Promotores: [],
            medioContactos: [],
            Carreras: [],
            Grados: ['SECUNDARIA', 'BACHILLERATO', 'PREPA-A', 'LIC/ING', 'ESPECIALIDAD', 'DIPLOMADO', 'MAESTRIA', 'DOCTORADO', 'NO ESPECIFICA'],
            Programas: ['ADMINISTRACIÓN', 'ADMINISTRACION DE EMPRESAS', 'ADMINISTRACION DE NEGOCIOS INTERNACIONALES', 'ARQ', 'BACHILLERATO SEMESTRAL', 'BILINGÜE', 'BIU', 'BIUB', 'BIUM', 'CIENCIAS POLÍTICAS, RELACIONES INT.', 'CLS PRT', 'CORP', 'CURSO DE VERANO', 'Curso Intensivo', 'DAD', 'DDI', 'DDPAI', 'DEI', 'DEPU', 'DHU', 'DI', 'DIP', 'DISEÑO DE MODAS', 'DISEÑO GRÁFICO', 'DMD', 'DPU', 'EAO', 'EAPD', 'EAPD y LADD', 'EATL', 'LDI', 'LDM', 'LECE', 'LED', 'LEF', 'LEM',
                'LEMK', 'LEMP', 'LIC', 'LICENCIATURA', 'LID', 'LPS', 'LRI', 'MADE', 'MADEL', 'MARET', 'MDG', 'MEL', 'MELE', 'MERCADOTECNIA', 'MGC', 'MI', 'NIÑOS', 'OFERTA EDUCATIVA', 'PEDAGOGÍA', 'PREPA A', 'PREPA-A', 'REGLR', 'SIU', 'SIUB', 'SIUM', 'UNI LAE', 'LPE'],
            Campanas: [],
            isOrganic: ['PAUTA', 'ORGÁNICO'],
        };
    },
    computed: {
        filterList() {

            if (this.leads.length === 0) {
                return [];
            }
            console.log(this.subSelectedFiltrado);
            console.log(this.leads);

            if (this.selectedFiltrado == 'PSeguimiento' && this.subSelectedFiltrado) {
                return this.leads.filter(lead => {
                    const pSeguimiento = lead && lead.PSeguimiento ? lead.PSeguimiento : "";
                    return pSeguimiento.includes(this.subSelectedFiltrado);
                });
            }

            if (this.selectedFiltrado == 'Promotor Actual' && this.subSelectedFiltrado) {
                return this.leads.filter(lead => {
                    const promotorActualSelect = lead && lead.PromotorActual ? lead.PromotorActual : "";
                    return promotorActualSelect === this.subSelectedFiltrado;
                });
            }

            if (this.selectedFiltrado == 'Medio de Contacto' && this.subSelectedFiltrado) {
                return this.leads.filter(lead => {
                    const medioContactoSelect = lead && lead.MedioDeContactoID ? lead.MedioDeContactoID : "";
                    return medioContactoSelect === this.subSelectedFiltrado;
                });
            }

            if (this.selectedFiltrado == 'Carrera' && this.subSelectedFiltrado) {
                return this.leads.filter(lead => {
                    const carreraSelect = lead && lead.CarreraInteresID ? lead.CarreraInteresID : "";
                    return carreraSelect === this.subSelectedFiltrado;
                });
            }

            if (this.selectedFiltrado == 'Grado' && this.subSelectedFiltrado) {
                return this.leads.filter(lead => {
                    const gradoSelect = lead && lead.Grado ? lead.Grado : "";
                    return gradoSelect === this.subSelectedFiltrado;
                });
            }

            if (this.selectedFiltrado == 'Programa' && this.subSelectedFiltrado) {
                return this.leads.filter(lead => {
                    const programaSelect = lead && lead.Programa ? lead.Programa : "";
                    return programaSelect === this.subSelectedFiltrado;
                });
            }

            if (this.selectedFiltrado == 'Campaña' && this.subSelectedFiltrado) {
                return this.leads.filter(lead => {
                    const campanaSelect = lead && lead.CampanaID ? lead.CampanaID : "";
                    return campanaSelect === this.subSelectedFiltrado;
                });
            }

            if (this.selectedFiltrado == 'IsOrganic' && this.subSelectedFiltrado) {
                return this.leads.filter(lead => {
                    const isOrganicSelect = lead && lead.IsOrganic ? lead.IsOrganic : "";
                    return isOrganicSelect === this.subSelectedFiltrado;
                });
            }


            if (this.selectedCategory == 'Nombre') {
                return this.leads.filter(lead => {
                    const nombreCompleto = lead && lead.NombreCompleto ? lead.NombreCompleto : "";
                    return nombreCompleto.toLowerCase().includes(this.input.toLowerCase());
                });
            }

            if (this.selectedCategory == 'Telefono') {
                return this.leads.filter(lead => {
                    const telefonoSearch = lead && lead.telefono ? lead.telefono : "";
                    return telefonoSearch.toLowerCase().includes(this.input.toLowerCase());
                });
            }

            if (this.selectedCategory == 'CorreoElectronico') {
                return this.leads.filter(lead => {
                    const correoElectronicoSearch = lead && lead.CorreoElectronico ? lead.CorreoElectronico : "";
                    return correoElectronicoSearch.toLowerCase().includes(this.input.toLowerCase());
                });
            }

            if (this.selectedCategory == 'EscuelaProcedencia') {
                return this.leads.filter(lead => {
                    const escuelaProcedenciaSearch = lead && lead.EscuelaProcedencia ? lead.EscuelaProcedencia : "";
                    return escuelaProcedenciaSearch.toLowerCase().includes(this.input.toLowerCase());
                });
            }

            if (this.selectedCategory == 'Pais') {
                return this.leads.filter(lead => {
                    const paisSearch = lead && lead.NombrePais ? lead.NombrePais : "";
                    return paisSearch.toLowerCase().includes(this.input.toLowerCase());
                });
            }

            if (this.selectedCategory == 'Estado') {
                return this.leads.filter(lead => {
                    const estadoSearch = lead && lead.NombreEstado ? lead.NombreEstado : "";
                    return estadoSearch.toLowerCase().includes(this.input.toLowerCase());
                });
            }

            if (this.selectedCategory == 'Ciudad') {
                return this.leads.filter(lead => {
                    const ciudadSearch = lead && lead.NombreCiudad ? lead.NombreCiudad : "";
                    return ciudadSearch.toLowerCase().includes(this.input.toLowerCase());
                });
            }
        },
    },
    mounted() {
        this.loadLeads();
        this.loadContactos()
        this.loadPromotor();
        this.loadMedioContacto();
        this.loadCarreras();
        this.loadCampana();

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
        async loadPromotor() {
            try {
                const response = await axios.get('http://localhost:4000/promotores');
                if (response.data && response.data.listPromotores) {
                    this.Promotores = response.data.listPromotores;
                }
            } catch (error) {
                console.log('Error al obtener las carreras:', error);
            }
        },
        async loadMedioContacto() {
            try {
                const response = await axios.get('http://localhost:4000/medio-contacto');
                if (response.data && response.data.listMediosDeContacto) {
                    this.medioContactos = response.data.listMediosDeContacto;
                }
            } catch (error) {
                console.log('Error al obtener las carreras:', error);
            }
        },
        async loadCarreras() {
            try {
                const response = await axios.get('http://localhost:4000/carrera');
                if (response.data && response.data.carreras) {
                    this.Carreras = response.data.carreras;
                }
            } catch (error) {
                console.log('Error al obtener las carreras:', error);
            }
        },
        async loadCampana() {
            try {
                const response = await axios.get('http://localhost:4000/campanas');
                if (response.data && response.data.campanas) {
                    this.Campanas = response.data.campanas;
                }
            } catch (error) {
                console.log('Error al obtener las carreras:', error);
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
            if (date) {
                const formattedDate = format(new Date(date), "dd/MM/yyyy");
                return formattedDate;
            } else {
                return '';
            }
            // Formatea la fecha utilizando date-fns

        },
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        selectCategory(category) {
            this.selectedCategory = category;
            this.isDropdownOpen = false;
            // Aquí puedes realizar cualquier otra acción necesaria con la categoría seleccionada
        },

        BorrarFiltros() {
            this.selectedFiltrado = 'PSeguimiento';
            this.subSelectedFiltrado = null;
            this.input = '';
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
                this.loadPromotor;
                this.loadMedioContacto;
                this.loadCarreras;
                this.loadCampana;
            },
        },
        inmediate: true,
    },
    components: {
        DashboardLayout,
        Table,
        TableDataCell,
        TableHeaderCell,
        TableRow,
    },
};

</script>