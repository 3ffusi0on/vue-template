<template>
  <footer class="bg-gray-800 text-white py-4 mt-auto">
    <div class="container mx-auto text-center">
      <p>{{ copyright }} {{ currentYear }}</p>
      <slot></slot>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    copyright?: string
  }>(),
  {
    copyright: '© Your Company',
  },
)

const currentYear = computed(() => new Date().getFullYear())
</script>
