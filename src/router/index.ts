import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMe from '@/components/AboutMe.vue'
import ProjectsView from '@/views/ProjectsView.vue'

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
  ],

  linkExactActiveClass: 'active'
})

export default router
