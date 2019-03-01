import axios from 'axios'
import qs from 'qs'

let _store
export default ({ store }) => (_store = store)
axios.defaults.baseURL = process.env === 'production' ? '' : 'http://127.0.0.1:7001'
axios.defaults.timeout = 10000
axios.interceptors.request.use(
  (config) => {
    config.data = qs.stringify(config.data)
    if (_store.state.token) {
      config.headers.Authorization = _store.state.token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
