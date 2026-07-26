<template>
  <section
    id="experience"
    class="relative text-slate-900 py-20 flex justify-center items-center flex-col min-h-[60vh] overflow-hidden w-full"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="w-full max-w-4xl px-4">
      <h2 class="text-3xl sm:text-4xl font-bold mb-6 text-center">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-400">Pengalaman</span> Kerja
      </h2>

      <div class="space-y-6">
        <div
          v-for="exp in experiences"
          :key="exp.id"
          class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm cursor-pointer"
          @click="openExperience(exp)"
        >
          <h3 class="text-lg font-semibold text-slate-900">{{ exp.title }}</h3>
          <p class="text-sm text-slate-500">{{ exp.period }}</p>
          <ul class="list-disc list-inside mt-3 text-slate-700 space-y-1">
            <li v-for="(d, i) in exp.details" :key="i">{{ d }}</li>
          </ul>
        </div>
      </div>

      <!-- Modal gambar pengalaman (teleported ke body agar overlay selalu di atas) -->
      <teleport to="body">
        <div
          v-if="selectedExperience"
          class="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900 p-4 backdrop-blur-sm"
        >
          <div class="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <button
              @click="closeExperience"
              class="absolute top-4 right-4 rounded-full bg-slate-100 p-3 text-slate-700 hover:bg-slate-200"
              aria-label="Tutup gambar pengalaman"
            >
              ✕
            </button>

            <div class="p-8">
              <div>
                <h3 class="text-3xl font-bold text-slate-900">{{ selectedExperience.title }}</h3>
                <p class="text-slate-600 mt-3 max-w-3xl"></p>
              </div>

              <div class="mt-8 grid gap-4 lg:grid-cols-3">
                <div
                  v-for="image in selectedExperience.images"
                  :key="image"
                  class="overflow-hidden rounded-3xl bg-slate-100 cursor-pointer"
                  @click="openImage(image)"
                >
                  <img
                    :src="image"
                    :alt="`${selectedExperience.title} gambar`"
                    class="h-52 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

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
                alt="Foto pengalaman penuh"
              />
            </div>
          </div>
        </div>
      </teleport>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const experiences = [
  {
    id: 1,
    title: 'Network Engineer — UPT Komputer Universitas Advent Indonesia',
    period: 'Des 2025 - Apr 2026',
    details: [
      'Troubleshooting komputer dan jaringan.',
      'Pemeliharaan dan upgrade infrastruktur jaringan.',
      'Instalasi sistem operasi dan perangkat lunak.',
      'Dukungan teknis kepada pengguna (end-user support).',
      'Instalasi dan Implementasi laboratorium komputer baru (30 unit).'
    ],
    images: [
      new URL('@/assets/Gambar Labor UPT - 1.jpeg', import.meta.url).href,
      new URL('@/assets/Gambar Labor UPT - 3.jpeg', import.meta.url).href,
      new URL('@/assets/Gambar Labor UPT - 4.jpeg', import.meta.url).href,
    ]
  },
  {
    id: 2,
    title: 'Network Support — UPT Komputer Universitas Advent Indonesia',
    period: 'Jul 2021 – Des 2022',
    details: [
      'Instalasi Access Point UniFi (100+ unit).',
      'Penarikan kabel LAN, pemasangan rail duct, dan crimping kabel UTP (RJ45).',
      'Instalasi switch dan perangkat jaringan.',
      'Pengujian dan troubleshooting konektivitas jaringan.',
      'Implementasi infrastruktur jaringan kampus.',
      'Kolaborasi dalam implementasi infrastruktur jaringan.'
    ],
    images: [
      new URL('@/assets/magang - 1.jpeg', import.meta.url).href,
      new URL('@/assets/magang - 2.jpeg', import.meta.url).href,
      new URL('@/assets/magang - 3.jpeg', import.meta.url).href,
    ]
  }
]

const selectedExperience = ref(null)
const selectedImage = ref(null)

const openExperience = (exp) => {
  selectedExperience.value = exp
  selectedImage.value = null
}

const closeExperience = () => {
  selectedExperience.value = null
  selectedImage.value = null
}

const openImage = (image) => {
  selectedImage.value = image
}

// prevent body scroll while modal is open and restore when closed
import { watch } from 'vue'
watch(selectedExperience, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>
