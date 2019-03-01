<template>
  <div class="lastest myCard">
    <h3 class="myTitle">最近更新</h3>
    <div class="lastest-list">
      <div class="lastest-list-item" v-for="item in 6" :key="item">
        <img src="http://placehold.it/50x50" alt="">
        <div class="lastest-item-right">
          <p>2018-08-04</p>
          <nuxt-link to="/">啊士大夫飒飒啊</nuxt-link>
        </div>
      </div>
      <div class="lastest-list-item">
        <img src="http://placehold.it/50x50" alt="">
        <div class="lastest-item-right">
          <p>2018-08-04</p>
          <nuxt-link to="/">啊士大夫飒飒啊啊士大夫飒飒啊啊士大夫飒飒啊啊士啊啊大</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    data: null
  })
}
</script>

<style lang="less" scoped>
.lastest {
  &-list {
    &-item {
      padding: 10px 20px;
      display: flex;
      align-items: center;
      img {
        width: 64px;
        height: 64px;
        margin-right: 10px;
      }
      .lastest-item-right {
        flex: 1;
        p {
          font-size: 12px;
          color: #666;
        }
        a {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /*! autoprefixer: on */
          overflow: hidden;
        }
      }
    }
  }
}
</style>
