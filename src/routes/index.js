import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/about/About.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router