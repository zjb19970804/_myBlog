<template>
  <div>
    <!-- 顶部导航栏 -->
    <NavTop />
    <!-- 面包屑导航 -->
    <a-breadcrumb class="myContainer" :routes="$router.options.routes" v-if="$route.path!=='/'">
      <template slot="itemRender" slot-scope="{route, params, routes, paths}">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ navName(route.name) }}
        </span>
        <router-link v-else :to="paths.join('/')">
          {{ navName(route.name) }}
        </router-link>
      </template>
    </a-breadcrumb>

    <nuxt />

    <!-- 底部通用组件 -->
    <CommonFooter />
    <!-- 页面滑至顶部组件 -->
    <a-back-top />
  </div>
</template>

<script>
import NavTop from '../components/NavTop'
import CommonFooter from '../components/CommonFooter'
const { log } = console
export default {
  components: {
    NavTop,
    CommonFooter
  },
  mounted() {
    log(this.$router)
  },
  methods: {
    navName(pathName) {
      const nameObj = {
        index: '首页',
        article: '文章'
      }
      return nameObj[pathName]
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  /* background: url('../static/globl/1.jpg') center center no-repeat;
  background-attachment: fixed; */
  padding-top: 80px;
  background-color: #f0f0f0;
}
.ant-breadcrumb {
  margin-bottom: 20px;
}
/* #__nuxt {
  padding-top: 80px;
  background-color: rgba(0, 0, 0, 0.8);
} */

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
