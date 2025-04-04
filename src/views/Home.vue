<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-gray-800 text-white py-6 px-4 shadow-lg">
      <div class="container mx-auto">
        <h1 class="text-3xl font-bold text-center">Vue Template</h1>
      </div>
    </header>

    <main class="container mx-auto flex-grow px-4 py-8">
      <div class="max-w-2xl mx-auto text-center space-y-8">
        <h2 class="text-2xl font-bold">Welcome to your new Vue project!</h2>
        <p class="text-lg">
          This template includes Vue 3, TypeScript, Vue Router, Tailwind CSS, and more.
        </p>
        <div class="flex justify-center gap-4 flex-wrap">
          <a
            href="https://vuejs.org/"
            target="_blank"
            class="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
          >
            Vue Docs
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Tailwind Docs
          </a>
        </div>
      </div>
    </main>

    <footer class="bg-gray-800 text-white py-4 mt-auto">
      <div class="container mx-auto text-center">
        <p>Created with Vue Template</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Home view component
</script>
