<template>
  <section
    id="projects"
    class="relative w-full min-h-screen py-24 bg-white overflow-hidden"
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
          class="text-4xl font-bold text-slate-900 mb-4 px-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Proyek
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400">
            Saya
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-400 mx-auto"></div>
      </div>

      <!-- Project Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="project in Projects"
          :key="project.id"
          @click="openProject(project)"
          class="cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white border border-slate-200 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]"
          data-aos="fade-up"
        >
          <!-- Project Image -->
          <div class="relative h-56 overflow-hidden">
            <img
              :src="project.image"
              :alt="`Tangkapan layar proyek ${project.title}`"
              class="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6"
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
            <h3 class="text-xl font-bold text-slate-900 mb-2">{{ project.title }}</h3>
            <p class="text-slate-600 mb-3 text-sm">{{ project.description }}</p>
            <p class="text-sm text-slate-500 mb-4">Klik untuk melihat detail proyek dan beberapa foto.</p>
          </div>
        </div>
      </div>

      <!-- Project Detail Modal -->
      <div
        v-if="selectedProject"
        class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      >
        <div class="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
          <button
            @click="closeProject"
            class="absolute top-4 right-4 rounded-full bg-slate-100 p-3 text-slate-700 hover:bg-slate-200"
            aria-label="Tutup detail proyek"
          >
            ✕
          </button>

          <div class="p-8">
            <div>
              <h3 class="text-3xl font-bold text-slate-900">{{ selectedProject.title }}</h3>
              <p class="text-slate-600 mt-3 max-w-3xl">{{ selectedProject.longDescription }}</p>
            </div>

            <div class="mt-8 grid gap-4 lg:grid-cols-3">
              <div
                v-for="image in selectedProject.images"
                :key="image"
                class="overflow-hidden rounded-3xl bg-slate-100 cursor-pointer"
                @click="openImage(image)"
              >
                <img
                  :src="image"
                  :alt="`${selectedProject.title} screenshot`"
                  class="h-52 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <teleport to="body">
        <div
          v-if="selectedImage"
          class="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm"
        >
          <div class="relative w-full max-w-5xl">
            <button
              @click="selectedImage = null"
              class="absolute top-4 right-4 rounded-full bg-slate-100 p-3 text-slate-700 hover:bg-slate-200"
              aria-label="Tutup tampilan gambar"
            >
              ✕
            </button>
            <img
              :src="selectedImage"
              class="w-full h-[75vh] object-contain rounded-3xl bg-white"
              alt="Tampilan penuh screenshot proyek"
            />
          </div>
        </div>
      </teleport>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedProject = ref(null)
const selectedImage = ref(null)

const openProject = (project) => {
  selectedProject.value = project
  selectedImage.value = null
}

const closeProject = () => {
  selectedProject.value = null
  selectedImage.value = null
}

const openImage = (image) => {
  selectedImage.value = image
}

const Projects = ref([
  {
    id: 1,
    category: 'web development',
    image: new URL('@/assets/GoClean.webp', import.meta.url).href,
    title: 'GoClean',
    description: 'Website layanan kebersihan lengkap dengan pemesanan dan manajemen jadwal.',
    longDescription: 'GoClean adalah platform layanan kebersihan yang mempermudah pengguna memesan berbagai paket kebersihan tanpa repot. Fitur utama meliputi dashboard pemesanan, kalender jadwal, detail paket layanan, manajemen teknisi, dan konfirmasi otomatis.',
    images: [
      new URL('@/assets/GoClean1.png', import.meta.url).href,
      new URL('@/assets/Goclean2.png', import.meta.url).href,
      new URL('@/assets/Goclean3.png', import.meta.url).href
    ]
  },
  {
    id: 2,
    category: 'network',
    image: new URL('@/assets/ImplementasiJaringanKampus1.jpeg', import.meta.url).href,
    title: 'Implementasi Infrastruktur Jaringan Kampus',
    description: 'Pengelolaan dan Pengembangan Jaringan Internet di Universitas Advent Indonesia',
    longDescription: 'Terlibat dalam pembangunan infrastruktur jaringan kampus dengan pemasangan Access Point, penarikan kabel LAN, pemasangan kotak perangkat jaringan, dan konfigurasi perangkat untuk mendukung konektivitas area kampus.',

    images: [
      new URL('@/assets/ImplementasiJaringanKampus1.jpeg', import.meta.url).href,
      new URL('@/assets/ImplementasiJaringanKampus2.jpeg', import.meta.url).href,
      new URL('@/assets/ImplementasiJaringanKampus3.jpeg', import.meta.url).href
    ]
  },
  {
    id: 3,
    category: 'network',
    image: new URL('@/assets/Labkomputerbaru1.jpeg', import.meta.url).href,
    title: 'Pembangunan Laboratorium Komputer Baru',
    description: 'Pembangunan laboratorium komputer baru di Universitas Advent Indonesia.',
    longDescription: 'Terlibat dalam pembangunan laboratorium komputer baru yang terdiri dari 30 unit komputer dengan melakukan penarikan kabel LAN dan pemasangan jalur jaringan, membantu pemasangan serta konfigurasi dasar perangkat komputer, melakukan instalasi sistem operasi dan perangkat lunak pendukung pembelajaran, serta melakukan pengujian perangkat dan konektivitas jaringan sebelum laboratorium digunakan.',

    images: [
      new URL('@/assets/Labkomputerbaru1.jpeg', import.meta.url).href,
      new URL('@/assets/Labkomputerbaru2.jpeg', import.meta.url).href,
      new URL('@/assets/Labkomputerbaru3.jpeg', import.meta.url).href
    ]
  }
])
</script>

<style scoped>
.projects-section {
  isolation: isolate; /* ini menjaga agar z-index background tidak bocor */
}
</style>
