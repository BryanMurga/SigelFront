<script>
import axios from 'axios';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import DashboardLayout from '../../layouts/DashboardLayout.vue';
import InputLabel from '../../components/InputLabel.vue';
import Modal from '../../components/Modal/Modal.vue';
import ModalSection from '../../components/Modal/ModalSection.vue';
import Table from '../../components/Table.vue';
import TableDataCell from '../../components/TableDataCell.vue';
import TableHeaderCell from '../../components/TableHeaderCell.vue';
import TableRow from '../../components/TableRow.vue';
import TextInput from '../../components/TextInput.vue';

export default {
    components: {
        DashboardLayout, 
        InputLabel,
        Modal,
        ModalSection,
        Table, 
        TableDataCell, 
        TableHeaderCell, 
        TableRow,
        TextInput
    },
    //types of toast
    setup() {
        const success = () => {
            toast("Se ha creado una campaña correctamente", {
                autoClose: 3000,
                type: 'success'
            }); // ToastOptions
        }

        const error = () => {
            toast("Hubo un error al crear una campaña", {
                autoClose: 2000,
                type: 'error'
            }); // ToastOptions
        }

        return { success, error };
    },
    data() {
        return {
            campanas: [],
            formData: {
                TipoCamp: "",
                Nombre: "",
            },
        };
    },
    mounted() {
        // Cuando el componente se monta, hace la solicitud para obtener las campañas
        this.getCampanas();
    },
    methods: {
        async getCampanas() {
            try {
                // Realiza una solicitud GET al endpoint /campanas en tu backend
                const response = await axios.get('http://localhost:3000/api/campanas');
                // Asigna los datos de respuesta al array campanas
                this.campanas = response.data;
            } catch (error) {
                console.error('Error al obtener las campañas:', error);
            }
        },
        async sendData(event) {
            event.preventDefault();

            try {
                const response = await axios.post("http://localhost:3000/api/campana", {
                    TipoCamp: this.formData.TipoCamp,
                    Nombre: this.formData.Nombre,
                });

                this.success();

                 // Añade el nuevo dato a la lista de campañas
                this.campanas.push(response.data);

                // Limpia los campos después de que la solicitud POST haya sido exitosa
                this.formData.TipoCamp = "";
                this.formData.Nombre = "";

            } catch (error) {
                console.error("Error", error.response.data);
                this.error();
            }
        },
        // Método para obtener la etiqueta del estado basado en el valor numérico
        getStatusLabel(status) {
            switch (status) {
                case 0:
                    return 'Inactivo';
                case 1:
                    return 'Activo';
                case 2:
                    return 'En proceso';
                default:
                    return 'Desconocido';
            }
        },
        // Método para obtener la clase de color basada en el valor numérico del estado
        getStatusColor(status) {
            switch (status) {
                case 0:
                    return 'font-medium text-red-600'; // Rojo
                case 1:
                    return 'font-medium text-green-700'; // Verde
                case 2:
                    return 'font-medium text-amber-500'; // Amarillo
                default:
                    return ''; // Por defecto, no se aplica ningún color
            }
        },
    },
};
</script>

<template>
    <DashboardLayout name="Campañas">
        <section>
            <!-- Button Crear camapaña -->
            <div class="flex justify-end p-4">
                <button
                    data-modal-toggle="create-campaing"
                    data-modal-target="create-campaing"
                    class="flex gap-2 py-2 px-4 text-white bg-sky-800 hover:bg-sky-700 rounded-md duration-200"
                >   
                    Crear camapaña
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>

            <Modal id="create-campaing" name="Creación de Campaña" modalToggle="create-campaing">
                <div class="w-full">
                    <form @submit="sendData">
                        <div>
                            <InputLabel for="TipoCamp" value="Tipo de Campaña" />
                            <TextInput
                                id="TipoCamp"
                                v-model="formData.TipoCamp"
                                type="text"
                                class="mt-1 block w-full"
                                placeholder="Ingrese el tipo de campaña"
                            />
                        </div>

                        <div class="mt-4">
                            <InputLabel for="Nombre" value="Nombre de la Campaña" />
                            <TextInput
                                id="Nombre"
                                v-model="formData.Nombre"
                                type="text"
                                class="mt-1 block w-full"
                                placeholder="Ingrese el nombre de la campaña"
                            />
                        </div>

                        <div class="mt-4 flex justify-end">
                            <button 
                                @submit="sendData"
                                data-modal-toggle="create-campaing"
                                class="py-2 px-4 text-white bg-green-600 hover:bg-green-700 rounded-md duration-200"
                            >
                                Crear nueva  campaña
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
            

            <Table v-if="campanas.length > 0">
                <template #header>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Tipo de Campaña</TableHeaderCell>
                        <TableHeaderCell>Nombre de Campaña</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                        <TableHeaderCell>Acciones</TableHeaderCell>
                    </TableRow>
                </template>
                <template #default>
                    <TableRow v-for="campana in campanas" :key="campana.id">
                        <TableDataCell>{{ campana.CampanaID }}</TableDataCell>
                        <TableDataCell>{{ campana.TipoCamp }}</TableDataCell>
                        <TableDataCell>{{ campana.Nombre }}</TableDataCell>
                        <TableDataCell :class="getStatusColor(campana.Status)">
                            {{ getStatusLabel(campana.Status) }}
                        </TableDataCell>
                    </TableRow>
                </template>
            </Table>
            <div v-else class="w-full">
                No hay ninguna campaña registrada en este momento.
            </div>
        </section>
    </DashboardLayout>
</template>