<template>
    <DashboardLayout name="Dashboard">
        <section class="h-fit w-full grid grid-cols-3 gap-6">
            <CardLink 
                url="promotor-list" 
                name="Promotores" 
            />

            <CardLink 
                url="dash-admin" 
                name="Dashboard" 
            />

            <CardLink 
                url="indicadores" 
                name="Indicadores" 
            />

            <CardLink 
                url="campania" 
                name="Campañas" 
            />
        </section>
    </DashboardLayout>
</template>


<script>
import { getUserName } from "../../sessions";

import DashboardLayout from '../../layouts/DashboardLayout.vue';
import CardLink from "../../components/CardLink.vue";

export default {
    components: {
        DashboardLayout, CardLink

    },
    data() {
        return {
            userName: getUserName()
        }
    }
}

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