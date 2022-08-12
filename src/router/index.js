import { createRouter, createMemoryHistory } from 'vue-router'
import Menu from '../views/Menu.vue'

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/joinGame',
      name: 'joinGame',
      component: () => import('../views/JoinGame.vue')
    },
    {
      path: '/createGame',
      name: 'createGame',
      component: () => import('../views/CreateGame.vue')
    },
    {
      path: '/findPack',
      name: 'findPack',
      component: () => import('../views/FindPack.vue')
    },
    {
      path: '/createPack',
      name: 'createPack',
      component: () => import('../views/CreatePack.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/Game.vue')
    }
  ]
})

export default router
