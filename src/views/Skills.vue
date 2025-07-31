<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 px-6 py-16 text-white">
    <!-- Header -->
    <h1 class="text-4xl font-extrabold mb-12 text-yellow-300 drop-shadow-lg">
      My Skills
    </h1>

    <!-- Skills Grid -->
    <transition-group 
      name="fade-up"
      tag="div"
      class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full"
    >
      <div 
        v-for="skill in skills" 
        :key="skill.name"
        class="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      >
        <h2 class="font-bold text-lg mb-3">{{ skill.name }}</h2>
        <div class="w-full bg-white/30 rounded-full h-4 overflow-hidden">
          <div 
            class="bg-yellow-400 h-4 rounded-full transition-all duration-700"
            :style="{ width: skill.level + '%' }"
          ></div>
        </div>
        <p class="mt-2 text-sm text-gray-200">{{ skill.level }}%</p>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Vue.js", level: 75 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Git/GitHub", level: 70 }
]
</script>

<style>
/* Fade Up Animation */
.fade-up-enter-active {
  transition: all 0.7s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
