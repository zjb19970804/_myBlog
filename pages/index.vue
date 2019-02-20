<template>
  <div class="homepage myContainer">
    <a-carousel autoplay>
      <img src="http://placehold.it/1200x320" v-for="item in 4" :key="item" />
    </a-carousel>
    <div class="homepage-content">
      <!-- 主内容 -->
      <MainContent />
      <!-- 右侧视图 -->
      <SlideView />
    </div>
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
  .ant-carousel {
    width: 100%;
    height: 320px;
    margin-bottom: 20px;
    .slick-slider {
      text-align: center;
    }
  }
  &-content {
    display: flex;
  }
}
</style>
