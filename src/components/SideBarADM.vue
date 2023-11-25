<template>
  <button
    data-drawer-target="logo-sidebar"
    data-drawer-toggle="logo-sidebar"
    aria-controls="logo-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>

  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-3 mr-3 overflow-y-auto bg-gray-800">
      <a href="#" class="flex items-center justify-center flex-col p-8 mb-4">
        <img src="/logo.png" class="h-12 me-3 sm:h-28" alt="Uninter Logo" />
        <br />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-white text-center"
        >
          ¡Bienvenido:<br />
          {{ userName }}!
        </span>
      </a>
      <ul class="space-y-6  font-medium">
        <li class="md:mt-3  items-center">
          <a
            href="home-adm"
            :class="{
              'bg-green-500': selectedSection === 'home',
            }"
            class="flex items-center p-6  text-white rounded-lg dark:text-white hover:bg-green-600 dark:hover:bg-green-700 group transition duration-300"
            @click="selectSection('home')"
          >
          
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            ></svg>
            <i class="fa-solid fa-home fa-xl"></i>
            <span class="flex-1 ms-3">Inicio</span>
          </a>
        </li>

        <li class="md:mt-3  items-center">
          <a
            href="leads"
            :class="{
              'bg-green-500': selectedSection === 'leads',
            }"
            class="flex items-center p-6 text-white rounded-lg dark:text-white hover:bg-green-600 dark:hover:bg-green-700 group transition duration-300"
            @click="selectSection('leads')"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            ></svg>
            <i class="fa-solid fa-users fa-xl"></i>
            <span class="flex-1 ms-3 whitespace-nowrap">Leads</span>
            <span
              class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-green-500 rounded-full dark:bg-green-700 dark:text-gray-300"
            ></span>
          </a>
        </li>

        <li class="md:mt-3  items-center">
          <a
            href="asignaciones"
            :class="{
              'bg-green-500': selectedSection === 'asignaciones',
            }"
            class="flex items-center p-6 text-white rounded-lg dark:text-white hover:bg-green-600 dark:hover:bg-green-700 group transition duration-300"
            @click="selectSection('asignaciones')"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            ></svg>
            <i class="fa-solid fa-circle-plus fa-xl"></i>
            <span class="flex-1 ms-3 whitespace-nowrap">Asignar</span>
          </a>
        </li>

        <li class="md:mt-3  items-center">
          <a
            href="reasignaciones"
            :class="{
              'bg-green-500': selectedSection === 'reasignaciones',
            }"
            class="flex items-center p-6 text-white rounded-lg dark:text-white hover:bg-green-600 dark:hover:bg-green-700 group transition duration-300"
            @click="selectSection('reasignaciones')"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            ></svg>
            <i class="fa-solid fa-user-pen fa-xl"></i>
            <span class="flex-1 ms-3 whitespace-nowrap">Reasignar</span>
          </a>
        </li>

        <li class="md:mt-3  items-center">
          <a
            @click="cerrarSesion"
            href=""
            class="flex items-center p-6 text-white rounded-lg dark:text-white hover:bg-red-600 dark:hover:bg-red-700 group transition duration-300"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white mt-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            ></svg>
            <i class="fa-solid fa-right-to-bracket fa-2xl mt-1"></i>
            <span class="flex-1 ms-3 whitespace-nowrap text-sm md:text-base">
              Cerrar sesión
            </span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { getUserName, clearRole, clearUserName } from "../sessions";

onMounted(() => {
  initFlowbite();
});

export default {
  data() {
    return {
      selectedSection: null,
      userName: getUserName(),
    };
  },
  methods: {
    selectSection(section) {
      this.selectedSection = section;
    },
    cerrarSesion() {
      clearRole();
      clearUserName();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped></style>
