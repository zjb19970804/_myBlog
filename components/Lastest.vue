<template>
  <div class="lastest myCard">
    <h3 class="myTitle">热门文章</h3>
    <a-skeleton active :paragraph="{rows: 12}" :loading="loading">
      <div class="lastest-list">
        <div class="lastest-list-item" v-for="item in hotPosts" :key="item._id">
          <img :src="imageUrl + item.poster" alt="">
          <div class="lastest-item-right">
            <p>{{ item._id | formatDate('YYYY-MM-DD') }}</p>
            <nuxt-link to="/">{{ item.title }}</nuxt-link>
          </div>
        </div>
      </div>
    </a-skeleton>
  </div>
</template>

<script>
import { hotPostList } from '@/api'
import { mapState } from 'vuex'
export default {
  data: () => ({
    hotPosts: []
  }),
  async mounted() {
    const { data } = await hotPostList()
    this.hotPosts = data
  },
  computed: {
    ...mapState(['imageUrl']),
    loading() {
      return this.hotPosts.length <= 0
    }
  }
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
