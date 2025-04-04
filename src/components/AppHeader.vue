<template>
  <header class="bg-gray-800 text-white py-4 px-4 shadow-lg">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center gap-2">
        <h1 class="text-xl font-bold">{{ title }}</h1>
        <span v-if="subtitle" class="text-sm text-gray-300">{{ subtitle }}</span>
      </div>
      <div class="flex items-center gap-4">
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>
