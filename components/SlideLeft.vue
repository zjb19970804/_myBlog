<template>
  <div class="slideLeft">
    <MyInfo />
    <Lastest />
  </div>
</template>

<script>
import MyInfo from './MyInfo'
import Lastest from './Lastest.vue'
export default {
  components: {
    MyInfo,
    Lastest
  }
}
</script>

<style lang="less" scoped>
.slideLeft {
  flex: 0.5;
  padding: 0 10px;
}
</style>
