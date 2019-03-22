<template>
  <div class="mainContent detail myCard">
    <div class="detail-box">
      <h3>{{ postData.title }}</h3>
      <div class="detail-assist">
        <span class="detail-assist-time">{{ postData._id | formatDate }}</span>
        <span class="detail-assist-watch">{{ postData.watchTimes }}次阅读</span>
      </div>
      <div class="htmlBox" v-html="postData.content"></div>
    </div>
    <strong v-if="postData.reprint">本文系转载，原文请戳：<a :href="postData.reprint" target="_blank" style="word-break: break-word;" rel="nofollow">{{postData.reprint}}</a></strong>
    <!-- <MyShare /> -->
    <CommentList :commentData="commentData"/>
    <Comment />
  </div>
</template>

<script>
// import MyShare from '@/components/MyShare'
import CommentList from '@/components/CommentList'
import Comment from '@/components/Comment'
import { getPostComments, getPostDetail } from '@/api'
/* getCommentPraise */
export default {
  // validate({ params }) {
  //   // Must be a number
  //   return /^\d+$/.test(params.id)
  // },
  components: {
    // MyShare,
    CommentList,
    Comment
  },
  async asyncData({ params }) {
    const [postData, commentData] = await Promise.all([getPostDetail({ id: params.id }), getPostComments({ id: params.id })])
    // const { data } = await getPostComments({ id: params.id })
    return {
      postData: postData.data,
      commentData: commentData.data
    }
  }
}
</script>

<style lang="less">
.detail-box {
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 10px 0;
    font-weight: bold;
  }
  img {
    margin: 10px 0;
  }
}
</style>


<style lang="less" scoped>
.detail {
  &-box {
    padding: 10px;
    h3 {
      color: #000;
      font-size: 20px;
      margin-bottom: 10px;
      text-align: center;
    }
    .htmlBox {
      letter-spacing: 1px;
      word-break: break-all;
    }
  }
  h3 {
    color: #666;
    font-weight: 700;
  }
  &-assist {
    color: #999;
    font-size: 12px;
    text-align: center;
    margin-bottom: 10px;
    span {
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
}
</style>
