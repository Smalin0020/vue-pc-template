import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入注册在 Vue 原型方法
import '@/utils/base.js'

// element ui
import './plugins/element.js'

// icon 引入
import '@/icons'

import store from '@/store/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
