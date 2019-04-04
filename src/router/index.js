import Vue from 'vue'
import Router from 'vue-router'

import TheLayout from './views/common/TheLayout.vue'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { getToken } from '@/utils/auth'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 登录、注册、忘记密码界面
    { path: '/login', component: () => import('@/views/login/Index'), hidden: true },
    // { path: '/register', component: () => import('@/views/login/TheRegister'), hidden: true },
    // { path: '/forget_password', component: () => import('@/views/login/ForgetPassword'), hidden: true },
    // 系统界面
    {
      path: '',
      component: TheLayout,
      name: 'main',
      redirect: '/main',
      children: [
        {
          path: '/main',
          name: 'main',
          component: () => import('@/views/Home')
        }, {
          path: '/about',
          name: 'about',
          component: () => import('@/views/About')
        }
      ]
    },

    // 错误界面
    { path: '*', redirect: '/404', hidden: true },
    { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true }
  ]
})

// 将登录，注册，忘记密码放入白名单
const whiteList = ['/login', '/register', '/forget_password']

router.beforeEach((to, from, next) => {
  NProgress.start()
  // 检查是否带有 token
  // 如果没有，限制登录
  if (getToken()) {
    if (whiteList.includes(to.path)) {
      next('/')
    } else {
      next()
    }
  } else {
    /* has no token */
    // 如果不是白名单，都推到登录页
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach((to, from) => {
  // ...
  NProgress.done()
  console.log(to)
  console.log(from)
})

export default router
