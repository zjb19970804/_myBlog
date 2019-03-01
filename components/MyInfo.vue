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
    <div class="myInfo-middle">
      <div>
        <span>帖子</span>
        <b>35</b>
      </div>
      <div>
        <span>分类</span>
        <b>35</b>
      </div>
      <div>
        <span>标签</span>
        <b>35</b>
      </div>
    </div>
    <a-button type="primary" block @click="getStar">给个小星星</a-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    info: null
  }),
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
