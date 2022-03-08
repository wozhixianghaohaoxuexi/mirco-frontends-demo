import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home/Home.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router