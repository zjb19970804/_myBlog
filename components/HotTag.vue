<template>
  <div class="hotTag myCard">
    <h3 class="myTitle">标签分类</h3>
    <a-skeleton active :loading="loading">
      <ul v-if="!loading" class="hotTag-list">
        <li v-for="item in labelData" :key="item._id">
          <nuxt-link :to="`/label/${item._id}`">
            <a-button>{{ item.text }}</a-button>
          </nuxt-link>
        </li>
      </ul>
    </a-skeleton>
  </div>
</template>

<script>
import { getHotLabel } from '@/api'
export default {
  data: () => ({
    labelData: []
  }),
  async mounted() {
    const { data } = await getHotLabel()
    this.labelData = data
  },
  computed: {
    loading() {
      return this.labelData.length <= 0
    }
  }
}
</script>

<style lang="less" scoped>
.hotTag {
  &-list {
    padding: 20px 0 20px 10px;
    li {
      float: left;
      margin: 0 10px 10px 0;
    }
  }
}
</style>
