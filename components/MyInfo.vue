<template>
  <div class="myInfo myCard">
    <div class="myInfo-top">
      <img src="/globl/avatar.jpg" alt="">
      <p class="myInfo-top-name">影子比阳光美</p>
      <p class="myInfo-top-job">Web前端开发</p>
      <p class="myInfo-top-location">
        <i class="iconfont icon-coordinates_fill"></i>
        <span>湖北，武汉</span>
      </p>
    </div>
    <div class="myInfo-middle" v-if="Object.keys(info).length>0">
      <div>
        <span>原创</span>
        <b>{{ info.originalNum }}</b>
      </div>
      <div>
        <span>转载</span>
        <b>{{ info.reprintNum }}</b>
      </div>
      <div>
        <span>标签</span>
        <b>{{ info.labelNum }}</b>
      </div>
    </div>
    <a-button type="primary" block @click="getStar">给个小星星</a-button>
  </div>
</template>

<script>
import { getBloginfo } from '@/api'
export default {
  data: () => ({
    info: {}
  }),
  async mounted() {
    const { data } = await getBloginfo()
    this.info = data
  },
  methods: {
    getStar() {
      window.open('https://github.com/zjb19970804/_myBlog')
    }
  }
}
</script>

<style lang="less" scoped>
.myInfo {
  padding: 20px;
  background-color: #fff;
  &-top {
    text-align: center;
    margin-bottom: 20px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    &-name {
      font-size: 18px;
    }
    &-job,
    &-location {
      color: #666;
    }
  }
  &-middle {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 10px;
    div {
      flex: 0 0 33.33%;
      width: 33.33%;
      text-align: center;
      span {
        display: block;
        margin-bottom: 5px;
      }
      b {
        font-weight: normal;
        font-size: 24px;
      }
    }
  }
}
</style>
