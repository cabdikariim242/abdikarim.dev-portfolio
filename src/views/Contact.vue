<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 px-6 py-16 text-white">
    <!-- Header -->
    <h1 class="text-4xl font-extrabold mb-12 text-pink-300 drop-shadow-lg">
      Contact Me
    </h1>

    <!-- Contact Card -->
    <transition name="fade-in">
      <div class="bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-lg max-w-lg w-full text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <p class="text-lg mb-6">
          I’d love to connect! Feel free to reach out via email or check my GitHub for projects.
        </p>

        <!-- Gmail -->
        <a 
          href="mailto:abdikariim.dev@gmail.com" 
          class="flex items-center justify-center gap-3 bg-pink-500/80 hover:bg-pink-600 transition-colors duration-300 text-white px-6 py-3 rounded-full shadow-lg mb-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
            <path d="M12 13.065L1.5 6.5v11h21v-11l-10.5 6.565zM12 11L1.5 4.5h21L12 11z"/>
          </svg>
          abdikariim.dev@gmail.com
        </a>

        <!-- GitHub -->
        <a 
          href="https://github.com/cabdikariim242" 
          target="_blank"
          class="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-900 transition-colors duration-300 text-white px-6 py-3 rounded-full shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48
              0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.34-3.37-1.34
              -.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61
              1 .07 1.53 1.03 1.53 1.03 .9 1.53 2.36 1.09 2.94.84
              .09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93
              0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 
              .84-.27 2.75 1.02A9.57 9.57 0 0112 6.8a9.57 9.57 0 
              012.5.34c1.9-1.29 2.75-1.02 2.75-1.02.55 1.37.2 
              2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 
              0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 
              0 1.34-.01 2.42-.01 2.75 0 .26.18.58.69.48A10 
              10 0 0012 2z"
            />
          </svg>
          github.com/cabdikariim242
        </a>
      </div>
    </transition>
  </div>
</template>

<script setup>
</script>

<style>
/* Fade-in Animation */
.fade-in-enter-active {
  transition: all 0.8s ease;
}
.fade-in-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.fade-in-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
