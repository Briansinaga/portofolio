<template>
    <section v-if="showSkills" class="text-white mt-18 py-12 min-h-screen flex justify-center items-center" id="skills">
        <div class="relative flex justify-center items-center w-full">
            <div class="absolute right-0 top-0 h-full w-full flex justify-end opacity-20">
                <span class="w-20 h-40 rounded-full bg-primary blur-3xl"></span>
                <span class="w-20 h-40 rounded-full bg-[#f88fc2] blur-3xl mt-16"></span>
            </div>
            <div class="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 class="text-4xl font-extrabold text-center mb-12">
                    My <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400">Skills</span>
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div v-for="skill in Skills" :key="skill.id" 
                         class="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <img :src="skill.logo" :alt="skill.name" class="w-16 h-16 mb-4" />
                        <h4 class="font-semibold uppercase text-lg text-white">{{ skill.name }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

// State untuk mengontrol visibilitas "Skills"
const showSkills = ref(true);

const Skills = ref([
    {
        id: 1,
        name: 'HTML & CSS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
        id: 2,
        name: 'C++',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
    },
    {
        id: 3,
        name: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
        id: 4,
        name: 'Tailwind',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
    },
    {
        id: 5,
        name: 'Vue',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
    },
    {
        id: 6,
        name: 'React',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
        id: 7,
        name: 'Laravel',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'
    },
    {
        id: 8,
        name: 'Git',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    }
]);
</script>

<style>
/* Mencegah scroll saat hanya section "Skills" yang ditampilkan */
body {
    padding-top: 90px; /* Sesuaikan dengan tinggi navbar */
    background-color: #0a0f1a;
    overflow: hidden;
}
</style>
