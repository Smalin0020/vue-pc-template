import axios from 'axios'
// import store from '@/store'

import { Message } from 'element-ui'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 环境切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '本地环境'
} else if (process.env.NODE_ENV === 'test') {
  axios.defaults.baseURL = '测试环境'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = '部署环境'
}

// 创建axios 实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // 请求超时时间
})

// request 拦截器
service.interceptors.request.use(config => {
  // 这里可以自定义一些config 配置
  NProgress.start()
  // 这里计算签名
  return config
},
error => {
  //  这里处理一些请求出错的情况
  Promise.reject(error)
}
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data

    NProgress.done()
    // 这里处理一些response 正常放回时的逻辑
    // store.dispatch('SetLoading', false)
    return res
  },
  error => {
    // 这里处理一些response 出错时的逻辑
    Message.error(error.message)
    NProgress.done()
    // store.dispatch('SetLoading', false)
    return Promise.reject(error)
  }
)

export default service
