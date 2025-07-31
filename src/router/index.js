import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Contact from '../views/AboutView.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AboutView',
    name: 'AboutView',
    components: AboutView
  },
  {
    path: '/Projects',
    name: 'Projects',
    component:Projects
  },
  {
    path: '/Skills',
    name: 'Skills',
    component:Skills
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
