import Home from '@/pages/home/Home.vue'
import About from '@/pages/about/About.vue'

const routes = [
  // umd 打包不支持路由懒加载
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

export default routes