import Vue from 'vue'
import VueRouter from 'vue-router'
import Active from '../views/Active.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Active',
    meta: { layout: 'default' },
    component: Active
  },
  {
    path: '/auth',
    name: 'Auth',
    meta: { layout: 'auth' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/liabilities',
    name: 'Liabilities',
    meta: { layout: 'default' },
    component: () => import('../views/Liabilities.vue')
  },
  {
    path: '/capital',
    name: 'Capital',
    meta: { layout: 'default' },
    component: () => import('../views/Capital.vue')
  },
  {
    path: '/add',
    name: 'Add',
    meta: { layout: 'default' },
    component: () => import('../views/Add.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
