<template>
  <transition name="slideNav">
    <div class="nav-top" :class="{_blue: !isShow}">
      <div class="myContainer flexAlignCenter mynav-box">
        <nuxt-link to="/" class="mynav-box-title">影子比阳光美的博客</nuxt-link>
        <ul class="mynav-box-link">
          <li>
            <nuxt-link to="/">首页</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">关于</nuxt-link>
          </li>
        </ul>
        <div class="mynav-box-user">
          <!-- 登录状态 -->
          <div v-if="token" class="logined">
            <a-button @click="logout">退出</a-button>
          </div>
          <!-- 未登录状态 -->
          <div v-else class="unlogin">
            <a-button type="primary" @click.stop="login">登录</a-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Cookie from 'js-cookie'
export default {
  data: () => ({
    // 上一次滚动条距顶部的距离
    scrollTop: 0,
    // 是否显示顶部导航
    isShow: true
  }),
  mounted() {
    // 监听滚动事件
    document.addEventListener('scroll', this.listenScroll)
  },
  beforeDestroy() {
    // 移除监听事件
    document.removeEventListener('scroll', this.listenScroll)
  },
  computed: mapState(['token', 'clientId']),
  methods: {
    ...mapMutations(['setToken', 'setUser']),
    // @vuese
    // 判断滚动条的高度，并与上一次的相比较
    listenScroll() {
      const newScrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.isShow = newScrollTop < 60 ? true : newScrollTop < this.scrollTop
      this.scrollTop = newScrollTop
    },
    // @vuese
    // 登录
    login() {
      const url = `https://github.com/login/oauth/authorize?client_id=${this.clientId}&redirect_uri=${window.location.origin}/login&scope=user:email`
      Cookie.set('lastUrl', this.$route.fullPath)
      window.location.href = url
    },
    // @vuese
    // 退出登录
    logout() {
      this.setToken()
      this.setUser()
      Cookie.remove('token')
      Cookie.remove('lastUrl')
    }
  }
}
</script>

<style lang="less" scoped>
.slideNav-enter-active,
.slideNav-leave-active {
  transition: all 2s ease-out;
}
.slideNav-enter,
.slideNav-leave-to {
  opacity: 0;
}
.nav-top {
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.6s;
  .mynav-box {
    height: inherit;
    &-title {
      @media screen and(max-width: 750px) {
        font-size: 18px;
        text-indent: 1em;
      }
      letter-spacing: 2px;
      color: #0088f5;
      font-size: 22px;
    }
    &-link {
      height: inherit;
      line-height: 60px;
      font-size: 16px;
      margin: 0 auto;
      li {
        @media screen and(max-width: 750px) {
          width: auto;
          margin: 0 4px;
          font-size: 14px;
        }
        float: left;
        width: 100px;
        a {
          display: inline-block;
          width: 100%;
          text-align: center;
        }
      }
    }
    &-user {
      margin-left: auto;
      line-height: 26px;
    }
  }
}

._blue {
  background-color: rgba(0, 0, 0, 0.6);
  a {
    color: #fff !important;
  }
}
</style>
