import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMe from '@/views/AboutMe.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import Setup from '@/views/Setup.vue'
import Contact from '@/views/Contact.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutMe,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },

    {
      path: '/setup',
      name: 'setup',
      component: Setup,
    },

    
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],

  linkExactActiveClass: 'active'
})

export default router
