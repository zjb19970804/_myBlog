import Vue from 'vue'
import moment from 'moment'
// 格式化时间
export function formatDate(str, type = 'YYYY-MM-DD hh:mm:ss') {
  const _str = str.toString().substring(0, 8)
  const _date = new Date(Number(parseInt(_str, 16).toString() + '000'))
  moment.locale('zh-cn')
  const isOverDay = moment(_date) < moment().subtract(1, 'd')
  return isOverDay ? moment(_date).format(type) : moment(_date).fromNow()
}

export function replaceHtml(str) {
  const reg = /<\/?[^>]*>/g
  return str.replace(reg, '')
}

const filters = {
  formatDate,
  replaceHtml
}
Object.keys(filters).forEach((i) => Vue.filter(i, filters[i]))
