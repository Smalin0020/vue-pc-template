
import * as types from '@/store/mutations-types'

const global = {
  namespaced: true,
  state: {
    [types.MENU_COLLAPSE]: false,
    [types.BREADCRUMB]: []
  },
  mutations: {
    [types.MENU_COLLAPSE] (state, payload) {
      state[types.MENU_COLLAPSE] = payload
    },
    [types.BREADCRUMB] (state, payload) {
      state[types.BREADCRUMB] = payload
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
