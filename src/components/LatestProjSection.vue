<template>
    <section class="text-white mt-20 overflow-hidden relative" id="projects">
        <div class="px-4 xl:pl-16 max-w-screen-xl mx-auto overflow-hidden">
            <div class="mb-4 md:flex md:justify-center xl:pr-16 relative z-10">
                <h2 class="text-4xl font-bold text-white text-center relative z-50">
                    My <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400">Projects</span>
                </h2>
            </div>
            <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
                <div v-for="project in Projects" :key="project.id">
                    <div class="h-62 md:h-[20rem] rounded-t-xl relative group transform transition duration-500 hover:scale-105"
                    :style="{ backgroundImage: 'url(' + project.image + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">                    
                    <div class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0
                    hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                        <a class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                            :href="project.webURL"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                data-slot="icon"
                                class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5">
                                </path>
                            </svg></a><a
                            class="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                            :href="project.gitURL"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                data-slot="icon"
                                class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                            </svg></a>
                    </div>
                </div>
                <div class="text-white rounded-b-xl mt-3 bg-[#111a3e] shadow-lg border border-[#1f1641] py-6 px-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                    <h3 class="text-lg font-semibold uppercase lg:text-xl"> {{ project.title }}</h3>
                    <p class="text-[#ADB7BE]">{{ project.description }}</p>
                    <div class="flex flex-wrap p-2.5">
                        <div v-for="technology in project.technologies" :key="technology" class="text-center ml-1 mt-1 rounded-3xl bg-[#111827]"
                        style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid #111827;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);"
                        >
                    <p class="px-1 py-2">{{ technology }}</p>
                    </div>
                    </div>
                </div>
                </div>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {
    document.documentElement.classList.add('overflow-x-hidden');
    document.body.classList.add('overflow-x-hidden');
});

const Projects = ref([
    {
        id: 1,
        category: 'web development',
        image: 'src/assets/GoClean.webp',
        title: 'GoClean',
        description: 'a website platform that provides cleaning services',
        technologies: ['vue.js ', 'PHP', 'Tailwind CSS'],
        gitURL: '',
        webURL: ''
    },
    {
        id: 2,
        category: 'web development',
        image: 'src/assets/personalWeb.webp',
        title: 'Personal Web',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        technologies: ['vue.js 3', 'vuex', 'Express'],
        gitURL: '',
        webURL: ''
    },
    {
        id: 3,
        category: 'web development',
        image: 'src/assets/project.webp',
        title: 'project 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        technologies: ['vue.js 3', 'vuex', 'Express'],
        gitURL: '',
        webURL: ''
    }
]);
</script>
