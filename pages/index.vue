<template>
  <div class="homepage mainContent">
    <!-- 主内容 -->
    <MainContent />
  </div>
</template>

<script>
import MainContent from '../components/MainContent'
export default {
  components: {
    MainContent
  }
}
</script>

<style lang="less" scoped>
.homepage {
  &-content {
    display: flex;
  }
}
</style>
