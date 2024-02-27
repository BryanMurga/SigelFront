<template>
    <DashboardLayout name="Lista de comisión" >
        <h1>Lista de comision</h1>
  
    </DashboardLayout>
</template>

<script>
import DashboardLayout from "../../layouts/DashboardLayout.vue";
import axios from "axios";
import { getUserName } from "../../sessions";
import { toast } from "vue3-toastify";

export default {
  setup() {
    const notify = () => {
      toast("Se ha generado el Reporte", {
        autoClose: 3000,
        type: "success",
      });
    };

    const errNotify = () => {
      toast("Error! No sepuede Generar el Reporte", {
        autoClose: 2000,
        type: "error",
      });
    };

    const infoNotify = () => {
      toast("Verifica que todos los campos sean llenados correctamente...", {
        autoClose: 2000,
        type: "info",
      });
    };

    return { notify, errNotify, infoNotify };
  },

  components: {
    DashboardLayout,
  },
  data() {
    return {
      
    };
  },
  methods: {
    
  },

  computed: {
     
      },
};
</script>


<style></style>
