<template>
  <a-list
    class="comment-list"
    :header="`${commentData.data.length} 条回复`"
    itemLayout="horizontal"
    :locale="{emptyText: '赶快抢沙发~！'}"
    :dataSource="commentData.data"
  >
    <a-list-item v-if="item" slot="renderItem" slot-scope="item" :key="item._id">
      <commentItem :item="item"/>
    </a-list-item>
  </a-list>
</template>

<script>
import commentItem from '@/components/commentItem'
import { giveThumbsUp } from '@/api'
export default {
  components: {
    commentItem
  },
  props: {
    // 评论的数据
    commentData: {
      type: Object,
      default: function() {
        return {
          data: [],
          total: 0
        }
      }
    }
  },
  methods: {
    // @vuese
    // 点赞
    async thumbsUp(id, actions) {
      const res = await giveThumbsUp({
        commentId: id,
        actions
      })
      if (res.code === 200) {
        this.$message.success('success')
        const index = this.commentData.data.findIndex((i) => i._id === id)
        actions ? this.commentData.data[index].like++ : this.commentData.data[index].dislike++
      } else {
        this.$message.error(res.msg)
      }
    },
    // @vuese
    // 点击评论的回复按钮
    replyFn(obj) {
      this.$eventBus.$emit('replyTo', obj)
    }
  }
}
</script>

<style lang="less" scoped>
.atUserName {
  color: #1890ff;
  cursor: pointer;
  margin: 0 2px;
}
</style>
