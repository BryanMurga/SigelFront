<template >
    <h1>this is a page</h1>
    <button
          @click="redirectToAgregarPromotor"
          class="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
        >
          Agregar Promotor
        </button>

</template>

<script>
export default {

methods: {
    redirectToAgregarPromotor() {
          this.$router.push("/registrar-lead");
        }
}
}
</script>

