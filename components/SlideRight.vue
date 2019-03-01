<template>
  <div class="slideRight">
    <HotTag />
    <Recommend />
  </div>
</template>

<script>
import Recommend from './Recommend.vue'
import HotTag from './HotTag.vue'
export default {
  components: {
    HotTag,
    Recommend
  },
  data: () => ({
    data: null
  })
}
</script>

<style lang="less" scoped>
.slideRight {
  flex: 0.5;
  padding: 0 10px;
}
</style>
