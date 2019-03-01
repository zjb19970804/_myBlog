<template>
  <div class="mainContent">
    <p>介系一个登露页面</p>
    {{ $store.state.user }}
  </div>
</template>

<script>
import { getToken } from '@/api'
import localforage from 'localforage'
const { log } = console
export default {
  // async fetch({ app, store, query }) {
  //   // 如果有code表示是登录授权回调进入的此页面
  //   if (query.code) {
  //     await app.$tryCatch(async () => {
  //       const data = await getToken({
  //         code: query.code
  //       })
  //       if (data.code === 200) {
  //         localforage
  //           .setItem('user', data.data)
  //           .then((value) => {
  //             log(value)
  //             store.commit('setUser', value)
  //           })
  //           .catch((e) => log(e))
  //       }
  //     })
  //   }
  // },
  mounted() {
    // 如果有code表示是登录授权回调进入的此页面
    const { query } = this.$route
    if (query.code) {
      this.$tryCatch(async () => {
        const data = await getToken({
          code: query.code
        })
        if (data.code === 200) {
          localforage
            .setItem('token', data.data)
            .then((value) => {
              log(value)
              // window.location.href = 'http://127.0.0.1:3000'
              this.$store.commit('setToken', value)
            })
            .catch((e) => log(e))
        }
      })
    }
  }
}
</script>
