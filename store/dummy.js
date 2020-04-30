import { getDummy } from '@/api/dummy'
const state = {
  dummy: 'initDummy'
}

const mutations = {
  setDummy(state, value) {
    state.dummy = value
  }
}

const actions = {
  changeDummy({ commit }, { success, fail }) {
    getDummy((response) => {
      commit('setDummy', response.body.data)
      success && success(response)
    }, fail)
  }
}

const getters = {
  dummy(state) {
    return state.dummy
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
