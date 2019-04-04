
import * as types from '@/store/mutations-types'

const global = {
  namespaced: true,
  state: {
    [types.MENU_COLLAPSE]: false
  },
  mutations: {
    [types.MENU_COLLAPSE] (state, payload) {
      state[types.MENU_COLLAPSE] = payload
    }
  },
  actions: {

  },
  getters: {
    getMenuCollapse (state) {
      return state[types.MENU_COLLAPSE]
    }
  }
}

export default global
