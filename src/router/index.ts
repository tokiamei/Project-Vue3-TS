import { createRouter, Router, RouteRecordRaw, RouterOptions, createWebHistory }  from 'vue-router'

const routes:RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: () => import('../views/Home/Home.vue') },
  { path: '/login', name: 'login', component: () => import('../views/Login/Login.vue') },
]

// RouterOptions是路由选项类型
const options: RouterOptions = {
 history: createWebHistory(),
 routes
}

// Router是路由对象类型
const router: Router = createRouter(options)

export default router