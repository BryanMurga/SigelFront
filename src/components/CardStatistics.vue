<script setup>

const props = defineProps({
    title: String,
    total: String
})

</script>

<template>
    <article class="border shadow-md w-[350px] lg:w-[500px] h-[400px] p-6 rounded-xl overflow-hidden">
        <h2 class="font-semibold text-base uppercase">{{ title }}</h2>
        <h3 class="text-sm capitalize">
            {{ total }}:
            <slot name="total_num" />
        </h3>
        <div class="w-full h-full py-6">
            <slot name="graphics" />
        </div>
    </article>
</template>