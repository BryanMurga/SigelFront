<script setup>

const student = defineModel('student');

const props = defineProps({
    id: String,
    type: String,
    placeholder: String,
});

</script>


<template>
    <input 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
        :id="id"
        :type="type"
        :placeholder="placeholder"
        v-model="student"
    >
</template>