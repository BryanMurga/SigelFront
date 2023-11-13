<template>
   <div>
    <sideBarADM/> <!-- Importa y utiliza el componente SidebarADM -->
    <!-- Otro contenido de tu vista -->
    <search/> <!-- Importa y utiliza el componente serch -->
  </div>
</template>

<script>

import sideBarADM from '../components/SideBarADM.vue'; // Ruta relativa al componente
import search from '../components/search.vue'; // Ruta relativa al componente

export default {
   components: {
      sideBarADM,
      search
   },
   data() {
      return {
         userName: getUserName()
      }
   }
}

import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { getUserName } from "../sessions";

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