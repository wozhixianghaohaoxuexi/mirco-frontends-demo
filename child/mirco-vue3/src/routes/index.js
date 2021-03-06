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

export default routes