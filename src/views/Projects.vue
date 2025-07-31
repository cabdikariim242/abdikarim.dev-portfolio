<template>
  <div class="min-h-screen bg-[url('@/assets/backgroundtwo.jpg')] bg-cover bg-center px-6 py-16 flex flex-col items-center text-white">
    <!-- Header -->
    <h1 class="text-4xl font-extrabold mb-12 text-rose-400 text-center drop-shadow-lg">
      My Projects
    </h1>

    <!-- Projects Grid -->
    <div 
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full"
    >
      <!-- Project Card -->
      <transition-group 
        name="fade-zoom"
        tag="div"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
      >
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="rounded-xl bg-white/20 backdrop-blur-md shadow-lg p-6 flex flex-col justify-between transform transition duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div>
            <img 
              :src="project.image" 
              :alt="project.title"
              class="rounded-lg shadow-md mb-4 w-full h-40 object-cover"
            />
            <h2 class="text-2xl font-bold text-cyan-300 mb-2">{{ project.title }}</h2>
            <p class="text-gray-200 text-sm leading-relaxed mb-4">{{ project.description }}</p>
            <p class="text-sm"><span class="font-bold text-rose-300">Tech Stack:</span> {{ project.tech }}</p>
          </div>
          <div class="mt-4 flex justify-between items-center">
            <a :href="project.demo" target="_blank" class="text-yellow-300 underline">Live Demo</a>
            <a :href="project.github" target="_blank" class="text-blue-400 underline">GitHub</a>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: "Tailwise Dashboard",
    description: "A responsive Vue.js dashboard styled with Tailwind CSS. Includes charts, reusable components, and a modern layout.",
    tech: "Vue.js, Tailwind CSS, JavaScript",
    image: new URL('@/assets/tailwis.png', import.meta.url).href,
    demo: "https://lambent-truffle-65699d.netlify.app",
    github: "https://github.com/cabdikariim242/tailwise-vue"
  },
  {
    id: 2,
    title: "Moshify Landing Page",
    description: "A clean and responsive landing page inspired by Mosh Hamedani’s design, focused on semantic HTML and modern CSS.",
    tech: "HTML, CSS, JavaScript",
    image: new URL('@/assets/moshify.png', import.meta.url).href,
    demo: "https://cabdikariim242.github.io/task-tracker/src/Moshify.html",
    github: "https://github.com/cabdikariim242/task-tracker"
  },
  {
    id: 3,
    title: "New Year Countdown",
    description: "An interactive web app that counts down in real time to the New Year with dynamic updates and a festive UI.",
    tech: "HTML, CSS, JavaScript",
    image: new URL('@/assets/countdown.png', import.meta.url).href,
    demo: "https://cabdikariim242.github.io/30-HTML-CSS-JS-colored/New%20Year%20Count%20Down/index.html",
    github: "https://github.com/cabdikariim242/30-HTML-CSS-JS-colored"
  }
]
</script>

<style>
/* Fade & Zoom Animation */
.fade-zoom-enter-active, .fade-zoom-leave-active {
  transition: all 0.6s ease;
}
.fade-zoom-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.fade-zoom-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
