<template>
    <header>
        <div class="lg:ml-64 p-4">
            <i class="fa-solid fa-address-book text-2xl" style="color: #48c9b0"></i>
            <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Registro de Contactos</span>
        </div>

        <SideBarPromotor class="lg:w-64 md:w-48 sm:w-32" /> <!-- Importa y utiliza el componente SidebarADM -->

    </header>

    <section>
        <div class="flex-1 lg:ml-64">
            <form @submit.prevent="crearComentario">
                <div>
                    <br>

                    <div
                        class="max-w-sm p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h2 class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl">
                            Añadir Registro
                        </h2>
                        <br>

                        <div class="grid gap-4 mb-4 grid-cols-1">
                            <div class="mb-4 col-span-full md:col-span-1 text-center">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="fechanacimiento">
                                    Fecha de Comentario:
                                </label>
                                <!-- checar -->
                                <DatePicker v-model="registro.FechaContacto" placeholder="Fecha de Comentario"
                                    class="input-field rounded-md" />
                            </div>
                            <br>
                            <div class="col-span-1">
                                <label for="comentario"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comentario</label>
                                <textarea v-model="registro.Comentario" id="comentario" rows="4"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Agrega un comentario del contacto"></textarea>
                            </div>
                        </div>

                        <button type="submit"
                            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Agregar
                            comentario</button>
                        <button type="button" @click="backLeads()"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancelar</button>



                    </div>


                </div>
            </form>
        </div>
    </section>
</template>
 
<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { getUserName } from "../../sessions";
import SideBarPromotor from "../../components/SideBarProm.vue";
import DatePicker from "vue3-datepicker";
import axios from "axios";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { th } from "date-fns/locale";

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
});

export default {
    setup() {

        const notify = () => {
            toast("Se ha creado el comentario!", {
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

        const errComentario = () => {
            toast("No se pudo crear el comentario", {
                autoClose: 2000,
                type: 'error'
            }); // ToastOptions
        }

        const errDatos = () => {
            toast("Campos vacios", {
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

        const infoNotify = () => {
            toast("Se ha creado el la Información... ", {
                autoClose: 2000,
                type: 'error'
            }); // ToastOptions
        }

        return { notify, errAsignacion, infoNotify, errComentario, errDatos };
    },

    props: ["selectContacto"],
    data() {
        return {
            userName: getUserName(),
            lead: null,
            registro: {
                LeadID: null,
                FechaContacto: new Date(),
                Comentario: null,
                nombrePromotor: null,
            },
            valorId: null,
        };

    },
    mounted() {
        this.valorId = this.selectContacto;

    },
    methods: {
        async crearComentario() {
            const endpoint = 'http://localhost:4000/contacto/create';
            this.registro.LeadID = this.valorId;
            this.registro.nombrePromotor = this.userName;
            console.log(this.registro);
            if (this.registro.FechaContacto == null && this.registro.Comentario == null) {
                this.errDatos();

            }
            try {
                const response = await axios.post(endpoint, this.registro);
                console.log(response);
                this.notify();

            } catch (error) {
                console.error(error);
                this.errComentario

            }
            this.registro.Comentario = null;
            this.registro.FechaContacto = null;
        },
        backLeads() {
            this.$router.push({ name: "leads-promotor" });
        },

    },
    components: { SideBarPromotor, DatePicker }
};

</script>
 
<style></style>