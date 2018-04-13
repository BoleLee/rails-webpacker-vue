import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    test: 'test value',
    count: 0
  },
  mutations: {
    updateTest: state => state.test = 'new test value',
    initialTest: state => state.test = 'initial test value',
    increment: state => state.count++,
    decrement: state => state.count--
  }
})

export default store
