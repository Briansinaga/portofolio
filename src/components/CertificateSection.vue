<template>
  <section
    id="certificates"
    class="py-16 bg-white min-h-screen"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-slate-900">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400">Sertifikat</span>
        </h2>

      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="cert in certificates"
          :key="cert.id"
          class="rounded-xl border bg-slate-50 overflow-hidden shadow-sm"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div v-if="cert.image" class="h-48 overflow-hidden bg-white">
            <img
              :src="cert.image"
              :alt="`${cert.title} image`"
              class="h-full w-full object-cover"
            />
          </div>
          <div v-else class="h-48 flex items-center justify-center bg-slate-100 text-slate-500 text-sm font-medium">
            Tambahkan gambar sertifikat di data `certificates`
          </div>
          <div class="p-6">
            <h3 class="font-semibold text-lg text-slate-900">{{ cert.title }}</h3>
            <p class="text-sm text-slate-600 mt-2">{{ cert.issuer }} • {{ cert.year }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const certificates = ref([
  {
    id: 1,
    title: 'Cisco Dasar',
    issuer: 'ID-Networkers',
    year: 'July 2026',
    image: new URL('@/assets/Brian-Sinaga-Cisco-Dasar-Sertifikat-Cisco-Dasar-LMS-ID-Networkers_page-0001.jpg', import.meta.url).href,
  },
  {
    id: 2,
    title: 'Jaringan Komputer Dasar',
    issuer: 'ID-Networkers',
    year: 'July 2026',
    image: new URL('@/assets/Brian-Sinaga-Jaringan-Dasar-Sertifikat-Jaringan-Komputer-Dasar-LMS-ID-Networkers_page-0001.jpg', import.meta.url).href,
  },
  {
    id: 3,
    title: 'Belajar Linux dari Nol',
    issuer: 'ID-Networkers',
    year: 'July 2026',
    image: new URL('@/assets/Brian-Sinaga-Belajar-Linux-dari-Nol-Sertifikat-Belajar-Linux-dari-Nol-LMS-ID-Networkers_page-0001.jpg', import.meta.url).href,
  },
  {
    id: 4,
    title: 'Cloud Engineer',
    issuer: 'Alibaba Cloud',
    year: 'April 2026',
    image: new URL('@/assets/AlibabaCloudCertification.png', import.meta.url).href,
  },
])
</script>
