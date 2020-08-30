import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  
    { path: '/', component: () => import('../views/Index.vue') },
    { path: '/login', component: () => import('../views/Login.vue') },
    { path: '/cate', component: () => import('../views/Cate.vue') },
    { path: '/mine', component: () => import('../views/Mine.vue') },
    { path: '/cart', component: () => import('../views/Cars.vue') },
    { path: '/goods/:id', component: () => import('../views/Goods.vue') },
    { path: '/order', component: () => import('../views/Order.vue') },
    { path: '/sign', component: () => import('../views/Sign.vue') },
    { path: '/list', component: () => import('../views/List.vue') },
    { path: '/pay', component: () => import('../views/Pay.vue') },
]

const router = new VueRouter({
  mode:'history',
  routes
})



// 全局前置守卫
// 在Router实例上进行守卫
// router.beforeEach((to, from, next) => {
//   if (
//     to.path == '/login' || to.path == '/' || to.path == '/list' || to.path == '/mine' || to.path == '/cate'
//               || to.path == '/goods' || to.path == '/goods'
//   ) {
//     next()
//   } else {
//     let token = localStorage.getItem('token')
//     if (!token) return next({path:'/login'})
//     next()
//   }
// })

export default router



