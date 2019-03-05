<template>
  <div class="MainContent">
    <div class="main-item" v-for="item in postData" :key="item._id">
      <nuxt-link :to="`/article/${item._id}`" class="main-item-img">
        <img src="http://placehold.it/800x200" alt="">
      </nuxt-link>
      <div class="main-item-right">
        <nuxt-link class="main-item-title" :to="`/article/${item._id}`">{{ item.title }}</nuxt-link>
        <p class="main-item-content">{{ item.content }}</p>
        <div class="main-item-btm">
          <div class="iconAndText">
            <i class="iconfont icon-time"></i>
            <span>{{ item.updateTime }}</span>
          </div>
          <div class="iconAndText">
            <i class="iconfont icon-browse"></i>
            <span>{{ item.watchTimes }}次浏览</span>
          </div>
          <a-button class="readMore" size="small">
            <nuxt-link :to="`/article/${item._id}`">阅读更多</nuxt-link>
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postData: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.MainContent {
  flex: 1;
  .main-item {
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 0.3s;
    overflow: hidden;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    &:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
      border-color: rgba(0, 0, 0, 0.09);
    }
    &-img {
      width: 100%;
      img {
        width: 100%;
        height: 200px;
      }
    }
    &-right {
      padding: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &-title {
      color: #555;
      font-size: 18px;
      margin-bottom: 10px;
    }
    &-content {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /*! autoprefixer: on */
      height: 64px;
      color: #999;
      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
    }
    &-btm {
      display: flex;
      align-items: center;
      .readMore {
        margin-left: auto;
      }
      .iconAndText {
        color: #999;
        font-size: 12px;
        line-height: 24px;
        &:not(:last-of-type) {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
