<template>
  <div class="homepage mainContent">
    <!-- 主内容 -->
    <MainContent :post-data="postData" />
    <a-pagination :defaultCurrent="pageNum" :total="total" @change="changePage" />
  </div>
</template>

<script>
import MainContent from '../components/MainContent'
import { getPostList } from '@/api'
export default {
  components: {
    MainContent
  },
  async asyncData() {
    const { data } = await getPostList()
    return {
      postData: data.data,
      total: data.total
    }
  },
  data: () => ({
    postData: [],
    total: 0,
    pageNum: 1
  }),
  methods: {
    async changePage(page) {
      const { data } = await getPostList({
        pageNum: page
      })
      this.postData = data.data
      this.goTop()
    },
    goTop() {
      const dd = document.documentElement
      const db = document.body
      const top = dd || db
      top.scrollTop = 0
    }
  }
}
</script>

<style lang="less" scoped>
.homepage {
  &-content {
    display: flex;
  }
}
</style>
