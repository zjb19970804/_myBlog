<template>
  <div class="Recommend myModuleBox">
    <h3 class="myTitle">推荐阅读</h3>
    <ul class="Recommend-list">
      <li class="Recommend-item" v-for="item in 10" :key="item">
        <nuxt-link to="/">
          <img src="http://placehold.it/80x56" alt="">
          <div class="list-right">
            <p class="Recommend-item-title">用SVG画出拼图块，并实现拼图功能，请收下我的膝盖</p>
            <div class="Recommend-item-btm">
              <span>2018-06-04</span>
              <span>20次阅读</span>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.Recommend {
  &-list {
    padding: 0;
  }
  &-item {
    &:not(:last-child) {
      border-bottom: 1px solid #ccc;
    }
    &:hover {
      .Recommend-item-title {
        color: #e4467c;
      }
    }
    a {
      padding: 10px 15px;
      display: flex;
      align-items: center;
      img {
        flex: 0 0 80px;
        width: 80px;
        height: 56px;
        margin-right: 10px;
      }
      .list-right {
        flex: 1;
      }
    }
    &-title {
      color: #555;
    }
    &-btm {
      color: #999;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
    }
  }
}
</style>
