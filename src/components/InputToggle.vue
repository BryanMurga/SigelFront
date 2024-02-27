<script setup>
import { defineProps } from 'vue';

const data = defineModel('data');

const props = defineProps({
    id: String,
})
</script>


<template>
    <label class="inline-flex items-center cursor-pointer">
        <input :id="id" type="checkbox" v-model="data" class="sr-only peer">
        <div
            class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#54B435]">
        </div>
        <span class="ms-3 text-sm font-medium text-gray-900">
            <slot />
        </span>
    </label>
</template>