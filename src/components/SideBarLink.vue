<script setup>
import { computed } from 'vue';

const props = defineProps({
    href: String,
    active: Boolean,
});

const classes = computed(() => {
    return props.active
        ? 'relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-[#057a55]'
        : 'px-4 py-3 flex items-center space-x-4 rounded-md group';
});
</script>

<template>
    <a :href="href" :class="classes">
        <slot />
    </a>
</template>
