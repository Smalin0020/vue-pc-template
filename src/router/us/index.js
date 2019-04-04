export default [
  {
    path: '/us',
    component: () => import(/* webpackChunkName: "image-compression" */ '@/views/us/Index.vue')
  }
]
