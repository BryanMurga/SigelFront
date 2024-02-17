import { defineProps } from 'vue';
<script setup>

const props = defineProps({
    name: String
});

</script>

<template>
    <h2 class="py-1 text-lg text-white text-center font-semibold mb-4 bg-emerald-500 capitalize">
        {{ name }}
    </h2>
    <!-- Datos -->
    <form class="grid gap-4 mb-4 grid-cols-2">
        <slot />
    </form>
</template>