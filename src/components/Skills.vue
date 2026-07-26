<template>
  <section
    class="text-slate-900 py-20 flex justify-center items-center flex-col min-h-[80vh] px-4"
    id="skills"
  >
    <div class="absolute z-0 inset-x-0 h-64 flex justify-end items-start pointer-events-none">
      <div class="w-64 h-32 bg-gradient-to-br from-purple-800 via-purple-600 to-purple-400 opacity-20 blur-3xl"></div>
    </div>

    <div class="w-full max-w-6xl py-16 sm:py-24 z-1" data-aos="fade-up" data-aos-duration="1000">
      <h2 class="text-4xl font-bold text-center mb-12">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-500">Keahlian</span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up" data-aos-duration="1200">
        <div
          v-for="skill in Skills"
          :key="skill.id"
          class="rounded-2xl border border-purple-200 bg-slate-50 p-5 shadow-sm"
        >
          <h4 class="font-semibold text-lg text-slate-900">{{ skill.name }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const Skills = ref([
  { id: 1, name: 'Troubleshooting Komputer dan Jaringan' },
  { id: 2, name: 'Instalasi Perangkat Jaringan' },
  { id: 3, name: 'TCP/IP, DHCP, dan DNS' },
  { id: 4, name: 'Subnetting (CIDR)' },
  { id: 5, name: 'Pemeliharaan Infrastruktur Jaringan' },
  { id: 6, name: 'Basic Pemrograman' },
  { id: 7, name: 'Routing dan Switching' },
  { id: 8, name: 'Html & CSS(Tailwind,Bootstrap)' },
  { id: 9, name: 'Vue.js & Laravel' },
]);
</script>