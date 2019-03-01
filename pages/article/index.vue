<template>
  <div class="Article mainContent">
    <MainContent />
    <a-pagination :defaultCurrent="6" :total="500" />
  </div>
</template>

<script>
import MainContent from '@/components/MainContent'
export default {
  components: {
    MainContent
  }
}
</script>

<style lang="less" scoped>
.ant-pagination {
  margin-top: 50px;
  text-align: center;
}
</style>
