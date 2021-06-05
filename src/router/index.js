import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/dashboard')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('@/views/form/index')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login')
  }
]

const router = new VueRouter({
  routes
})

export default router
