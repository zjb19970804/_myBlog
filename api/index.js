import axios from 'axios'

export const getToken = (params) => {
  return axios.get('/blog/login', { params }).then((res) => res.data)
}
