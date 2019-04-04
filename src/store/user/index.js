
import * as types from '@/store/mutations-types'

const user = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    [types.TEST] (state, payload) {
      state.count++
    }
  },
  actions: {

  }
}

export default user
