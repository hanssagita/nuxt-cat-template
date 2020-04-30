import Vuex from 'vuex'
import dummy from './modules/dummy'

const createStore = () => {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
      dummy
    }
  })
}

export default createStore
