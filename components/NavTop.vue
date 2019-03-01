<template>
  <transition name="slideNav">
    <div class="nav-top" v-show="isShow">
      <div class="myContainer flexAlignCenter mynav-box">
        <nuxt-link to="/" class="mynav-box-title">影子比阳光美的博客</nuxt-link>
        <ul class="mynav-box-link">
          <li>
            <nuxt-link to="/">首页</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/article">学习</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">其它</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">关于</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">留言</nuxt-link>
          </li>
        </ul>
        <div class="mynav-box-user">
          <!-- 登录状态 -->
          <div v-if="token" class="logined">
            登录了
          </div>
          <!-- 未登录状态 -->
          <div v-else class="unlogin">
            <nuxt-link rel="nofollow" to="/login">登录</nuxt-link>
            <nuxt-link rel="nofollow" to="/reg">注册</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
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
  computed: mapState(['token']),
  methods: {
    // @vuese
    // 判断滚动条的高度，并与上一次的相比较
    listenScroll() {
      const newScrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.isShow = newScrollTop < 60 ? true : newScrollTop < this.scrollTop
      this.scrollTop = newScrollTop
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
  transition: all 0.3s;
  .mynav-box {
    height: inherit;
    &-title {
      letter-spacing: 2px;
      color: #0088f5;
      font-size: 24px;
      margin-right: 100px;
    }
    &-link {
      height: inherit;
      line-height: 60px;
      font-size: 16px;
      li {
        float: left;
        width: 100px;
        a {
          display: inline-block;
          width: 100%;
          text-align: center;
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
    &-user {
      margin-left: auto;
    }
  }
}
</style>
