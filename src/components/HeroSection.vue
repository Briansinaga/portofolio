<template>
    <section class="relative w-full min-h-screen flex items-center justify-center" data-aos="zoom-in-up">
            <div class="absolute top-0 inset-x-0 h-64 flex items-start">
                <div class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"></div>
                <div class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opacity-40 blur-2xl"></div>
            </div>
            <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
                <div class="grid lg:grid-cols-2 gap-6 xl:gap-10 relative pt-20 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                    <div class="lg:h-full md:flex order-last lg:order-first">
                        <div class="flex w-full h-80 min-h-[22rem] lg:min-h-[none] lg:w-full items-center relative">
                            <div class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 left-0 h-[calc(70%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl"></div>
                                <div class="absolute z-10 p-2 -translate-y-1/2 top-1/2 lg:left-3 md:left-32 sm:left-14 rounded-full shadow-lg w-[350px] h-[350px] overflow-hidden">
                                    <img src="@/assets/top_picture.png" alt="Hero pic" loading="lazy"
                                    class="w-full h-full rounded-full object-cover border-4 border-white">
                            </div>
                        </div>
                    </div>
                    <div class="lg:py-4">
                        <div class="text-center lg:text-left">
                            <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                                <span v-for="(char, index) in titleText" :key="index" 
                                      :style="{ opacity: showTitle[index] ? 1 : 0, marginRight: char === ' ' ? '0.2em' : '0' }" 
                                      class="inline-block transition-opacity duration-200 ease-in-out"
                                >
                                    {{ char }}
                                </span>
                            </h1>
                        </div>
                        <p class="text-white font-bold text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r mt-2">
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400">Frontend Developer</span>
                        </p>
                        <div class="flex items-center gap-3 pt-6 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                            <button class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                                <div class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">
                                <div class="svg-container">
                                    <svg class="download-icon" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path class="donwload-arrow" d="M13 9L9 13M9 13L5 9M9 13V1" stroke="#f59e0b"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                        />
                                        <path d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129
                                        20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213
                                        20.1213 17 18.7956 17 18V17"
                                        stroke="#f59e0b" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    <div class="download-loader text-white hidden"></div>
                                </div>
                                <a href="/resume.pdf" download="resume.pdf" class="pl-2 text-primary"> Download resume</a>
                                </div>
                            </button>
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

const titleText = ref("HI, I'm Brian ".split(""));
const showTitle = ref(Array(titleText.value.length).fill(false));

const animateText = () => {
    showTitle.value.fill(false);
    titleText.value.forEach((_, index) => {
        setTimeout(() => {
            showTitle.value[index] = true;
        }, index * 100);
    });
    
    setTimeout(animateText, titleText.value.length * 100 + 1000); // Loop ulang setelah animasi selesai
};

onMounted(() => {
    animateText();
});
</script>
