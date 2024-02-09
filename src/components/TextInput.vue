<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: String,
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input ref="input" class="border-gray-300 focus:border-[#273746] focus:ring-[#273746] rounded-xl shadow-sm"
        :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>