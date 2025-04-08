<template>
  <section
    id="about"
    class="relative text-white py-20 flex justify-center items-center flex-col min-h-[80vh] overflow-hidden w-full"
  >
    <!-- Background Gradient -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div class="absolute top-0 left-0 w-64 max-w-full h-24 bg-gradient-to-br from-purple-800 via-purple-600 to-purple-400 opacity-20 blur-2xl"></div>
    </div>

    <!-- Konten Utama -->
    <div
      class="relative z-10 w-full max-w-4xl px-4 sm:px-6 xl:px-16 text-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 class="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-400">About</span> Me
      </h2>
      <p class="text-base sm:text-lg md:text-xl leading-relaxed text-white">
        Hi, I am an Informatics Engineering student with an interest in Web Development.
        Currently, I am looking for an internship opportunity to apply my skills and gain real-world experience
        in the tech industry.
        <br /><br />
        I have a keen interest in HTML, CSS, and JavaScript, along with experience in modern frameworks like React and Vue.
        I'm passionate about building responsive and user-friendly interfaces, and I'm excited to apply my skills in a
        real-world environment as an intern.
      </p>
    </div>
  </section>
</template>

<script setup>
</script>
