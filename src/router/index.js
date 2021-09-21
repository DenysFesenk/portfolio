import Vue from 'vue'
import VueRouter from 'vue-router'
import AllAboutMe from '../views/AllAboutMe.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AllAboutMe',
    component: AllAboutMe
  },
  {
    path: '/myworks',
    name: 'My Works',
    component: () => import(/* webpackChunkName: "work" */ '../views/MyWorks.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
