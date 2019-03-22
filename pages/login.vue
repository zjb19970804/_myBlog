<template>
  <div class="mainContent">
    <p>介系一个登露回调页面</p>
  </div>
</template>

<script>
import { getToken } from '@/api'
import Cookie from 'js-cookie'
import { mapState } from 'vuex'
export default {
  async fetch({ store, query }) {
    // 如果有code表示是登录授权回调进入的此页面
    if (query.code) {
      const data = await getToken({
        code: query.code
      })
      store.commit('setToken', data.data)
    }
  },
  computed: mapState(['token']),
  mounted() {
    if (this.token) {
      Cookie.set('token', this.token)
    } else {
      Cookie.remove('token')
    }
    const lastUrl = Cookie.get('lastUrl')
    if (lastUrl) {
      this.$router.replace(lastUrl)
    } else {
      this.$router.replace('/')
    }
  }
}
</script>
