<template>
    <div class="relative overflow-x-auto pb-6">
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-white capitalize bg-sky-800">
                <slot name="header" />
            </thead>
            <tbody class="border-x"> 
                <slot></slot>
            </tbody>
        </table>
    </div>
</template>