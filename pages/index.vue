<template>
  <div class="homepage mainContent">
    <!-- 主内容 -->
    <MainContent :post-data="postData" />
    <a-pagination :defaultCurrent="pageNum" :total="total" :defaultPageSize="5" @change="changePage" />
    <!-- 标题：<a-input v-model="titleValue"></a-input>
    标签：<a-input v-model="labelValue"></a-input>
    原文：<a-input v-model="reprintValue"></a-input>
    内容：<a-textarea v-model="contentValue"></a-textarea>
    <a-upload
      name="poster"
      listType="picture-card"
      class="avatar-uploader"
      :data="params"
      :showUploadList="false"
      action="http://127.0.0.1:7001/blog/publishArticle"
      :supportServerRender="true"
      :withCredentials="true"
      :beforeUpload="beforeUpload"
      @change="handleChange"
    >
      <img v-if="imgUrl" :src="imageUrl + imgUrl" alt="avatar" />
      <div v-else>
          <a-icon :type="loading ? 'loading' : 'plus'" />
          <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
    <a-input v-model="label"></a-input>
    <a-button @click="addLabel">添加标签</a-button> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MainContent from '../components/MainContent'
import { getPostList } from '@/api' /* addArticlesLabel */
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
    pageNum: 1
    // imgUrl: '',
    // loading: false,
    // label: '',
    // titleValue: '',
    // reprintValue: '',
    // labelValue: '',
    // contentValue: '',
    // params: {}
  }),
  computed: mapState(['imageUrl']),
  methods: {
    // 页数改变
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
    // 上传前
    // beforeUpload() {
    //   this.params = {
    //     title: this.titleValue,
    //     content: this.contentValue,
    //     label: this.labelValue,
    //     reprint: this.reprintValue
    //   }
    //   return true
    // },
    // // 表单上传
    // handleChange(res) {
    //   const result = res.file.response
    //   if (!result) return
    //   if (result.code === 200) {
    //     this.imgUrl = result.data.poster
    //   } else {
    //     this.$message.error(result.message)
    //   }
    // },
    // // 添加标签
    // addLabel() {
    //   addArticlesLabel({
    //     text: this.label
    //   })
    // }
  }
}
</script>

<style lang="less" scoped>
.homepage {
  &-content {
    display: flex;
  }
  // .avatar-uploader {
  //   img {
  //     width: 100%;
  //   }
  // }
}
</style>
