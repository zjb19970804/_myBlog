import Qs from 'querystring'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default () =>
  new Vuex.Store({
    state: {
      token: null
    },
    mutations: {
      setToken(state, value = null) {
        state.token = value
      }
    },
    actions: {
      nuxtServerInit({ commit }, { req }) {
        if (req.headers.cookie) {
          const token = JSON.parse(Qs.parse(req.headers.cookie).token)
          commit('setToken', token)
        }
      }
    }
  })
