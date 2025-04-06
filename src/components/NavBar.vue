<template>
    <header class="fixed top-0 left-0 w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 bg-opacity-90 backdrop-blur-2xl z-50">
        <div class="text-white text-2xl font-bold">BRIAN SINAGA</div>
        <!-- Mobile Toggle Button -->
        <div class="md:hidden z-30">
            <button type="button"
                    class="block focus:outline-none"
                    @click="isMenuOpen = !isMenuOpen">
                <span v-if="isMenuOpen" class="text-4xl">
                    <img src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="close" width="35" height="35">
                </span>
                <span v-else class="text-4xl">
                    <img src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" alt="menu" width="35" height="35">
                </span>
            </button>
        </div>

        <!-- Navbar Link -->
        <nav :class="['fixed inset-0 z-30 flex flex-col items-center justify-center bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 md:relative md:bg-transparent md:flex md:justify-between md:flex-row',
            isMenuOpen ? 'block' : 'hidden'
        ]">
            <ul class="flex flex-col items-center space-y-6 md:flex-row md:space-x-6 md:space-y-0">
                <li v-for="item in Menu" :key="item.name">
                    <a :href="item.href"
                       class="block text-white transition ease-linear text-xl md:text-lg md:px-4 md:py-2 md:rounded-lg md:hover:bg-purple-700"
                       @click="scrollToSection(item.href)">
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const Menu = ref([
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]);

const isMenuOpen = ref(false);

const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<style>
/* Sesuaikan padding agar konten tidak tertutup navbar */
body {
    padding-top: 80px; /* Sesuaikan dengan tinggi navbar yang lebih besar */
    background-color: #0a0f1a;
}
</style>
