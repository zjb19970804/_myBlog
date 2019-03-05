<template>
  <a-list
    class="comment-list"
    :header="`${dataSource.length} 条回复`"
    itemLayout="horizontal"
    :dataSource="dataSource"
  >
    <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
      <a-comment
        :author="item.author"
        :avatar="item.avatar"
      >
        <template slot="actions">
          <span>
            <a-icon
              type="like"
              :theme="action === 'liked' ? 'filled' : 'outlined'"
              @click="like"
            />
          </span>
          <span>
            <a-icon
              type="dislike"
              :theme="action === 'disliked' ? 'filled' : 'outlined'"
              @click="dislike"
            />
          </span>
          <span>{{item.actions}}</span>
        </template>
        <p slot="content">{{item.content}}</p>
        <span slot="datetime">{{item.datetime}}</span>
      </a-comment>
    </a-list-item>
  </a-list>
</template>

<script>
export default {
  data: () => ({
    dataSource: [
      {
        actions: '回复',
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        datetime: '2018-04-03'
      },
      {
        actions: '回复',
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        datetime: '2018-04-03'
      }
    ]
  })
}
</script>
