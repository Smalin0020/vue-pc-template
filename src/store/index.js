import Vue from 'vue'
import Vuex from 'vuex'

import global from '@/store/global/index'
import user from '@/store/user/index'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    global,
    user
  }
})

export default store
