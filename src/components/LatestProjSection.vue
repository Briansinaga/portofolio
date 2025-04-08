<template>
  <section
    id="projects"
    class="relative w-full min-h-screen py-24 bg-gradient-to-b from-[#0c0a20] to-[#0f0d29] overflow-hidden"
  >
    <!-- Background Blur Circles -->
    <div class="absolute inset-0 opacity-10 pointer-events-none z-0">
      <div class="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-purple-600 blur-3xl"></div>
      <div class="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-blue-600 blur-3xl"></div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 w-full max-w-screen-xl mx-auto px-4">
      <div class="text-center mb-16">
        <h2
          class="text-4xl font-bold text-white mb-4 px-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          My
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400">
            Projects
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-400 mx-auto"></div>
      </div>

      <!-- Project Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="project in Projects"
          :key="project.id"
          class="rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20 bg-[#121638]/80 backdrop-blur-sm border border-[#2a2654] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/30 hover:scale-[1.02]"
          data-aos="fade-up"
        >
          <!-- Project Image -->
          <div class="relative h-56 overflow-hidden">
            <img
              :src="project.image"
              :alt="`Screenshot of ${project.title} project`"
              class="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#121638] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6"
            >
              <div class="flex space-x-3">
                <a
                  v-if="project.webURL"
                  :href="project.webURL"
                  target="_blank"
                  rel="noopener"
                  class="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300"
                  aria-label="View live website"
                  title="View live website"
                >
                  <!-- Globe Icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </a>
                <a
                  v-if="project.gitURL"
                  :href="project.gitURL"
                  target="_blank"
                  rel="noopener"
                  class="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300"
                  aria-label="View source code"
                  title="View source code"
                >
                  <!-- Code Icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Project Info -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
            <p class="text-[#a0aec0] mb-6 text-sm">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <div
                v-for="technology in project.technologies"
                :key="technology"
                class="px-3 py-1 text-xs font-medium bg-purple-900/30 text-purple-300 rounded-full border border-purple-800/50"
              >
                {{ technology }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const Projects = ref([
  {
    id: 1,
    category: 'web development',
    image: new URL('@/assets/GoClean.webp', import.meta.url).href,
    title: 'GoClean',
    description: 'A website platform that provides cleaning services with booking, scheduling, and payment features.',
    technologies: ['Vue.js', 'PHP', 'Tailwind CSS'],
    gitURL: 'https://github.com/yourname/goclean',
    webURL: 'https://goclean.example.com'
  },
  {
    id: 2,
    category: 'web development',
    image: new URL('@/assets/personalWeb.webp', import.meta.url).href,
    title: 'Personal Web',
    description: 'Personal portfolio website built with Vue and Express to showcase projects and skills.',
    technologies: ['Vue 3', 'Vuex', 'Express'],
    gitURL: 'https://github.com/yourname/personal-web',
    webURL: 'https://yourportfolio.example.com'
  },
  {
    id: 3,
    category: 'web development',
    image: new URL('@/assets/project.webp', import.meta.url).href,
    title: 'Project 3',
    description: 'A modern web application featuring advanced UI components and integration with backend services.',
    technologies: ['Vue 3', 'Vuex', 'Express'],
    gitURL: 'https://github.com/yourname/project3',
    webURL: 'https://project3.example.com'
  }
])
</script>

<style scoped>
.projects-section {
  isolation: isolate; /* ini menjaga agar z-index background tidak bocor */
}
</style>
