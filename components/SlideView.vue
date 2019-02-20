<template>
  <div class="slideView">
    <HotTag />
    <Recommend />
  </div>
</template>

<script>
import HotTag from '../components/HotTag'
import Recommend from '../components/Recommend'
export default {
  components: {
    HotTag,
    Recommend
  }
}
</script>

<style lang="less" scoped>
.slideView {
  flex: 0 0 300px;
  width: 300px;
  margin-left: 20px;
}
</style>
