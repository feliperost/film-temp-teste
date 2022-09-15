import { createRouter, createWebHistory } from 'vue-router'
import FilmesView from '../views/FilmesView.vue'
import TempoView from '../views/TempoView.vue'


const routes = [
  {
    path: '/filmes',
    name: 'FilmesView',
    component: FilmesView
  },
  {
    path: '/tempo',
    name: 'TempoView',
    component: TempoView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
