import axios from 'axios'
import qs from 'qs'
let _store, _error
export default ({ store, error }) => {
  _store = store
  _error = error
}
axios.defaults.baseURL = process.env === 'production' ? '' : 'http://127.0.0.1:7001'
axios.defaults.withCredentials = true
axios.defaults.timeout = 10000
axios.interceptors.request.use(
  (config) => {
    config.data = qs.stringify(config.data)
    if (_store.state.token) {
      config.headers.Authorization = _store.state.token.token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    if (response.data.code === -1) {
      _store.commit('setToken')
    }
    return response
  },
  (error) => {
    _error({
      statusCode: -1,
      message: error
    })
    return Promise.reject(error)
  }
)
