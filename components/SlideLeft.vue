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
  @media screen and (max-width: 750px) {
    display: none;
  }
  width: 310px;
  padding: 0 10px;
  position: fixed;
}
</style>
