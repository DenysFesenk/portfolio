import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutMe from '../views/AboutMe.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AboutMe',
    component: AboutMe
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import(/* webpackChunkName: "work" */ '../views/Works.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "work" */ '../views/Contact.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
