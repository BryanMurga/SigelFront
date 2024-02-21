<template>
  <DashboardLayout name="Promotores">
    <section class="max-w-lg mx-auto">
      <div class="relative flex-grow">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input v-model="searchQuery" type="search" name="leadSearch"
          class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2 md:mt-0"
          placeholder="Buscar registros por nombre" required />
      </div>
    </section>

    <section class="pt-4">
      <div class="flex justify-end my-4">
        <button @click="redirectToAgregarPromotor" type="button"
          class="py-2 px-4 text-white bg-sky-700 hover:bg-sky-800 duration-200 rounded-md">Registrar promotor</button>
      </div>
      <Table>
        <template #header>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>Correo Electrónico</TableHeaderCell>
            <TableHeaderCell>Teléfono</TableHeaderCell>
            <TableHeaderCell>Estado</TableHeaderCell>
            <TableHeaderCell>Acciones</TableHeaderCell>
          </TableRow>
        </template>
        <template #default>
          <TableRow v-for="promotor in filteredPromotores" :key="promotor.PromotorID">
            <TableDataCell>{{ promotor.PromotorID }}</TableDataCell>
            <TableDataCell>{{ promotor.Nombre }}</TableDataCell>
            <TableDataCell>{{ promotor.Correo }}</TableDataCell>
            <TableDataCell>{{ promotor.Telefono }}</TableDataCell>
            <TableDataCell :class="{
              'text-green-500': promotor.Estado,
              'text-red-500': !promotor.Estado,
            }">
              {{ promotor.Estado ? "Activo" : "Inactivo" }}
            </TableDataCell>
            <TableDataCell>
              <button @click="editPromotor(promotor)" data-modal-target="gestion-modal" data-modal-toggle="gestion-modal"
                type="button" class="py-2 px-4 text-black bg-amber-400 hover:bg-amber-500 duration-200 rounded-md">
                Editar
              </button>
            </TableDataCell>
          </TableRow>
        </template>
      </Table>
    </section>

    <!-- Modal -->
    <Modal id="gestion-modal" name="Editar Promotor" modalToggle="gestion-modal">
      <form class="w-full" @submit.prevent="actualizarPromotor">
        <!-- Nombre -->
        <div class="mb-4">
          <SectionInput label="Nombre del promotor">
            <template #input>
              <InputModal id="name" type="text" placeholder="Ingresa nombre completo"
                v-model:student="selectedPromotor.Nombre" />
            </template>
          </SectionInput>
        </div>

        <!-- Correo -->
        <div class="mb-4">
          <SectionInput label="Correo electrónico del promotor">
            <template #input>
              <InputModal id="email" type="email" placeholder="Ingresa correo electrónico"
                v-model:student="selectedPromotor.Correo" />
            </template>
          </SectionInput>
        </div>

        <!-- Contraseña -->
        <div class="mb-4">
          <SectionInput label="Contraseña del promotor">
            <template #input>
              <InputModal id="password" type="password" placeholder="Ingresa contraseña"
                v-model:student="selectedPromotor.Passw" />
            </template>
          </SectionInput>
        </div>

        <!-- Telefono -->
        <div class="mb-4">
          <SectionInput label="Teléfono del promotor">
            <template #input>
              <InputModal id="tel" type="tel" placeholder="Ingresa teléfono"
                v-model:student="selectedPromotor.Telefono" />
            </template>
          </SectionInput>
        </div>

        <!-- Estado -->
        <div class="mb-4">
          <SectionInput label="Estado del promotor">

            <template #input>
              <InputToggle id="Estado" v-model:data="selectedPromotor.Estado">
                {{ estadoTexto }}
              </InputToggle>
            </template>
          </SectionInput>
        </div>

        <div class="flex justify-center">
          <button type="submit" data-modal-toggle="gestion-modal"
            class="py-2 px-4 text-white bg-green-500 hover:bg-green-600 duration-200 rounded-md">
            Guardar
          </button>
        </div>
      </form>
    </Modal>
  </DashboardLayout>
</template>

<script>
import "vue3-toastify/dist/index.css";
import { FwbButton, FwbModal } from "flowbite-vue";
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";
import { toast } from "vue3-toastify";
import axios from "axios";

import DashboardLayout from '../../layouts/DashboardLayout.vue';
import InputModal from '../../components/Modal/InputModal.vue';
import InputToggle from "../../components/InputToggle.vue";
import Modal from '../../components/Modal/Modal.vue';
import ModalSection from "../../components/Modal/ModalSection.vue";
import SectionInput from '../../components/Modal/SectionInput.vue';
import SelectModal from "../../components/Modal/SelectModal.vue";
import Table from '../../components/Table.vue';
import TableDataCell from "../../components/TableDataCell.vue";
import TableHeaderCell from "../../components/TableHeaderCell.vue";
import TableRow from "../../components/TableRow.vue";

onMounted(() => {
  initFlowbite();
});

export default {
  components: {
    DashboardLayout,
    FwbButton,
    FwbModal,
    InputModal,
    InputToggle,
    Modal,
    ModalSection,
    ModalSection,
    SectionInput,
    SelectModal,
    Table,
    TableDataCell,
    TableHeaderCell,
    TableRow,
  },
  //types of toast
  setup() {
    const notify = () => {
      toast("Se han actualizado los datos correctamente", {
        autoClose: 3000,
        type: 'success'
      }); // ToastOptions
    }

    return { notify };
  },

  data() {
    return {
      promotores: [],
      editingPromotor: null,
      selectedPromotor: {
        Nombre: '',
        Correo: '',
        Passw: '',
        Telefono: '',
        Estado: false,
      },
      searchQuery: "",
    };
  },
  mounted() {
    this.loadPromotores();
  },
  computed: {
    filteredPromotores() {
      if (!this.searchQuery) return this.promotores;
      return this.promotores.filter((promotor) =>
        promotor.Nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    estadoBooleano() {
      return this.selectedPromotor.Estado === 1;
    },
    estadoTexto() {
      return this.selectedPromotor.Estado ? 'Activo' : 'Inactivo';
    },
  },

  methods: {
    editPromotor(promotor) {
      // Clona el objeto promotor para evitar mutaciones directas
      const promotorEdit = { ...promotor };

      // Convierte el estado de 0 o 1 a false o true
      promotorEdit.Estado = promotorEdit.Estado === 1;

      // Actualiza el promotor seleccionado para editar
      this.selectedPromotor = promotorEdit;
    },


    async loadPromotores() {
      try {
        const response = await axios.get("http://localhost:4000/promotores");
        this.promotores = response.data.listPromotores;
      } catch (error) {
        this.errPromotores();
      }
    },
    async actualizarPromotor() {
      try {
        // Convierte el estado de true/false a 1/0 para la API
        const promotorParaActualizar = {
          ...this.selectedPromotor,
          Estado: this.selectedPromotor.Estado ? 1 : 0,
        };

        // Actualiza en la base de datos
        await axios.put(`http://localhost:4000/promotores/update/${promotorParaActualizar.PromotorID}`, promotorParaActualizar);

        // Notificación de éxito
        this.notify();

        // Encuentra el índice del promotor en la lista original para actualizar
        const index = this.promotores.findIndex(promotor => promotor.PromotorID === this.selectedPromotor.PromotorID);
        if (index !== -1) {
          // Convierte el estado a booleano para el frontend si es necesario
          promotorParaActualizar.Estado = !!promotorParaActualizar.Estado;
          // Actualiza el promotor en la lista con los nuevos valores
          this.promotores.splice(index, 1, promotorParaActualizar);
        }

      } catch (error) {
        console.error(error);
      }
      this.loadPromotores();
    },
    redirectToAgregarPromotor() {
      this.$router.push("/register-promotor");
    },
  },
};
</script>