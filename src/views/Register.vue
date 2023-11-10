<template>
   <div class="flex">
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar"
         type="button"
         class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
         <span class="sr-only">Open sidebar</span>
         <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd"
               d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
            </path>
         </svg>
      </button>

      <aside id="default-sidebar"
         class="lg:w-1/5 fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
         aria-label="Sidebar">
         <div class="h-full px-3 py-4 overflow-y-auto bg-gray-800 text-white w-64 flex flex-col items-center">
            <div class="image-container w-[100%]">
               <!-- Agregar la imagen -->
            </div>

            <ul class="space-y-2 font-medium">
               <br />
               <li>
                  <a href="#" class="flex items-center p-2 rounded-lg text-white  dark:hover:bg-gray-700 group">
                     <i class="fas fa-home" style="color: #48c9b0"></i>
                     <span class="ml-3">Home</span>
                  </a>
               </li>
               <br />
               <li>
                  <a href="#" class="flex items-center p-2 rounded-lg text-white  dark:hover:bg-gray-700 group">
                     <i class="fas fa-bars-progress" style="color: #48c9b0"></i>
                     <span class="flex-1 ml-3 whitespace-nowrap">Leads</span>
                  </a>
               </li>
               <br />
               <li>
                  <a href="#" class="flex items-center p-2 rounded-lg text-white  dark:hover:bg-gray-700 group">
                     <i class="fas fa-circle-plus" style="color: #48c9b0"></i>
                     <span class="flex-1 ml-3 whitespace-nowrap">Asignar</span>
                  </a>
               </li>
               <br />
               <li>
                  <a href="#" class="flex items-center p-2 rounded-lg text-white dark:hover:bg-gray-700 group">
                     <i class="fas fa-user-slash" style="color: #48c9b0"></i>
                     <span class="flex-1 ml-3 whitespace-nowrap">Reasignar</span>
                  </a>
               </li>
               <br />
               <li>
                  <a href="#" class="flex items-center p-2 rounded-lg text-white  dark:hover:bg-gray-700 group">
                     <i class="fas fa-arrow-right-from-bracket" style="color: #48c9b0"></i>
                     <span class="flex-1 ml-3 whitespace-nowrap">Sign out</span>
                  </a>
               </li>
            </ul>
         </div>
      </aside>
      
      <div class="flex-1 p-4  lg:ml-64">
         <i class="fas fa-bars-progress text-2xl" style="color: #48c9b0"></i>
         <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Leads</span>

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
               <input type="search" id="default-search"
                  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..." required />
               <button type="submit"
                  class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Search
               </button>
            </div>
         </form>
      </div>
   </div>
</template>

<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
   initFlowbite();
});
</script>

<style>
.image-container {
   background-image: url(/uninterlogo.png);
   background-position: center;
   background-size: cover;
   height: 16em;
   width: 16em;
}
</style>