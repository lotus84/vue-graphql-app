import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/character/:id',
      name: 'character',
      component: () => import('@/views/CharacterView.vue')
    },
    {
      path: '/episode/:id',
      name: 'episode',
      component: () => import('@/views/EpisodeView.vue')
    },
  ]
})

export default router
