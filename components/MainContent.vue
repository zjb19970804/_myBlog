<template>
  <div class="MainContent">
    <div class="main-item" v-for="item in 20" :key="item">
      <nuxt-link to="/" class="main-item-img">
        <img src="http://placehold.it/200x80" alt="">
      </nuxt-link>
      <div class="main-item-right">
        <nuxt-link class="main-item-title" to="/">安费诺开始的你看过的干嘛是你单独发多少</nuxt-link>
        <p class="main-item-content">安费诺开始的你看过的干嘛是你单独发多少安费诺开始的你看过的干嘛是你单独发多少安费诺开始的你看过的干嘛是你单独发多少安费诺开始的你看过的干嘛是你单独发多少安费诺开始的你看过的干嘛是你单独发多少安费诺开始的你看过的干嘛是你单独发多少安费诺开始的你看过的干嘛是你单独发多少安费诺开始的你看过的干嘛是你单独发多少安费诺开始的你看过的干嘛是你单独发多少安费诺开始的你看过的干嘛是你单独发多少</p>
        <div class="main-item-btm">
          <nuxt-link to="/" class="iconAndText">
            <img src="http://placehold.it/20x20" alt="">
            <i class="iconfont icon-people"></i>
            <span>zjb</span>
          </nuxt-link>
          <div class="iconAndText">
            <i class="iconfont icon-time"></i>
            <span>2018-07-07</span>
          </div>
          <div class="iconAndText">
            <i class="iconfont icon-browse"></i>
            <span>50次浏览</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.MainContent {
  flex: 1;
  .main-item {
    display: flex;
    padding: 12px 10px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 0.3s;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    &:hover {
      box-shadow: 2px 2px 5px #999;
    }
    &-img {
      flex: 0 0 200px;
      margin-right: 20px;
      img {
        width: 200px;
        height: 116px;
        border-radius: 5px;
      }
    }
    &-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &-title {
      color: #555;
      font-size: 18px;
    }
    &-content {
      height: 64px;
      color: #999;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-btm {
      display: flex;
      align-items: center;
      .iconAndText {
        color: #999;
        font-size: 12px;
        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
