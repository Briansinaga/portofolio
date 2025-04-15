<template>
  <section
    class="relative w-full min-h-[100vh] flex items-center justify-center bg-[#0a0f1a] overflow-hidden pt-20"
    data-aos="zoom-in-up"
    id="home"
  >
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-0 left-0 w-[70%] h-40 bg-gradient-to-br from-[#570cac] via-purple-600 to-purple-400 opacity-30 blur-3xl"></div>
      <div class="absolute top-0 right-0 w-[60%] h-32 bg-gradient-to-r from-[#670ccf] to-transparent opacity-30 blur-2xl"></div>
    </div>

    <!-- Konten -->
    <div class="relative z-10 w-full max-w-7xl px-4 sm:px-8">
      <div class="grid lg:grid-cols-2 items-center gap-10 py-20">
        <!-- Gambar -->
        <div class="flex justify-center lg:justify-start">
          <div class="relative w-[250px] sm:w-[300px] lg:w-[350px] h-[250px] sm:h-[300px] lg:h-[350px] rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="@/assets/top_picture.png"
              alt="Hero pic"
              class="w-full h-full object-cover"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-tr from-[#570cac] to-transparent blur-3xl opacity-25 z-[-1]"></div>
          </div>
        </div>

        <!-- Teks -->
        <div class="text-center lg:text-left">
          <h1 class="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight flex flex-wrap justify-center lg:justify-start">
            <span
              v-for="(char, index) in titleText"
              :key="index"
              :style="{ opacity: showTitle[index] ? 1 : 0, marginRight: char === ' ' ? '0.2em' : '0' }"
              class="inline-block transition-opacity duration-200 ease-in-out"
            >
              {{ char }}
            </span>
          </h1>
          <p class="text-2xl md:text-3xl font-bold mt-4">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400">
              Frontend Developer
            </span>
          </p>

          <!-- Tombol Download Resume -->
          <div class="mt-8">
            <a
              href="/resume.pdf"
              download="brian_resume.pdf"
              class="inline-flex items-center px-6 py-3 border-2 border-purple-500 rounded-full text-white hover:bg-purple-600 transition"
            >
              <svg
                class="mr-2"
                width="20"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 9L9 13M9 13L5 9M9 13V1"
                  stroke="#f59e0b"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129
                  20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213
                  20.1213 17 18.7956 17 18V17"
                  stroke="#f59e0b"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const titleText = ref("Hi, I'm Brian ".split(""));
const showTitle = ref(Array(titleText.value.length).fill(false));

const animateText = () => {
  showTitle.value.fill(false);
  titleText.value.forEach((_, index) => {
    setTimeout(() => {
      showTitle.value[index] = true;
    }, index * 100);
  });
  setTimeout(animateText, titleText.value.length * 100 + 1000);
};

onMounted(() => {
  animateText();
});
</script>
