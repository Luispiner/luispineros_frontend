import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/usuario',
    name: 'Usuario',
    component:() =>import (/* webpackChukName: "login" */ '../views/UsuarioView.vue')

  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router