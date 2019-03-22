<template>
  <div class="CommonFooter flexAlignCenter">
    <div class="myContainer">
      本页面由Nuxt+egg+mongodb打造, 学习请前往
      <a href="https://zh.nuxtjs.org" target="_blank" rel="nofollow">Nuxt</a>、
      <a href="https://eggjs.org/zh-cn/" target="_blank" rel="nofollow">egg</a>、
      <a href="https://docs.mongodb.com/manual/" target="_blank" rel="nofollow">mongodb</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.CommonFooter {
  @media screen and(max-width: 750px) {
    margin-top: 32px;
  }
  margin-top: 50px;
  height: 76px;
  color: #eee;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
