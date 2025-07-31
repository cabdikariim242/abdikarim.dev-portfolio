<template>
  <div class="relative h-screen overflow-hidden flex flex-col justify-center items-center text-center">
    <!-- Animated Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x"></div>
    <!-- Glass Overlay -->
    <div class="absolute inset-0 backdrop-blur-sm bg-black/30"></div>

    <!-- Floating Glowing Blobs -->
    <div class="absolute top-20 left-10 w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-40 animate-bounce"></div>
    <div class="absolute bottom-20 right-20 w-60 h-60 bg-indigo-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>

    <!-- Navbar -->
    <nav class="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-20">
      <h1 class="text-2xl md:text-3xl font-extrabold text-white drop-shadow">
        Abdikarim<span class="text-rose-300">.</span>
      </h1>
      <!-- Desktop Links -->
      <div class="hidden md:flex space-x-6 text-white font-semibold">
        <router-link to="/" class="hover:text-rose-300 transition">Home</router-link>
        <router-link to="/AboutView" class="hover:text-rose-300 transition">About</router-link>
        <router-link to="/Projects" class="hover:text-rose-300 transition">Projects</router-link>
        <router-link to="/Skills" class="hover:text-rose-300 transition">Skills</router-link>
        <router-link to="/Contact" class="hover:text-rose-300 transition">Contact</router-link>
      </div>
      <!-- Mobile Hamburger -->
      <div class="md:hidden z-30">
        <button @click="menuOpen = !menuOpen" class="text-white focus:outline-none">
          <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <!-- Mobile Menu -->
      <transition name="fade">
        <div v-if="menuOpen" class="absolute top-0 left-0 w-full h-screen bg-black/80 flex flex-col items-center justify-center space-y-8 text-2xl font-bold text-white">
          <router-link @click="menuOpen=false" to="/">Home</router-link>
          <router-link @click="menuOpen=false" to="/AboutView">About</router-link>
          <router-link @click="menuOpen=false" to="/Projects">Projects</router-link>
          <router-link @click="menuOpen=false" to="/Skills">Skills</router-link>
          <router-link @click="menuOpen=false" to="/Contact">Contact</router-link>
        </div>
      </transition>
    </nav>

    <!-- Hero Content -->
    <div class="relative z-10 px-4">
      <h1 class="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg animate-fade-up">
        Hi, I’m <span class="text-rose-300">Abdikarim</span>
      </h1>
      <p class="mt-6 text-xl md:text-2xl text-white/90 animate-fade-up-delay font-mono">
        <span ref="typedText"></span>
      </p>
      <div class="mt-10 flex gap-6 justify-center">
        <router-link 
          to="/projects" 
          class="px-6 py-3 bg-rose-500 hover:bg-rose-600 rounded-lg shadow-lg transition transform hover:scale-110 hover:shadow-[0_0_20px_#fb7185]">
          View My Projects
        </router-link>
        <router-link 
          to="/contact" 
          class="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow-lg transition transform hover:scale-110 hover:shadow-[0_0_20px_#6366f1]">
          Contact Me
        </router-link>
      </div>
    </div>

    <!-- Scroll Down Indicator -->
    <div class="absolute bottom-10 flex flex-col items-center text-white opacity-70 animate-bounce">
      <span class="text-sm">Scroll Down</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
           stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const typedText = ref(null)
const menuOpen = ref(false)

onMounted(async () => {
  // Wait until DOM is ready
  await nextTick()

  const words = [
    "Junior Web Developer",
    "Vue.js Enthusiast",
    "Tailwind CSS Lover",
    "Creative Coder 🚀"
  ]

  let i = 0
  let j = 0
  let currentWord = words[0]
  let isDeleting = false

  function type() {
    // Safety check: if element isn't mounted, stop
    if (!typedText.value) return  

    typedText.value.textContent = currentWord.substring(0, j)

    if (!isDeleting && j++ === currentWord.length) {
      isDeleting = true
      setTimeout(type, 1200)
    } else if (isDeleting && j-- === 0) {
      isDeleting = false
      currentWord = words[++i % words.length]
    }
    setTimeout(type, isDeleting ? 80 : 150)
  }

  type()
})
</script>

<style scoped>
/* Background Gradient Animation */
@keyframes gradient-x {
  0%, 100% { background-position: left center; }
  50% { background-position: right center; }
}
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 8s ease infinite;
}

/* Fade-Up Animations */
@keyframes fade-up {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-up { animation: fade-up 1.2s ease forwards; }
.animate-fade-up-delay { animation: fade-up 1.2s ease forwards; animation-delay: 0.5s; }

/* Transition for Mobile Menu */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
