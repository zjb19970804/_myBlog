<template>
  <div class="mainContent detail myCard">
    <div class="detail-box">
      <h3>货拉拉方面</h3>
      <div class="detail-assist">
        <span class="detail-assist-time">2018-04-04</span>
        <span class="detail-assist-watch">215次阅读</span>
      </div>
      <p>北京商报讯（记者 王晓然 陈韵哲）2月21日，同城货运平台货拉拉宣布已完成由高瓴资本D1轮领投、红杉资本中国基金D2轮领投的融资。据了解，此轮融资额为3亿美元，由钟鼎资本、PV Capital跟投。货拉拉方面表示，此次融资将主要用于已有业务在中国内地及东南亚、印度市场的扩张，以及企业版、汽车销售等新投入业务的纵深发展。
据了解，货拉拉在2018年业务量实现高速增长，所开展的企业版业务和汽车销售业务取得突破，在海外市场方面，随着2019年1月在印度孟买的落地运营，Lalamove（货拉拉海外版）已经将业务扩展到我国港台与东南亚、印度等9个国家和地区的11座城市，并即将在印度新德里、班加罗尔落地。
高瓴资本创始人兼首席执行官张磊表示，货拉拉拥有卓越的创新力、执行力和本地化服务能力，在中国与东南亚地区双线发展均取得成功。此外，货拉拉以科技创新提升物流信息化效率，降低全行业的运营成本，在产业互联网时代，物流这个传统行业的改造需要先进的专业技术和商业模式。
货拉拉创始人、CEO Shing也表示，最近五年来，中国社会物流总成本占GDP的比重已经从18%持续降低到14.6%，货拉拉深信，随着互联网+物流的持续渗透，这一比重将继续降低，未来公司将持续专注于物流领域的效率提升，并在物流链条的各个环节寻找创新和变革的机会，为行业以及广大物流人创造更大价值。
公开资料显示，货拉拉于2013年创始于香港，以平台模式连接车货两端，提供“互联网+”同城物流服务。2014年，货拉拉进入内地，并始终坚持内地与海外市场的双线发展，截至目前，货拉拉平台已经拥有注册司机300万以上，并服务于2800万用户。</p>
    </div>
    <MyShare />
    <CommentList :commentData="commentData"/>
    <Comment />
  </div>
</template>

<script>
import MyShare from '@/components/MyShare'
import CommentList from '@/components/CommentList'
import Comment from '@/components/Comment'
import { getPostComments } from '@/api'
/* getCommentPraise */
export default {
  // validate({ params }) {
  //   // Must be a number
  //   return /^\d+$/.test(params.id)
  // },
  components: {
    MyShare,
    CommentList,
    Comment
  },
  async asyncData({ params }) {
    const { data } = await getPostComments({ id: params.id })
    return {
      commentData: data.data
    }
  }
}
</script>

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
    p {
      text-indent: 2em;
      letter-spacing: 1px;
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
