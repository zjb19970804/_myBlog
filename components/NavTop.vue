<template>
  <div class="nav-top">
    <div class="myContainer flexAlignCenter mynav-box">
      <nuxt-link to="/" class="mynav-box-title">影子比阳光美的博客</nuxt-link>
      <ul class="mynav-box-link">
        <li>
          <nuxt-link to="/">首页</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">学习</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">其它</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">关于</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">留言</nuxt-link>
        </li>
      </ul>
      <div class="mynav-box-user">
        <!-- 登录状态 -->
        <div class="logined">
          <nuxt-link rel="nofollow" to="/login">登录</nuxt-link>
          <nuxt-link rel="nofollow" to="/login">注册</nuxt-link>
        </div>
        <!-- 未登录状态 -->
        <!-- <div class="unlogin"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.nav-top {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.3);
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
        width: 100px;
        a {
          display: inline-block;
          width: 100%;
          text-align: center;
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.4);
        }
      }
    }
    &-user {
      margin-left: auto;
    }
  }
}
</style>
