<template>
    <section v-if="showAbout" class="text-white mt-24 flex justify-center items-center flex-col min-h-screen" id="about">
        <div class="absolute z-0 inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-purple-800 via-purple-600 blur-2xl to-purple-400 opacity-20"></div>
        </div>
        <div class="w-full max-w-4xl py-16 px-4 sm:py-24 xl:px-16 z-1" data-aos="fade-up" data-aos-duration="1000">
            <h2 class="text-4xl font-bold text-white text-center mb-8">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-400">About</span> Me
            </h2>
            <p class="text-lg text-center text-white">
                "Hi, I am an Informatics Engineering student with an interest in Web Development. Currently,
                I am looking for an internship opportunity to apply my skills and gain real-world experience in the
                tech industry."
                <br><br>
                "I have a keen interest in HTML, CSS, and JavaScript, along with experience in modern frameworks like React and Vue. 
                I'm passionate about building responsive and user-friendly interfaces, 
                and I'm excited to apply my skills in a real-world environment as an intern."
            </p>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

// State untuk mengontrol visibilitas "About Me"
const showAbout = ref(true);
</script>

<style>
/* Sesuaikan padding agar konten tidak tertutup navbar */
body {
    padding-top: 90px; /* Menyesuaikan dengan tinggi navbar */
    background-color: #0a0f1a;
    overflow: hidden; /* Mencegah scroll saat hanya satu section yang ditampilkan */
}
</style>
