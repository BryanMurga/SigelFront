<template>
    <DashboardLayout name="Alumnos">

        <form class="flex items-center relative gap-2">
            <!-- Dropdown button -->
            <div class="relative flex-shrink-0">
                <button @click="toggleDropdown"
                    class="flex-shrink-0 inline-flex items-center py-3.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    type="button">
                    {{ selectedCategory }}
                    <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                <!-- Dropdown menu -->
                <div v-if="isDropdownOpen" id="dropdown"
                    class="absolute top-full left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 z-50">
                    <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
                        <SearchListItem v-for="category in categories" :key="category" :label="category"
                            :onClick="selectCategory" />
                    </ul>
                </div>
            </div>
            <!-- Search input -->
            <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input v-model="searchQuery" type="search" id="default-search" name="leadSearch"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Buscar registros" required />
            </div>
        </form>

        <!-- Modal -->
        <Modal id="gestion-modal" name="Gestión Alumno" modalToggle="gestion-modal">
            <!-- Datos Personales -->
            <ModalSection name="Datos Académicos">
                <!-- Nombre -->
                <SectionInput label="Nombre de Alumno">
                    <template #input>
                        <InputModal id="name" type="text" placeholder="Ingresa nombre completo"
                            v-model:student="updateAlumno.inputNombre" />
                    </template>
                </SectionInput>
                <!-- Correo -->
                <SectionInput label="Correo Institucional">
                    <template #input>
                        <InputModal type="email" placeholder="Ingresa correo electrónico"
                            v-model:student="updateAlumno.inputCorreoInstitucional" />
                    </template>
                </SectionInput>
                <!-- Num recibo -->
                <SectionInput label="Número de recibo">
                    <template #input>
                        <InputModal type="text" placeholder="Ingresa número de recibo"
                            v-model:student="updateAlumno.inputNoRecibo" />
                    </template>
                </SectionInput>
                <!-- Matricula -->
                <SectionInput label="Matricula">
                    <template #input>
                        <InputModal type="text" placeholder="Ingresa matrícula"
                            v-model:student="updateAlumno.inputMatricula" />
                    </template>
                </SectionInput>
                <!-- Escuela -->
                <SectionInput label="Escuela de Procedencia">
                    <template #input>
                        <InputModal type="text" placeholder="Ingresa escuela de procedencia"
                            v-model:student="updateAlumno.inputEscuelaProcedencia" />
                    </template>
                </SectionInput>
            </ModalSection>

            <!-- Datos de Redes -->
            <ModalSection name="Datos de redes">
                <!-- Telefono -->
                <SectionInput label="Teléfono familiar (Papá, Mamá, Tutor, etc)">
                    <template #input>
                        <InputModal type="tel" id="number" placeholder="Ingresa número de teléfono"
                            v-model:student="updateAlumno.inputTelefonoFamiliar" />
                    </template>
                </SectionInput>
                <!-- Facebook -->
                <SectionInput label="Facebook">
                    <template #input>
                        <InputModal type="text" id="rsFacebook" placeholder="Ingresa usuario de Facebook"
                            v-model:student="updateAlumno.inputFacebook" />
                    </template>
                </SectionInput>
                <!-- Instagram -->
                <SectionInput label="Instagram">
                    <template #input>
                        <InputModal type="text" id="rsInsta" placeholder="Ingresa usuario de Instagram"
                            v-model:student="updateAlumno.inputInsta" />
                    </template>
                </SectionInput>
                <!-- Tiktok -->
                <SectionInput label="TikTok">
                    <template #input>
                        <InputModal type="text" id="rsTK" placeholder="Ingresa usuario de Tiktok"
                            v-model:student="updateAlumno.inputTikTok" />
                    </template>
                </SectionInput>
                <!-- LinkedIn -->
                <SectionInput label="LinkedIn">
                    <template #input>
                        <InputModal type="text" id="rsLink" placeholder="Ingresa usuario de LinkedIn"
                            v-model:student="updateAlumno.inputLink" />
                    </template>
                </SectionInput>
                <!-- Twitter -->
                <SectionInput label="X (Twitter)">
                    <template #input>
                        <InputModal type="text" id="rsTwiter" placeholder="Ingresa usuario de X (Twitter)"
                            v-model:student="updateAlumno.inputTwiter" />
                    </template>
                </SectionInput>
                <!-- WhatsApp -->
                <SectionInput label="WhatsApp">
                    <template #input>
                        <InputModal type="tel" id="rsWhatsapp" placeholder="Ingresa número de teléfono personal"
                            v-model:student="updateAlumno.inputWhatsapp" />
                    </template>
                </SectionInput>
                <!-- Otro -->
                <SectionInput label="Otro">
                    <template #input>
                        <InputModal type="tel" id="rsOtro" placeholder="Ingresa..."
                            v-model:student="updateAlumno.inputOtro" />
                    </template>
                </SectionInput>
            </ModalSection>

            <!-- Datos de Inscripcion -->
            <ModalSection name="Datos de programa">
                <!-- Carrera Inscripcion -->
                <SectionInput label="Carrera de Inscripción">
                    <template #input>
                        <SelectModal id="carrera-inscripcion" v-model:student="updateAlumno.inputCarreraInscripcion">
                            <option v-for=" carrera in carreraInscrita" :key="carrera.CarreraID" :value="carrera.CarreraID">
                                {{ carrera.Nombre }}
                            </option>
                        </SelectModal>
                    </template>
                </SectionInput>
                <!-- Procedencia -->
                <SectionInput label="Procedencia">
                    <template #input>
                        <SelectModal id="procedencia" v-model:student="updateAlumno.inputProcedencia">
                            <option v-for=" procedencia  in  Procedencia " :key="procedencia" :value="procedencia">
                                {{ procedencia }}
                            </option>
                        </SelectModal>
                    </template>
                </SectionInput>
                <!-- Promotor -->
                <SectionInput label="Promotor">
                    <template #input>
                        <SelectModal id="promotor" v-model:student="updateAlumno.inputPromotor">
                            <option v-for=" promotor in Promotores" :key="promotor.PromotorID" :value="promotor.PromotorID">
                                {{ promotor.Nombre }}
                            </option>
                        </SelectModal>
                    </template>
                </SectionInput>
            </ModalSection>

            <button @click="actualizarAlumno(alumnoParaGestionar, $event)" type="submit" data-modal-toggle="gestion-modal"
                class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z">
                    </path>
                </svg>
                Actualizar datos
            </button>
        </Modal>

        <!-- Modal de baja alumno -->
        <Modal name="Baja Alumno" modalToggle="delete-modal">
            <!-- Carrera Inscripcion -->
            <SectionInput label="Selecciona un mótivo de baja">
                <template #input>
                    <SelectModal id="estatus" v-model:student="updateAlumno.inputTipoBaja">
                        <option v-for="est in tipoBaja" :key="est" :value="est">
                            {{ est }}
                        </option>
                    </SelectModal>
                </template>
            </SectionInput>
            <!-- Comentario -->
            <SectionInput label="Comentario">
                <template #input>
                    <textarea v-model="updateAlumno.inputComentario" rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Agrega un comentario acerca de la baja"></textarea>
                </template>
            </SectionInput>

            <div class="mt-4">
                <button @click="bajaTipoAlumno(alumnoParaGestionar, $event)" type="submit" data-modal-toggle="delete-modal"
                    class="flex flex-row py-2 px-4 gap-2 text-white bg-red-700 hover:bg-red-800 rounded-md duration-200">
                    Dar de Baja
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-files-off" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 17h-6a2 2 0 0 1 -2 -2v-6m0 -4a2 2 0 0 1 2 -2h4l5 5v7c0 .294 -.063 .572 -.177 .823" />
                        <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" />
                        <path d="M3 3l18 18" />
                    </svg>

                </button>
            </div>
        </Modal>

        <!-- Modal de Reactivar alumno -->
        <Modal id="reactivate-modal" name="Reactivar Alumno" modalToggle="reactivate-modal">
            <!-- Comentario -->
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                Fecha de Baja
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Comentario
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr v-for="comentario in  comentarios" :key="comentario.ContactoAlumnoID"
                            class="border-b border-gray-200 dark:border-gray-700">
                            {{ formatDate(comentario.FechaContacto) }}
                            <th scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {{ formatDate(comentario.FechaContacto) }}
                            </th>
                            <td
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {{ comentario.Comentario }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="comentarios.length > 0">
                <h2>Comentarios</h2>
                <ul>
                <li v-for="comentario in comentarios" :key="comentario.ContactoAlumnoID">
                    <p>Fecha: {{ formatDate(comentario.FechaContacto) }}</p>
                    <p>Comentario: {{ comentario.Comentario }}</p>
                </li>
                </ul>
            </div>

            <div>
                <h2>Comentarios (Debug)</h2>
                <pre>{{ comentarios }}</pre>
            </div>

            
            <!-- Carrera Inscripcion -->
            <br>
            <SectionInput label="Selecciona un mótivo de baja">
                <template #input>
                    <SelectModal id="estatus" v-model:student="updateAlumno.inputTipoBaja">
                        <option v-for="est in tipoBaja" :key="est" :value="est">
                            {{ est }}
                        </option>
                    </SelectModal>
                </template>
            </SectionInput>
            <div class="mt-4">
                <button @click="bajaTipoAlumno(alumnoParaGestionar, $event)" type="submit" data-modal-toggle="reactivate-modal"
                    class="flex flex-row py-2 px-4 gap-2 text-white bg-red-700 hover:bg-red-800 rounded-md duration-200">
                    Reactivar Alumno
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-files-off" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 17h-6a2 2 0 0 1 -2 -2v-6m0 -4a2 2 0 0 1 2 -2h4l5 5v7c0 .294 -.063 .572 -.177 .823" />
                        <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" />
                        <path d="M3 3l18 18" />
                    </svg>
                </button>
            </div>
        </Modal>

        <!-- Tabla -->
        <section class="pt-14">
            <Table>
                <template #header>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Nombre</TableHeaderCell>
                        <TableHeaderCell>Teléfono</TableHeaderCell>
                        <TableHeaderCell>Escuela de Procedencia</TableHeaderCell>
                        <TableHeaderCell>Numero de recibo</TableHeaderCell>
                        <TableHeaderCell>Matricula</TableHeaderCell>
                        <TableHeaderCell>Carrera de Inscripción</TableHeaderCell>
                        <TableHeaderCell>Procedencia</TableHeaderCell>
                        <TableHeaderCell>Estatus</TableHeaderCell>
                        <TableHeaderCell>Correo Institucional</TableHeaderCell>
                        <TableHeaderCell>Acciones</TableHeaderCell>
                    </TableRow>
                </template>
                <template #default>
                    <TableRow v-for=" alumno  in  filteredAlumnos " :key="alumno.AlumnoID">
                        <TableDataCell>{{ alumno.AlumnoID }}</TableDataCell>
                        <TableDataCell>{{ alumno.NombreAlumno }}</TableDataCell>
                        <TableDataCell>{{ alumno.Telefono }}</TableDataCell>
                        <TableDataCell>{{ alumno.EscuelaProcedencia }}</TableDataCell>
                        <TableDataCell>{{ alumno.NoRecibo }}</TableDataCell>
                        <TableDataCell>{{ alumno.Matricula }}</TableDataCell>
                        <TableDataCell>{{ alumno.CarreraInsc }}</TableDataCell>
                        <TableDataCell>{{ alumno.Procedencia }}</TableDataCell>
                        <TableDataCell :class="alumno.Estatus === 'INSC' ? 'text-green-600' : 'text-red-600'">
                            {{ alumno.Estatus }}
                        </TableDataCell>
                        <TableDataCell>{{ alumno.CorreoInstitucional }}</TableDataCell>
                        <TableDataCell>
                            <div class="flex flex-col lg:flex-row gap-4 w-56">
                                <button @click="asignarAlumno(alumno.AlumnoID)" data-modal-target="gestion-modal"
                                    data-modal-toggle="gestion-modal" type="button"
                                    class="py-2 px-4 text-white text-sm font-normal bg-blue-700 hover:bg-blue-800 rounded-md duration-150">
                                    Gestionar
                                </button>
                                <button @click="asignarAlumno(alumno.AlumnoID)" data-modal-target="delete-modal"
                                    data-modal-toggle="delete-modal" type="button"
                                    class="py-2 px-4 text-white text-sm font-normal bg-red-700 hover:bg-red-800 rounded-md duration-150"
                                    v-if="alumno.Estatus === 'INSC'">
                                    Dar de baja
                                </button>
                                <button @click="VerComentarioModal(alumno.AlumnoID)" data-modal-target="reactivate-modal"
                                    data-modal-toggle="reactivate-modal" type="button"
                                    class="py-2 px-4 text-white text-sm font-normal bg-green-500 hover:bg-green-600 rounded-md duration-150"
                                    v-if="alumno.Estatus === 'BAJA'">
                                    Reactivar
                                </button>
                            </div>
                        </TableDataCell>
                    </TableRow>
                </template>
            </Table>
        </section>
    </DashboardLayout>
</template>
 
<script>
import axios from "axios";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { getUserName } from "../../sessions";
import DatePicker from "vue3-datepicker";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import DashboardLayout from "../../layouts/DashboardLayout.vue";
import Table from "../../components/Table.vue";
import TableDataCell from "../../components/TableDataCell.vue";
import TableHeaderCell from "../../components/TableHeaderCell.vue";
import TableRow from "../../components/TableRow.vue";
import SearchListItem from "../../components/SearchListItem.vue";
import Modal from '../../components/Modal/Modal.vue';
import ModalSection from "../../components/Modal/ModalSection.vue";
import SectionInput from '../../components/Modal/SectionInput.vue';
import InputModal from '../../components/Modal/InputModal.vue';
import SelectModal from "../../components/Modal/SelectModal.vue";

onMounted(() => {
    initFlowbite();
});

export default {

    //types of toast
    setup() {

        const notify = () => {
            toast("Se ha actualizado los leads Seleccionados!", {
                autoClose: 3000,
                type: 'success'
            }); // ToastOptions
        }

        const errUpdate = () => {
            toast(`"No hay cambios para actualizar.`, {
                autoClose: 2000,
                type: 'warning'
            }); // ToastOptions
        }

        const errLeads = () => {
            toast("Tienes que seleccionar leads antes de actualizarlos", {
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

        const errActualizarPromotores = () => {
            toast("Error al actualizar los leads", {
                autoClose: 2000,
                type: 'error'
            }); // ToastOptionsnopm
        }

        const actualizarLeadNotify = () => {
            toast("Lead actualizado con éxito", {
                autoClose: 3000,
                type: 'success'
            }); // ToastOptions

        }

        const errorActualizarLeadNotify = () => {
            toast("Error al actualizar el lead", {
                autoClose: 3000,
                type: 'error'
            }); // ToastOptions
        }

        const infoNotify = () => {
            toast("Se ha actualizado la Información... ", {
                autoClose: 2000,
                type: 'error'
            }); // ToastOptions
        }

        return { notify, errUpdate, infoNotify, errLeads, errPromotores, actualizarLeadNotify, errorActualizarLeadNotify };
    },

    data() {
        return {
            categories: ['Nombre', 'Telefono', 'Escuela', 'NumeroRecibo', 'Matricula', 'CorreoInstitucional'],
            userName: getUserName(),
            alumnos: [],
            leadIndividual: [],
            comparacionAlumno: [],
            searchQuery: "",
            redes: null,
            isDropdownOpen: false,
            selectedCategory: 'Nombre',
            filtradoSelect: ['Carrera', 'Procedencia', 'Estatus'],
            selectedFiltrado: 'Carrera',
            subSelectedFiltrado: null,
            carreraInscrita: [],
            Promotores: [],
            Procedencia: ['Local', 'Foraneo'],
            tipoBaja: ['Temporal', 'Definitiva'],
            Estatus: ['INSC', 'BAJA'],
            alumnoParaGestionar: null,
            input: '',
            updateAlumno: {
                inputNombre: null,
                inputCorreoInstitucional: null,
                inputNoRecibo: null,
                inputMatricula: null,
                inputEscuelaProcedencia: null,
                inputTelefonoFamiliar: null,
                inputCarreraInscripcion: null,
                inputProcedencia: null,
                inputPromotor: null,
                inputEstatus: null,
                inputTipoBaja: null,
                inputCorreo2: null,
                inputFechaNacimiento: null,
                inputFechaPrimerContacto: null,
                inputPSeguimiento: null,
                inputCarreraInteres: null,
                inputGrado: null,
                inputPrograma: '',
                inputPrograma: null,
                inputEstatusInscripcion: null,
                inputSemestreIngreso: null,
                inputFacebook: null,
                inputInsta: null,
                inputTikTok: null,
                inputLink: null,
                inputTwiter: null,
                inputWhatsapp: null,
                inputOtro: null,
                inputTipoReferido: null,
                inputNombreReferido: null,
                inputDondeObtuvoDato: null,
                inputFechaInscripcion: null,
                inputComentario: null,
            },
            comentarios: [],
        };

    },
    mounted() {
        this.loadAlumnos();
        this.loadRedes();
        this.loadCarreras();
        this.loadDatosAlumnos();
        this.loadPromotor();
        this.loadComentarios();
    },
    computed: {
        filteredAlumnos() {
            if (this.alumnos.length === 0) {
                return [];
            }
            console.log(this.subSelectedFiltrado);

            if (this.selectedFiltrado == 'Carrera' && this.subSelectedFiltrado) {
                return this.alumnos.filter(alumno => {
                    const carreraSelect = alumno && alumno.CarreraInsc ? alumno.CarreraInsc : "";
                    return carreraSelect.includes(this.subSelectedFiltrado);
                });
            }

            if (this.selectedFiltrado == 'Procedencia' && this.subSelectedFiltrado) {
                return this.alumnos.filter(alumno => {
                    const procedenciaSelect = alumno && alumno.Procedencia ? alumno.Procedencia : "";
                    return procedenciaSelect.includes(this.subSelectedFiltrado);
                });
            }

            if (this.selectedFiltrado == 'Estatus' && this.subSelectedFiltrado) {
                return this.alumnos.filter(alumno => {
                    const estatusSelect = alumno && alumno.Estatus ? alumno.Estatus : "";
                    return estatusSelect.includes(this.subSelectedFiltrado);
                });
            }

            if (this.selectedCategory == 'Nombre') {
                return this.alumnos.filter(alumno => {
                    const nombreCompleto = alumno && alumno.NombreAlumno ? alumno.NombreAlumno : "";
                    return nombreCompleto.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            }

            if (this.selectedCategory == 'Telefono') {
                return this.alumnos.filter(alumno => {
                    const telefonoSearch = alumno && alumno.Telefono ? alumno.Telefono : "";
                    return telefonoSearch.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            }

            if (this.selectedCategory == 'Escuela') {
                return this.alumnos.filter(alumno => {
                    const escuelaProcedenciaSearch = alumno && alumno.EscuelaProcedencia ? alumno.EscuelaProcedencia : "";
                    return escuelaProcedenciaSearch.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            }

            if (this.selectedCategory == 'NumeroRecibo') {
                return this.alumnos.filter(alumno => {
                    const alumnoSearch = alumno && alumno.NoRecibo ? alumno.NoRecibo : "";
                    return alumnoSearch.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            }

            if (this.selectedCategory == 'Matricula') {
                return this.alumnos.filter(alumno => {
                    const matriculaSearch = alumno && alumno.Matricula ? alumno.Matricula : "";
                    return matriculaSearch.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            }

            if (this.selectedCategory == 'CorreoInstitucional') {
                return this.alumnos.filter(alumno => {
                    const correoSearch = alumno && alumno.CorreoInstitucional ? alumno.CorreoInstitucional : "";
                    return correoSearch.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            }
        },
    },
    methods: {
        async loadAlumnos() {
            try {
                // Reemplaza 'tu-endpoint' con la URL real de tu endpoint
                const response = await axios.get('http://localhost:4000/alumno/coordinador');
                if (response.data && response.data) {
                    this.alumnos = response.data.alumnos;
                    // Almacena los leads en el array
                }
                console.log(this.alumnos);
            } catch (error) {
            }
            this.loadComentarios();
        },

        async asignarAlumno(alumnoID) {
            await this.loadRedes(alumnoID);
            await this.loadDatosAlumnos(alumnoID);
            await this.bajaTipoAlumno(alumnoID);
            await this.loadComentarios(alumnoID);
            await this.VerComentarioModal(alumnoID);
        },

        async VerComentarioModal(id) {
            await this.loadComentarios(id);
        },

        async loadComentarios(alumnoID) {
    if (alumnoID) {
        try {
            const response = await axios.get(`http://localhost:4000/contacto-alumno/${alumnoID}`);
            this.comentarios = response.data.alumno.comentarios;
            
            if (this.comentarios) {
                this.$nextTick(() => {
                    this.$modal.show('reactivate-modal');
                });
            } else {
                console.error('El objeto de comentarios es nulo o indefinido');
            }
        } catch (error) {
            console.error('Error al obtener los comentarios contacto:', error);
            // Manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario
        }
    }
},


        async bajaTipoAlumno(alumnoID, event) {
            event.preventDefault();
            try {
                const response = await axios.put(`http://localhost:4000/Alumno/baja/${alumnoID}`, {
                    TipoBaja: this.updateAlumno.inputTipoBaja,
                });
                this.actualizarLeadNotify();
                this.comentarioBaja(alumnoID, this.updateAlumno.inputComentario);
                console.log(response.data); // Manejar la respuesta del servidor
                // Puedes mostrar un mensaje de éxito o realizar alguna acción adicional
            } catch (error) {
                this.errorActualizarLeadNotify();
                // Puedes mostrar un mensaje de error al usuario o realizar alguna otra acción
            }
            this.loadAlumnos();
        },

        comentarioBaja(AlumnoID, Comentario) {
            try {
                const response = axios.post(`http://localhost:4000/contacto-alumno/create`, {
                    alumnoID: AlumnoID,
                    Comentario: Comentario,

                });
                console.log(response);
            } catch (error) {
                console.error(error);
                this.errComentario
            }
            this.loadAlumnos();

        },

        async loadRedes(alumnoID) {
            console.log(alumnoID);

            try {
                if (!alumnoID) return this.redes = [];
                const response = await axios.get(`http://localhost:4000/alumno/redes/${alumnoID}`);
                this.redes = response.data.redes || [];
                this.updateAlumno.inputFacebook = this.redes.RSFacebook;
                this.updateAlumno.inputInsta = this.redes.RSInstagram;
                this.updateAlumno.inputTikTok = this.redes.RSTiktok;
                this.updateAlumno.inputLink = this.redes.RsLinkedln;
                this.updateAlumno.inputTwiter = this.redes.RsTwiter;
                this.updateAlumno.inputWhatsapp = this.redes.RSWhatsapp;
                this.updateAlumno.inputOtro = this.redes.RSOtro;

                console.log(this.redes);
            } catch (error) {

                console.error('Error al cargar las redes', error);
            }
        },

        async loadDatosAlumnos(alumnoID) {
            if (!alumnoID) return this.leadIndividual = [];

            try {
                const response = await axios.get(`http://localhost:4000/alumno/${alumnoID}`);
                if (response.data && response.data.alumno) {

                    this.comparacionAlumno = response.data.alumno;

                    this.leadIndividual = response.data.alumno;
                    this.updateAlumno.inputNombre = this.leadIndividual.nombreAlumno;
                    this.updateAlumno.inputCorreoInstitucional = this.leadIndividual.CorreoInstitucional;
                    this.updateAlumno.inputNoRecibo = this.leadIndividual.NoRecibo;
                    this.updateAlumno.inputMatricula = this.leadIndividual.Matricula;
                    this.updateAlumno.inputEscuelaProcedencia = this.leadIndividual.EscuelaProcedencia;
                    this.updateAlumno.inputTelefonoFamiliar = this.leadIndividual.Telefono;
                    this.updateAlumno.inputFacebook = this.leadIndividual.RSFacebook;
                    this.updateAlumno.inputInsta = this.leadIndividual.RSInstagram;
                    this.updateAlumno.inputTikTok = this.leadIndividual.RSTiktok;
                    this.updateAlumno.inputLink = this.leadIndividual.RSLinkedln;
                    this.updateAlumno.inputTwiter = this.leadIndividual.RSTwiter;
                    this.updateAlumno.inputWhatsapp = this.leadIndividual.RSWhatsapp;
                    this.updateAlumno.inputOtro = this.leadIndividual.RSOtro;
                    this.updateAlumno.inputCarreraInscripcion = this.leadIndividual.CarreraInscripcion;
                    this.updateAlumno.inputProcedencia = this.leadIndividual.Procedencia;
                    this.updateAlumno.inputPromotor = this.leadIndividual.PromotorID;
                    this.alumnoParaGestionar = this.leadIndividual.AlumnoID;
                    this.updateAlumno.inputTipoBaja = this.leadIndividual.TipoBaja;

                    this.loadComentarios(this.leadIndividual.AlumnoID);
                }
            } catch (error) {
                console.log('Error al obtener los datos del alumno:', error);
            }
            this.updateAlumno.inputComentario = null;
        },

        async actualizarAlumno(alumnoID, event) {
            event.preventDefault();

            // Verificar si hay cambios
            const hayCambios = this.hayCambiosEnDatos();

            if (hayCambios) {
                try {

                    const response = await axios.put(`http://localhost:4000/Alumno/update/${alumnoID}`, {

                        // Datos a actualizar
                        Nombre: this.updateAlumno.inputNombre,
                        CorreoInstitucional: this.updateAlumno.inputCorreoInstitucional,
                        NoRecibo: this.updateAlumno.inputNoRecibo,
                        Matricula: this.updateAlumno.inputMatricula,
                        EscuelaProcedencia: this.updateAlumno.inputEscuelaProcedencia,
                        Telefono: this.updateAlumno.inputTelefonoFamiliar,
                        RSFacebook: this.updateAlumno.inputFacebook,
                        RSInstagram: this.updateAlumno.inputInsta,
                        RSTiktok: this.updateAlumno.inputTikTok,
                        RSLinkedln: this.updateAlumno.inputLink,
                        RSTwiter: this.updateAlumno.inputTwiter,
                        RSWhatsapp: this.updateAlumno.inputWhatsapp,
                        RSOtro: this.updateAlumno.inputOtro,
                        CarreraInscripcion: this.updateAlumno.inputCarreraInscripcion,
                        Procedencia: this.updateAlumno.inputProcedencia,
                        PromotorID: this.updateAlumno.inputPromotor,
                    });
                    this.actualizarLeadNotify();
                    console.log(response.data); // Manejar la respuesta del servidor

                    // Puedes mostrar un mensaje de éxito o realizar alguna acción adicional
                } catch (error) {
                    this.errorActualizarLeadNotify();
                    // Puedes mostrar un mensaje de error al usuario o realizar alguna otra acción
                }
            } else {
                console.log("No hay cambios para actualizar.");
                this.errUpdate();
            }
            this.loadAlumnos();
        },

        hayCambiosEnDatos() {
            // Aquí debes comparar los datos actuales con los datos originales para determinar si hay cambios
            // Puedes utilizar condiciones como (this.inputName !== this.leads.NombreCompleto) para cada campo
            // Devuelve true si hay algún cambio, y false si no hay cambios

            return this.updateAlumno.inputNombre !== this.comparacionAlumno.nombreAlumno
                || this.updateAlumno.inputCorreoInstitucional !== this.comparacionAlumno.CorreoInstitucional
                || this.updateAlumno.inputNoRecibo !== this.comparacionAlumno.NoRecibo
                || this.updateAlumno.inputMatricula !== this.comparacionAlumno.Matricula
                || this.updateAlumno.inputEscuelaProcedencia !== this.comparacionAlumno.EscuelaProcedencia
                || this.updateAlumno.inputTelefonoFamiliar !== this.comparacionAlumno.Telefono
                || this.updateAlumno.inputFacebook !== this.comparacionAlumno.RSFacebook
                || this.updateAlumno.inputInsta !== this.comparacionAlumno.RSInstagram
                || this.updateAlumno.inputTikTok !== this.comparacionAlumno.RSTiktok
                || this.updateAlumno.inputLink !== this.comparacionAlumno.RSLinkedln
                || this.updateAlumno.inputTwiter !== this.comparacionAlumno.RSTwiter
                || this.updateAlumno.inputWhatsapp !== this.comparacionAlumno.RSWhatsapp
                || this.updateAlumno.inputOtro !== this.comparacionAlumno.RSOtro
                || this.updateAlumno.inputCarreraInscripcion !== this.comparacionAlumno.CarreraInscripcion
                || this.updateAlumno.inputProcedencia !== this.comparacionAlumno.Procedencia
                || this.updateAlumno.inputPromotor !== this.comparacionAlumno.PromotorID;
        },


        async loadCarreras() {
            try {
                const response = await axios.get('http://localhost:4000/carrera');
                if (response.data && response.data.carreras) {
                    this.carreraInscrita = response.data.carreras;
                }
            } catch (error) {
                console.log('Error al obtener las carreras:', error);
            }
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

        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        selectCategory(category) {
            this.selectedCategory = category;
            this.isDropdownOpen = false;
        },
        BorrarFiltros() {
            this.selectedFiltrado = 'Carrera';
            this.subSelectedFiltrado = null;
            this.input = '';
        },
    },
    watch: {
        alumnos: {
            handler() {
                this.loadRedes;
                this.filteredAlumnos;
                this.loadAlumnos;
                this.loadCarreras;
                this.loadDatosAlumnos;
                this.loadPromotor;
                this.loadComentarios;
            },

        },
        inmediate: true
    },
    components: {
        DatePicker,
        DashboardLayout,
        Table,
        TableDataCell,
        TableHeaderCell,
        TableRow,
        SearchListItem,
        Modal,
        ModalSection,
        ModalSection,
        SectionInput,
        InputModal,
        SelectModal,
    }
};

</script>
