<template>
  <header class="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-500 bg-opacity-90 backdrop-blur-md z-50">
    <div class="text-white text-2xl font-bold">BRIAN SINAGA</div>

    <div class="md:hidden z-50">
      <button @click="isMenuOpen = !isMenuOpen" class="focus:outline-none">
        <img
          v-if="isMenuOpen"
          src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png"
          alt="close"
          width="30"
        />
        <img
          v-else
          src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png"
          alt="menu"
          width="30"
        />
      </button>
    </div>

    <nav
      :class="[
        'md:flex md:items-center md:static absolute top-16 left-0 w-full md:w-auto md:bg-transparent bg-purple-700 text-white md:space-x-6 transition-all duration-300 ease-in-out',
        isMenuOpen ? 'flex flex-col space-y-4 p-4' : 'hidden'
      ]"
    >
      <ul class="md:flex md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
        <li v-for="item in Menu" :key="item.name">
          <a
            :href="item.href"
            @click="scrollToSection(item.href)"
            class="block text-lg hover:text-purple-300 transition"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const Menu = ref([
  { name: 'Home', href: '#home' },
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

onMounted(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      isMenuOpen.value = false;
    }
  });
});
</script>