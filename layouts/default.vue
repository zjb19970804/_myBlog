<template>
  <div>
    <!-- 顶部导航栏 -->
    <NavTop />

    <div class="myContainer">
      <div class="flex myColumns">
        <SlideLeft />
        <nuxt />
        <SlideRight />
      </div>
    </div>

    <!-- 底部通用组件 -->
    <CommonFooter />
    <!-- 页面滑至顶部组件 -->
    <a-back-top />
  </div>
</template>

<script>
import NavTop from '../components/NavTop'
import CommonFooter from '../components/CommonFooter'
import SlideLeft from '../components/SlideLeft'
import SlideRight from '../components/SlideRight'
export default {
  components: {
    NavTop,
    CommonFooter,
    SlideLeft,
    SlideRight
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

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
