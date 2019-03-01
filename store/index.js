import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default () =>
  new Vuex.Store({
    state: {
      user: null,
      token: ''
    },
    mutations: {
      setUser(state, value) {
        state.user = value
      },
      setToken(state, value) {
        state.token = value
      }
    }
  })
