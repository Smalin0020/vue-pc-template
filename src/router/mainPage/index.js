export default [
  {
    path: '/main/1-1',
    component: () => import(/* webpackChunkName: "image-compression" */ '@/views/mainPage/Main1-1.vue')
  },
  {
    path: '/main/1-2',
    component: () => import(/* webpackChunkName: "sprites" */ '@/views/mainPage/Main1-2.vue')
  }
]
