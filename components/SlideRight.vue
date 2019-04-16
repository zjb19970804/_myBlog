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
  }
}
</script>

<style lang="less" scoped>
.slideRight {
  @media screen and (max-width: 750px) {
    display: none;
  }
  width: 310px;
  padding: 0 10px;
}
</style>
