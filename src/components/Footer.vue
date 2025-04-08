<template>
  <footer class="border-t border-[#33353F] text-white bg-[#0a0f1a] z-10">
    <div class="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="text-2xl font-bold">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-400">
          BRIAN SINAGA
        </span>
      </div>

      <p class="text-sm text-slate-500">
        © {{ new Date().getFullYear() }} Brian Sinaga. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
// Year is automatically displayed
</script>