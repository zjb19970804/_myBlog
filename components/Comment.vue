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
const { log } = console
const clientId = 'b17fdfd4cd7c3ccf21de'
export default {
  data: () => ({
    value: '',
    submitting: false
  }),
  computed: mapState(['token']),
  methods: {
    // @vuese
    // 文本框的回调
    handleChange(e) {
      this.value = e.target.value
    },
    // @vuese
    // 提交评论的回调
    handleSubmit() {
      log(this.value)
    },
    // 点击登录的回调
    githubLogin() {
      window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=http://127.0.0.1:3000/login&scope=user:email`
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
