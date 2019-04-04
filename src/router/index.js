import Vue from 'vue'
import Router from 'vue-router'

import TheLayout from '@/views/TheLayout.vue'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { getToken } from '@/utils/auth'
Vue.use(Router)

const IndexRoute = {
  path: '',
  component: TheLayout,
  redirect: '/main/1-1',
  children: []
}

let routes = [
  IndexRoute,
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Index.vue')
  },
  { path: '*', redirect: '/404', hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true }
]

const routerContext = require.context('./', true, /index\.js$/)
routerContext.keys().forEach(route => {
  // 如果是根目录的 index.js 、不处理
  if (route.startsWith('./index')) {
    return
  }
  const routerModule = routerContext(route)
  /**
  * 兼容 import export 和 require module.export 两种规范
  */
  IndexRoute.children = [...IndexRoute.children, ...(routerModule.default || routerModule)]
})

const router = new Router({
  mode: 'history',
  routes: routes
  // routes: [
  //   // 登录、注册、忘记密码界面
  //   { path: '/login', component: () => import('@/views/login/Index'), hidden: true },
  //   // { path: '/register', component: () => import('@/views/login/TheRegister'), hidden: true },
  //   // { path: '/forget_password', component: () => import('@/views/login/ForgetPassword'), hidden: true },
  //   // 系统界面
  //   {
  //     path: '',
  //     component: TheLayout,
  //     name: 'main',
  //     redirect: '/main',
  //     children: [
  //       {
  //         path: '/main',
  //         name: 'main',
  //         component: () => import('@/views/Home')
  //       }, {
  //         path: '/about',
  //         name: 'about',
  //         component: () => import('@/views/About')
  //       }
  //     ]
  //   },

  //   // 错误界面
  // ]
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
