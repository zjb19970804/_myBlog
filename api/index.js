import axios from 'axios'

// 登录获取token及用户信息
export const getToken = (params) => {
  return axios.get('/blog/login', { params }).then((res) => res.data)
}
// 获取文章列表
export const getPostList = (params) => {
  return axios.get('/blog/postList', { params }).then((res) => res.data)
}
// 获取文章详情
export const getPostDetail = (params) => {
  return axios.get('/blog/postDetail', { params }).then((res) => res.data)
}
// 获取文章详情的评论
export const getPostComments = (params) => {
  return axios.get('/blog/postComments', { params }).then((res) => res.data)
}
