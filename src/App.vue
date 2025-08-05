<template>
  <div :class="{ dark: darkMode }" class="transition-colors duration-700">
    <!-- Navbar -->
    <nav
      class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-white/30 dark:bg-gray-900/50 backdrop-blur-lg shadow-lg"
    >
      <h1 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
        Abdikarim.dev
      </h1>
      <ul
        class="flex space-x-6 text-gray-800 dark:text-gray-200 font-semibold"
      >
        <li>
          <a href="#home" class="hover:text-rose-500 transition">Home</a>
        </li>
        <li>
          <a href="#about" class="hover:text-rose-500 transition">About</a>
        </li>
        <li>
          <a href="#skills" class="hover:text-rose-500 transition">Skills</a>
        </li>
        <li>
          <a href="#projects" class="hover:text-rose-500 transition">Projects</a>
        </li>
        <li>
          <a href="#contact" class="hover:text-rose-500 transition">Contact</a>
        </li>
      </ul>
      <button
        @click="darkMode = !darkMode"
        class="ml-6 bg-rose-500 hover:bg-rose-600 px-4 py-2 rounded-lg text-white shadow-lg transition"
        :aria-label="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <svg
          v-if="!darkMode"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v1m0 16v1m8.66-11.66l-.71.7M4.05 18.95l-.71.7M21 12h-1M4 12H3m15.66 5.66l-.71-.7M6.34 6.34l-.71-.7M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="none"
        >
          <path
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
          />
        </svg>
      </button>
    </nav>

    <!-- Home -->
    <section
      id="home"
      class="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      :style="{
        backgroundImage: darkMode
          ? 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80)'
          : 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80)',
      }"
    >
      <!-- Floating bubbles -->
      <div
        v-for="n in 20"
        :key="n"
        class="bubble absolute rounded-full bg-white/40 dark:bg-cyan-400/30"
      ></div>

      <div
        class="relative z-10 text-center space-y-6 text-white px-6 max-w-xl"
        data-aos="fade-up"
      >
        <h1
          class="text-5xl font-extrabold drop-shadow-xl animate-pulse"
          tabindex="0"
        >
          Hi, I’m Abdikarim
        </h1>
        <p class="text-lg max-w-xl mx-auto">
          Junior web developer creating interactive apps with Vue.js & Tailwind CSS.
        </p>
        <div class="space-x-4">
          <a
            href="#projects"
            class="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg shadow-lg text-white transition"
            >View Projects</a
          >
          <a
            href="#contact"
            class="bg-rose-500 hover:bg-rose-600 px-6 py-3 rounded-lg shadow-lg text-white transition"
            >Contact Me</a
          >
        </div>
      </div>
    </section>

    <!-- About -->
    <section
      id="about"
      class="py-24 bg-cover bg-center flex flex-col items-center text-white px-4"
      :style="{
        backgroundImage: darkMode
          ? 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80)'
          : 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80)',
      }"
    >
      <div
        class="max-w-3xl text-center space-y-6 bg-black/40 dark:bg-gray-900/60 rounded-xl p-8 backdrop-blur-sm"
        data-aos="fade-up"
      >
        <img
          src="@/assets/cmdpicture.png"
          alt="Profile"
          class="w-36 h-36 mx-auto rounded-full border-4 border-cyan-300 transition-transform duration-300 hover:scale-110"
        />
        <h2 class="text-4xl font-bold">About Me</h2>
        <div class="w-24 h-1 bg-cyan-400 mx-auto animate-bounce"></div>
        <p class="text-lg leading-relaxed">
          I started coding 6 months ago and have built several projects using
          <strong>HTML, CSS, JavaScript, Tailwind, and Vue.js</strong>. I love
          creating interactive, user-friendly web apps and improving my skills
          every day.
        </p>
      </div>
    </section>

    <!-- Skills -->
    <section
      id="skills"
      class="py-24 bg-gray-100 dark:bg-gray-900"
      data-aos="fade-up"
    >
      <div class="max-w-5xl mx-auto px-4 text-center space-y-10">
        <h2 class="text-4xl font-bold text-gray-800 dark:text-gray-200">
          My Skills
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="p-6 bg-white/70 dark:bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition transform duration-300"
          >
            <h3
              class="text-xl font-semibold text-indigo-600 dark:text-indigo-400"
            >
              {{ skill.name }}
            </h3>
            <div
              class="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 mt-3"
            >
              <div
                class="bg-rose-500 h-3 rounded-full transition-all duration-1000"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section
      id="projects"
      class="py-24 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-black"
      data-aos="fade-up"
    >
      <div class="max-w-6xl mx-auto px-4 text-center space-y-12 text-white">
        <h2 class="text-4xl font-bold">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in projects"
            :key="project.name"
            class="p-6 bg-white/30 dark:bg-gray-800/60 backdrop-blur-md rounded-xl shadow-xl hover:scale-105 hover:rotate-1 transition transform duration-300"
          >
            <img
              :src="project.image"
              :alt="project.name"
              class="rounded-lg shadow-lg mb-4"
            />
            <h3 class="text-2xl font-bold">{{ project.name }}</h3>
            <p class="text-sm mt-2">{{ project.desc }}</p>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-4 inline-block bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg shadow-lg"
              >Live Demo</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section
      id="contact"
      class="py-24 bg-white dark:bg-gray-900"
      data-aos="fade-up"
    >
      <div
        class="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center space-y-6"
      >
        <h2
          class="text-4xl font-bold text-gray-800 dark:text-gray-200"
          tabindex="0"
        >
          Contact Me
        </h2>
        <p class="text-gray-700 dark:text-gray-400">
          Feel free to reach out via email or GitHub.
        </p>
        <div class="flex justify-center space-x-10 text-3xl text-gray-700 dark:text-gray-300">
          <a
            href="abdikarim.dev01@gmail.com"
            aria-label="Email"
            class="hover:text-rose-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 12l-4-4-4 4m0 0l4 4 4-4m-8 4v4a2 2 0 002 2h8a2 2 0 002-2v-4"
              />
            </svg>
          </a>
          <a
            href="https://github.com/cabdikariim242"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            class="hover:text-indigo-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2a10 10 0 00-3.16 19.5c.5.09.68-.22.68-.48v-1.68c-2.77.6-3.36-1.34-3.36-1.34a2.64 2.64 0 00-1.11-1.45c-.9-.62.07-.61.07-.61a2.08 2.08 0 011.52 1.02 2.12 2.12 0 002.9.83 2.14 2.14 0 01.63-1.33c-2.21-.25-4.54-1.1-4.54-4.9a3.83 3.83 0 011-2.66 3.54 3.54 0 01.1-2.62s.84-.27 2.75 1.02a9.49 9.49 0 015 0c1.9-1.29 2.75-1.02 2.75-1.02a3.54 3.54 0 01.1 2.62 3.83 3.83 0 011 2.66c0 3.8-2.34 4.65-4.57 4.9a2.4 2.4 0 01.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0012 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const darkMode = ref(true);

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Tailwind CSS", level: 75 },
  { name: "Vue.js", level: 70 },
  { name: "GitHub", level: 65 },
];

const projects = [
  {
    name: "Tailwise Dashboard",
    desc: "Responsive Vue.js dashboard with charts.",
    link: "https://lambent-truffle-65699d.netlify.app",
    image: require("@/assets/tailwis.png"),
  },
  {
    name: "Moshify Landing",
    desc: "Clean responsive landing page.",
    link: "https://cabdikariim242.github.io/task-tracker/src/Moshify.html",
    image: require("@/assets/moshify.png"),
  },
  {
    name: "New Year Countdown",
    desc: "Festive countdown timer.",
    link: "https://cabdikariim242.github.io/30-HTML-CSS-JS-colored/New%20Year%20Count%20Down/index.html",
    image: require("@/assets/countdown.png"),
  },
];
</script>

<style scoped>
/* Floating bubbles */
.bubble {
  width: 20px;
  height: 20px;
  animation: rise 20s infinite ease-in;
}
.bubble:nth-child(odd) {
  width: 15px;
  height: 15px;
  animation-duration: 25s;
}
@keyframes rise {
  0% {
    transform: translateY(100vh) scale(1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-10vh) scale(1.5);
    opacity: 0;
  }
}
</style>
