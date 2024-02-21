<script setup>
import  { defineProps } from 'vue';

const props = defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <main class="w-full rounded-xl p-5 border shadow-md mb-10">
    <div class="flex flex-col gap-2">
      <h2 class="text-lg text-gray-800 font-semibold capitalize">{{ title }}</h2>
      <p class="text-base text-gray-700 font-medium">
        {{ description }}
      </p>
    </div>

    <div class="relative overflow-x-auto mt-2">
      <table class="w-full text-sm">
        <thead>
          <slot name="header" />
        </thead>
        <tbody>
          <slot />
        </tbody>
      </table>
    </div>
  </main>
</template>