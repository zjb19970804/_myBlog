<template>
  <div class="homepage">
    <!-- 主内容 -->
    <MainContent />
    <!-- 右侧视图 -->
    <SlideView />
  </div>
</template>

<script>
import SlideView from '../components/SlideView'
import MainContent from '../components/MainContent'
export default {
  components: {
    SlideView,
    MainContent
  }
}
</script>

<style lang="less" scoped>
.homepage {
  height: 1000px;
}
</style>
