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
  width: 300px;
}
</style>
