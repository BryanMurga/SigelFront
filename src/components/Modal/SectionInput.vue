<script setup>
const props = defineProps({
    label: String,
})
</script>

<template>
    <div class="col-span-2 sm:col-span-1">
        <label for="name" class="block mb-2 text-xs font-medium text-gray-900">
            {{ label }}
        </label>
        <slot name="input" />
    </div>
</template>