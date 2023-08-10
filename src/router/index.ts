import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/layout/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashbroad',
      component: Layout,
      children: [{
        path: '/dashbroad',
        name: 'dashbroad',
        component: () => import('../views/dashbroad.vue'),
      },{
        path: '/menu1',
        name: 'menu1',
        component: () => import('../views/menu1.vue'),
      },{
        path: '/menu2',
        name: 'menu2',
        component: () => import('../views/menu2.vue'),
      }]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  console.log('beforeEach', to, from)
  return true
})
// router.beforeEach((to, from ,next) => {
//   console.log('beforeEach', to, from, )
//   next()
// })

export default router
