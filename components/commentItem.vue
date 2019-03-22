<template>
  <a-comment
    :author="item.userInfo.userName"
    :avatar="item.userInfo.avatar"
  >
    <template slot="actions">
      <span>
        <a-icon
          type="like"
          :theme="item.isAction === 1 ? 'filled' : 'outlined'"
          @click="thumbsUp(item._id, item.isAction, true)"
        />
        {{ item.like }}
      </span>
      <span>
        <a-icon
          type="dislike"
          :theme="item.isAction === 0 ? 'filled' : 'outlined'"
          @click="thumbsUp(item._id, item.isAction, false)"
        />
        {{ item.dislike }}
      </span>
      <span @click="replyFn({id: item._id, firstId: firstId, name: item.userInfo.userName})">回复</span>
    </template>
    <p slot="content" v-if="item.firstId">回复<span class="atUserName">{{ item.beReplied.userName }}</span>：{{ item.msg }}</p>
    <p slot="content" v-else>{{ item.msg }}</p>
    <span slot="datetime">{{ item._id | formatDate }}</span>
    <!-- 二级回复 -->
    <commentItem v-for="replyItem in item.reply" :key="replyItem._id" :item="replyItem" :firstId="item._id" />
  </a-comment>
</template>

<script>
import { giveThumbsUp } from '@/api'
import { mapState } from 'vuex'
export default {
  name: 'commentItem',
  props: {
    item: {
      type: Object
    },
    firstId: String
  },
  computed: mapState(['token']),
  methods: {
    // @vuese
    // 点赞
    async thumbsUp(id, oldAction, actions) {
      if (!this.token) return this.$message.warn('请先登录')
      const res = await giveThumbsUp({
        commentId: id,
        actions
      })
      if (res.code === 200) {
        // 如果和之前的操作相同，则认为是取消
        // 这里应该调用父组件的方法修改数据源，有时间再改。。。
        if (oldAction === -1) {
          // 没有操作过
          actions ? this.item.like++ : this.item.dislike++
          this.item.isAction = ~~actions
        } else if (!!oldAction === actions) {
          // 取消操作
          actions ? this.item.like-- : this.item.dislike--
          this.item.isAction = -1
        } else if (actions) {
          // 点赞
          this.item.like++
          this.item.dislike--
          this.item.isAction = ~~actions
        } else {
          // 踩
          this.item.like--
          this.item.dislike++
          this.item.isAction = ~~actions
        }
        this.$message.success('success')
      } else {
        this.$message.error(res.message)
      }
    },
    // @vuese
    // 点击评论的回复按钮
    replyFn(obj) {
      if (!this.token) return this.$message.warn('请先登录')
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
