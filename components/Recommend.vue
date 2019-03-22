<template>
  <div class="Recommend myCard">
    <h3 class="myTitle">推荐阅读</h3>
    <a-skeleton active :paragraph="{rows: 16}" :loading="loading">
      <ul
        class="Recommend-list"
        id="_ul"
      >
        <li
          class="Recommend-item"
          v-for="item in recommendData"
          :key="item._id"
        >
          <nuxt-link :to="`/article/${item._id}`">
            <img
              :src="imageUrl + item.poster"
              alt=""
            >
            <div class="list-right">
              <p class="Recommend-item-title">{{ item.title }}</p>
              <div class="Recommend-item-btm">
                <div>
                  <i class="iconfont icon-time"></i>
                  <span>{{ item._id | formatDate('YYYY-MM-DD') }}</span>
                </div>
                <div>
                  <i class="iconfont icon-browse"></i>
                  <span>{{ item.watchTimes }}次阅读</span>
                </div>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </a-skeleton>
  </div>
</template>

<script>
import { getRecommendPost } from '@/api'
import { mapState } from 'vuex'
export default {
  data: () => ({
    recommendData: []
  }),
  async mounted() {
    const { data } = await getRecommendPost()
    this.recommendData = data
  },
  computed: {
    ...mapState(['imageUrl']),
    loading() {
      return this.recommendData.length <= 0
    }
  }
}
</script>

<style lang="less" scoped>
.Recommend {
  &-list {
    padding: 0;
    transition: all 1s;
  }
  &-item {
    &:not(:last-child) {
      border-bottom: 1px solid #ccc;
    }
    &:hover {
      .Recommend-item-title {
        color: #e4467c;
      }
      img {
        transform: scale(1.2);
      }
    }
    a {
      padding: 10px 15px;
      display: flex;
      align-items: center;
      img {
        transition: all 0.3s;
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
