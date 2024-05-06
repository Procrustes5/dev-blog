import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/pages/HomeView.vue'
import FeedDetailView from '@/views/pages/FeedDetailView.vue'

export const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/feed',
      name: 'feed',
      component: FeedDetailView
    }
  ]

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
