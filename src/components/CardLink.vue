<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    url: String,
    name: String,
});
</script>

<template>
    <article class="w-full h-40 rounded-lg bg-[#4fc4ae] hover:bg-[#4eb8a4] active:bg-[#3a8e7e] shadow-md duration-200">
        <a :href="url" class="w-full h-full flex items-center justify-center">
            <h3 class="text-white text-2xl font-semibold">{{ name }}</h3>
        </a>
    </article>
</template>