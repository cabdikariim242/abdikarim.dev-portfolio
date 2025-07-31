<template>
  <div class="relative h-screen overflow-hidden">
    <!-- Background gradient animation -->
    <div class="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x"></div>
    <!-- Overlay -->
    <div class="absolute inset-0 backdrop-blur-sm bg-black/30"></div>

    <!-- Navbar -->
    <nav class="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-20">
      <h1 class="text-2xl md:text-3xl font-extrabold text-white drop-shadow">
        Abdikarim<span class="text-rose-300">.</span>
      </h1>
      <div class="flex space-x-6 text-white font-semibold">
        <router-link to="/" class="hover:text-rose-300 transition">Home</router-link>
        <router-link to="/AboutView" class="hover:text-rose-300 transition">About</router-link>
        <router-link to="/Projects" class="hover:text-rose-300 transition">Projects</router-link>
        <router-link to="/Skills" class="hover:text-rose-300 transition">Contact</router-link>
      </div>
    </nav>

    <!-- Hero Content -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
      <h1 class="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
        Hi, I’m <span class="text-rose-300">Abdikarim</span>
      </h1>
      <p class="mt-6 text-xl md:text-2xl font-light max-w-2xl">
        A junior web developer building modern, interactive apps with 
        <span class="text-teal-300">Vue.js</span> & <span class="text-pink-300">Tailwind CSS</span>.
      </p>
      <div class="mt-10 flex gap-6">
        <router-link 
          to="/Projects" 
          class="px-6 py-3 bg-rose-500 hover:bg-rose-600 rounded-lg shadow-lg transition transform hover:scale-110">
          View My Projects
        </router-link>
        <router-link 
          to="/Contact" 
          class="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow-lg transition transform hover:scale-110">
          Contact Me
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes gradient-x {
  0%, 100% { background-position: left center; }
  50% { background-position: right center; }
}
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 8s ease infinite;
}
</style>
