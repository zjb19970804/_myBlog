<template>
  <div class="about mainContent myCard">
    <!-- 个人信息 -->
    <!-- <div class="about-profile">
      <img
        src="/globl/avatar.jpg"
        alt="博主头像"
        title="博主头像"
      >
      <div class="about-profile-right">
        <h3>影子比阳光美</h3>
        <p>
          一枚95后菜鸟前端开发~！<br />
          欢迎大佬带我啊啊啊啊啊啊啊啊啊...
        </p>
      </div>
    </div> -->
    <!-- 个人介绍 -->
    <div class="about-box">
      <div class="about-personl">
        <div class="about-title">
          简短介绍
        </div>
        <p>来自湖北武汉，18年正式参加工作，一直努力学习前端技术，一边工作一边积累经验。平时喜欢打打游戏(死肥宅天下第一！)，听听歌，看电影，每天都会抽出一两小时查看学习新技术，新黑科技。例如本网站的后台node开发、nginx部署，之前并没有接触过服务器端，都是闲暇时间查阅资料。所谓多一门技术多一点生存技能，哈哈哈哈嗝。</p>
        <p>实在不知道说什么，祝大哥大嫂们过年好。</p>
      </div>
      <!-- 菜鸡推荐 -->
      <div class="about-recommend">
        <p class="about-recommend-title">
          如果你是前端菜鸡，那么以下的链接对你的前端学习会有一定帮助，当然，这种事情还是要看自己，多动手多练，光看是不够滴。
        </p>
        <ul class="about-recommend-list">
          <li v-for="(item, index) in recommendData" :key="index">
            <p>{{ item.title }}</p>
            <a-tooltip placement="right">
              <template slot="title">
                <span>我要过去！快点啊！</span>
              </template>
              <a :href="item.url" rel="nofollow" target="_blank">>>传送门</a>
            </a-tooltip>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    recommendData: [
      {
        title: 'w3c：领先的 Web 技术教程 - 全部免费。在 w3school，你可以找到你所需要的所有的网站建设教程。',
        url: 'http://www.w3school.com.cn/'
      },
      {
        title: '掘金：一个帮助开发者成长的社区。',
        url: 'https://juejin.im/'
      },
      {
        title: '思否：为开发者提供问答、学习与交流编程知识的平台,创造属于开发者的时代!',
        url: 'https://segmentfault.com/'
      },
      {
        title: '阮一峰的博客：国内前端人人皆知的阮教授，讲解的前端知识通俗易解。',
        url: 'http://www.ruanyifeng.com/blog/javascript/'
      },
      {
        title: 'csdn：早年的程序员必备的网站哦，内有许多博客大佬，多看看他们的博客你也会受益匪浅滴。',
        url: 'https://www.csdn.net/'
      },
      {
        title: 'stackoverflow: 国外的开发问答网站，需搭梯子，相信这个操作是现在的前端必备的了吧。',
        url: 'https://stackoverflow.com/'
      },
      {
        title: 'github: 主角隆重登场~！全球最大同性交友网站(邪恶.jpg)!!!',
        url: 'https://github.com/'
      }
    ]
  })
}
</script>

<style lang="less" scoped>
.about {
  background-color: #fff;
  &-box {
    padding: 10px;
  }
  &-title {
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    line-height: 48px;
  }
  &-profile {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    img {
      flex: 0 0 100px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 20px;
    }
    &-right {
      flex: 1;
      h3 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      p {
        color: #666;
      }
    }
  }
  &-personl {
    margin-bottom: 50px;
    p {
      text-indent: 2em;
    }
  }
  &-recommend {
    &-title {
      line-height: 48px;
      font-weight: bold;
      font-size: 16px;
    }
    &-list {
      list-style: inside;
      li {
        line-height: 36px;
        p {
          display: inline-block;
        }
      }
    }
  }
}
</style>
