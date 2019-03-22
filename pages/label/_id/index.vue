<template>
  <div class="mainContent">
    <MainContent :postData="posts" />
    <a-pagination :defaultCurrent="pageNum" :total="total" :defaultPageSize="5" @change="changePage" />
  </div>
</template>
<script>
import MainContent from '@/components/MainContent'
import { getPostList } from '@/api'
export default {
  components: {
    MainContent
  },
  async asyncData({ params }) {
    const {
      data: { data, total }
    } = await getPostList({
      pageNum: 1,
      id: params.id
    })
    return {
      posts: data,
      total
    }
  },
  data: () => ({
    pageNum: 1,
    posts: []
  }),
  methods: {
    async changePage(page) {
      const { data } = await getPostList({
        pageNum: page
      })
      const { log } = console
      log(this.pageNum)
      this.posts = data.data
    }
  }
}
</script>
