<template>
    <header>
        <div class="lg:ml-64 p-4">
            <i class="fas fa-bars-progress text-2xl" style="color: #48c9b0"></i>
            <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Template</span>
        </div>
        
        <SideBarADM class="lg:w-64 md:w-48 sm:w-32" /> <!-- Importa y utiliza el componente SidebarADM -->

    </header>

    <section>
        <div class="flex-1 lg:ml-64">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

            </div>
        </div>
    </section>
</template>
 
<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { getUserName } from "../sessions";
import SideBarADM from "../components/SideBarADM.vue";

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
});

export default {
    components: {

    },
    data() {
        return {
            userName: getUserName()
        };
        leads: []
    },
    methods: {
        loadLeads() {
            axios.get('http://localhost:4000/leads')
                .then(response => {
                    this.users = response.data;  // Asigna los usuarios a la propiedad 'users'
                })
                .catch(error => {
                    console.error('Error al cargar usuarios', error);
                });

        }
    },
    components: { SideBarADM }
};

</script>
 
<style></style>