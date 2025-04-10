<template>
  <section
    class="text-white py-20 flex justify-center items-center flex-col min-h-[80vh] px-4"
    id="skills"
  >
    <div class="absolute z-0 inset-x-0 h-64 flex justify-end items-start pointer-events-none">
      <div class="w-64 h-32 bg-gradient-to-br from-purple-800 via-purple-600 to-purple-400 opacity-20 blur-3xl"></div>
    </div>

    <div class="w-full max-w-6xl py-16 sm:py-24 z-1" data-aos="fade-up" data-aos-duration="1000">
      <h2 class="text-4xl font-bold text-center mb-12">
        My
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-400">
          Skills
        </span>
      </h2>
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div
          v-for="skill in Skills"
          :key="skill.id"
          class="flex flex-col items-center p-6 bg-[#111a3e] border border-[#1f1641] rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          <img :src="skill.logo" :alt="skill.name" class="w-16 h-16 mb-4" />
          <h4 class="font-semibold uppercase text-lg text-white">{{ skill.name }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const Skills = ref([
  {
    id: 1,
    name: 'HTML & CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    id: 2,
    name: 'C++',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
  {
    id: 3,
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    id: 4,
    name: 'Tailwind',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    id: 5,
    name: 'Vue',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  },
  {
    id: 6,
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    id: 7,
    name: 'Laravel',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
  },
  {
    id: 8,
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
]);
</script>