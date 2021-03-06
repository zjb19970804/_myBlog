import Vue from 'vue'
import Vuex from 'vuex'
const cookieparser = process.server ? require('cookieparser') : undefined
Vue.use(Vuex)
export default () =>
  new Vuex.Store({
    state: {
      token: null,
      clientId: 'b17fdfd4cd7c3ccf21de',
      imageUrl: process.env.NODE_ENV === 'production' ? 'http://45.77.86.164:7001' : 'http://127.0.0.1:7001'
    },
    mutations: {
      setToken(state, value = null) {
        state.token = value
      }
    },
    actions: {
      nuxtServerInit({ commit }, { req }) {
        if (req.headers.cookie && cookieparser.parse(req.headers.cookie).token) {
          const token = JSON.parse(cookieparser.parse(req.headers.cookie).token)
          commit('setToken', token)
        }
      }
    }
  })
