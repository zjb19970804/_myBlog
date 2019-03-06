<template>
  <a-list
    class="comment-list"
    :header="`${commentData.CommentList.length} 条回复`"
    itemLayout="horizontal"
    :dataSource="commentData.CommentList"
  >
    <a-list-item slot="renderItem" slot-scope="item" :key="item.commentId">
      <a-comment
        :author="item.userName"
        :avatar="item.avatar"
      >
        <template slot="actions">
          <span>
            <a-icon
              type="like"
              :theme="action === 'liked' ? 'filled' : 'outlined'"
              @click="thumbsUp(item.commentId, true)"
            />
          </span>
          <span>
            <a-icon
              type="dislike"
              :theme="action === 'disliked' ? 'filled' : 'outlined'"
              @click="thumbsUp(item.commentId, false)"
            />
          </span>
          <span>回复</span>
        </template>
        <p slot="content">{{item.msg}}</p>
        <span slot="datetime">2018-04-03</span>
      </a-comment>
    </a-list-item>
  </a-list>
</template>

<script>
import { giveThumbsUp } from '@/api'
const { log } = console
export default {
  props: {
    // 评论的数据
    commentData: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data: () => ({}),
  methods: {
    // @vuese
    // 点赞
    async thumbsUp(id, actions) {
      const { data } = await giveThumbsUp({
        commentId: id,
        actions
      })
      log(data)
    }
  }
}
</script>
