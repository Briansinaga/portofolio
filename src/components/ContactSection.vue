<template>
    <section class="text-white mt-20" id="contact">
        <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16" data-aos="fade-up" data-aos-duration="1000">
            Let's <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400"> Connect</span>
        </h2>
        <div class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8" data-aos="fade-up" data-aos-duration="1200">
            <div>
                <p class="text-[#adb7be]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias
                    quibusdam officia at, a quis cumque ea aperiam omnis minima quam.</p>
                <div class="mt-5 space-y-6">
                    <!-- Email -->
                    <div class="flex items-center" data-aos="fade-right" data-aos-duration="1400">
                        <div class="p-2 bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border border-[#1f1641]">
                            <img src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="email" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>Email</h4>
                            <a href="mailto:sinagabrian5@gmail.com" class="text-primary hover:underline">sinagabrian5@gmail.com</a>
                        </div>
                    </div>
                    <!-- WhatsApp -->
                    <div class="flex items-center" data-aos="fade-right" data-aos-duration="1600">
                        <div class="p-2 bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border border-[#1f1641]">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" alt="whatsapp" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>WhatsApp</h4>
                            <a href="https://wa.me/6281375207582" target="_blank" class="text-primary hover:underline">+62 813-7520-7582</a>
                        </div>
                    </div>
                    <!-- LinkedIn -->
                    <div class="flex items-center" data-aos="fade-right" data-aos-duration="1800">
                        <div class="p-2 bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border border-[#1f1641]">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>LinkedIn</h4>
                            <a href="https://www.linkedin.com" target="_blank" class="text-primary hover:underline">
                                www.LinkedIn.com
                            </a>
                        </div>
                    </div>
                    <!-- Instagram -->
                    <div class="flex items-center" data-aos="fade-right" data-aos-duration="2000">
                        <div class="p-2 bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border border-[#1f1641]">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="instagram" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>Instagram</h4>
                            <a href="https://instagram.com/_briansinaga" target="_blank" class="text-primary hover:underline">
                                @_briansinaga
                            </a>
                        </div>
                    </div>
                    <!-- GitHub -->
                    <div class="flex items-center" data-aos="fade-right" data-aos-duration="2200">
                        <div class="p-2 bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border border-[#1f1641]">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="github" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>GitHub</h4>
                            <a href="https://github.com/BrianSinaga" target="_blank" class="text-primary hover:underline">
                                github.com/BrianSinaga
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-[#111a3e] w-full h-full rounded-2xl p-6 border border-[#1f1641] shadow-lg" data-aos="fade-left" data-aos-duration="1200">
                <form class="flex flex-col">
                    <div class="mb-6">
                        <label for="email" class="text-white block mb-2 text-sm font-medium">Email</label>
                        <input type="email" id="email" class="bg-[#111827] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="email@gmail.com">
                    </div>
                    <div class="mb-6">
                        <label for="subject" class="text-white block mb-2 text-sm font-medium">Subject</label>
                        <input type="text" id="subject" class="bg-[#111827] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Subject">
                    </div>
                    <div class="mb-6">
                        <label for="message" class="text-white block mb-2 text-sm font-medium">Message</label>
                        <textarea id="message" class="bg-[#111827] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Let's talk about ..."></textarea>
                    </div>
                    <button class="w-full px-6 py-3 rounded-full text-white bg-primary border-2 border-transparent hover:bg-secondary transition duration-300">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>
