import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },
    component: () => import('D:/Marta/vue.js/budget/src/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'empty' },
    component: () => import('D:/Marta/vue.js/budget/src/views/Register.vue')
  },
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: () => import('D:/Marta/vue.js/budget/src/views/Home.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: { layout: 'main' },
    component: () => import('D:/Marta/vue.js/budget/src/views/History.vue')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: { layout: 'main' },
    component: () => import('D:/Marta/vue.js/budget/src/views/Planning.vue')
  },
  {
    path: '/record',
    name: 'record',
    meta: { layout: 'main' },
    component: () => import('D:/Marta/vue.js/budget/src/views/Record.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: { layout: 'main' },
    component: () => import('D:/Marta/vue.js/budget/src/views/Categories.vue')
  },
  {
    path: '/detail-record',
    name: 'detail-record',
    meta: { layout: 'main' },
    component: () => import('D:/Marta/vue.js/budget/src/views/DetailRecord.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'main' },
    component: () => import('D:/Marta/vue.js/budget/src/views/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
