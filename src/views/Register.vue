<template>
   <div>
    <h1>Otra Vista</h1>
    <sideBarADM /> <!-- Importa y utiliza el componente SidebarADM -->
    <!-- Otro contenido de tu vista -->
  </div>
</template>

<script>

import sideBarADM from '../components/SideBarADM.vue'; // Ruta relativa al componente

export default {
   components: {
      sideBarADM
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

// export default {
//    data() {
//         return {
//             formData: {
//                 email: null,
//                 password: null
//             },

//             userName: getUserName()
//         }
//     },
//     methods: {

//     }
// };

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