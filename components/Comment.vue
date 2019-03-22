<template>
  <div class="comment">
    <a-comment>
      <a-avatar
        slot="avatar"
        :src="token&&token.avatar || 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'"
        :alt="token&&token.name"
      />
      <div slot="content">
        <a-form-item>
          <a-textarea v-if="token" :rows="4" @change="handleChange" :value="value" ></a-textarea>
          <p v-else class="nologinTip">暂无评论权限，<a-button size="small" @click="githubLogin">登录</a-button>即可发表评论</p>
          <a-alert v-show="Texterror" :message="errorMsg || '未知错误'" type="error" showIcon />
        </a-form-item>
        <a-form-item>
          <a-button
            htmlType="submit"
            :loading="submitting"
            @click="handleSubmit"
            type="primary"
          >
            添加评论
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { commentsArticles } from '@/api'
import Cookie from 'js-cookie'
export default {
  data: () => ({
    // 回复哪个评论Id
    replyToId: '',
    // 回复评论的一级评论Id
    firstId: '',
    value: '',
    submitting: false,
    Texterror: false,
    errorMsg: ''
  }),
  computed: mapState(['token', 'clientId']),
  mounted() {
    this.$eventBus.$on('replyTo', ({ id, firstId, name }) => {
      this.value = `@${name}: `
      this.replyToId = id
      this.firstId = firstId
    })
  },
  beforeDestroy() {
    this.value = ''
    this.replyToId = ''
    this.firstId = ''
    this.$eventBus.$off('replyTo')
  },
  methods: {
    // @vuese
    // 文本框的回调
    handleChange(e) {
      this.value = e.target.value
    },
    // @vuese
    // 提交评论的回调
    async handleSubmit() {
      if (!this.token) return this.$message.warn('请先登录')
      this.submitting = true
      // 检查是否是回复别人
      const isAtUser = this.value.match(/@(\S*):\s/)
      if (isAtUser === null) {
        this.replyToId = ''
        this.firstId = ''
      }
      const res = await commentsArticles({
        firstId: this.firstId,
        replyToId: this.replyToId,
        postId: this.$route.params.id,
        msg: isAtUser === null ? this.value : this.value.split(isAtUser[0])[1]
      })
      if (res.code === 200) {
        this.value = ''
        this.replyToId = ''
        this.firstId = ''
        window.location.reload()
      } else {
        this.Texterror = true
        this.errorMsg = res.message
      }
      this.submitting = false
    },
    // 点击登录的回调
    githubLogin() {
      const url = `https://github.com/login/oauth/authorize?client_id=${this.clientId}&redirect_uri=${window.location.origin}/login&scope=user:email`
      Cookie.set('lastUrl', this.$route.fullPath)
      window.location.href = url
    }
  }
}
</script>

<style lang="less">
.ant-form-item {
  &:last-of-type {
    text-align: right;
  }
}
</style>

<style lang="less" scoped>
.nologinTip {
  line-height: 94px;
  text-align: center;
  border: 1px solid #d9d9d9;
  button {
    margin: 0 5px;
  }
}
</style>
