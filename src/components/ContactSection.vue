<template>
  <section
    class="text-white py-20 px-4 xl:px-16 bg-gradient-to-b from-[#0c0a20] to-[#0f0d29] min-h-screen"
    id="contact"
  >
    <h2
      class="text-4xl font-bold text-left mb-10"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      Let's
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400"
      >
        Connect
      </span>
    </h2>

    <div
      class="grid md:grid-cols-2 gap-10"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <!-- Contact Info -->
      <div class="space-y-6">
        <p class="text-[#adb7be] max-w-md">
          I'm always open to discussing new opportunities, collaborations, or
          just chatting about web development. Feel free to reach out through
          any of the platforms below!
        </p>

        <div class="space-y-5">
          <ContactItem
            icon="https://img.icons8.com/metro/50/ffffff/new-post.png"
            label="Email"
            value="sinagabrian5@gmail.com"
            link="mailto:sinagabrian5@gmail.com"
          />
          <ContactItem
            icon="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
            label="WhatsApp"
            value="+62 813-7520-7582"
            link="https://wa.me/6281375207582"
          />
          <ContactItem
            icon="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
            label="LinkedIn"
            value="linkedin.com/in/briansinaga"
            link="https://www.linkedin.com/in/brian-sinaga-8955b5286/"
          />
          <ContactItem
            icon="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
            label="Instagram"
            value="@_briansinaga"
            link="https://instagram.com/_briansinaga"
          />
          <ContactItem
            icon="https://img.icons8.com/ios-filled/50/ffffff/github.png"
            label="GitHub"
            value="github.com/BrianSinaga"
            link="https://github.com/BrianSinaga"
          />
        </div>
      </div>

      <!-- Contact Form -->
      <div
        class="bg-[#111a3e] rounded-2xl p-6 border border-[#1f1641] shadow-xl"
        data-aos="fade-left"
        data-aos-duration="1400"
      >
        <form class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              class="w-full p-3 rounded-lg bg-[#111827] text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              class="w-full p-3 rounded-lg bg-[#111827] text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              placeholder="Let's talk about..."
              class="w-full p-3 rounded-lg bg-[#111827] text-gray-100 min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-800 hover:to-purple-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, h } from 'vue';

export default defineComponent({
  components: {
    ContactItem: defineComponent({
      name: 'ContactItem',
      props: {
        icon: String,
        label: String,
        value: String,
        link: String
      },
      render() {
        return h('div', { class: 'flex items-center', 'data-aos': 'fade-right' }, [
          h('div', {
            class: 'p-3 bg-[#1c2441] rounded-full border border-[#2e2956] w-12 h-12 flex justify-center items-center'
          }, [
            h('img', {
              src: this.icon,
              alt: this.label,
              class: 'w-5 h-5'
            })
          ]),
          h('div', { class: 'ml-4' }, [
            h('h4', { class: 'text-sm font-semibold' }, this.label),
            h('a', {
              href: this.link,
              target: '_blank',
              class: 'text-purple-400 hover:underline text-sm'
            }, this.value)
          ])
        ]);
      }
    })
  }
});
</script>
