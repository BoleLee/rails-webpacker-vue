import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    test: '初始值'
  },
  mutations: {
    updateTest (state, value) {
      state.test = value
    },
  },
  actions: {

  }
})

export default store
