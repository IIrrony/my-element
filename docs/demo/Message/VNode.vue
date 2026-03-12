<script setup>
import { h } from 'vue'
import { createMessage } from '@/components/Message/method'
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'

const showVNodeMessage = () => {
  createMessage({
    message: h('div', null, [
      h('span', { style: 'color: teal' }, '这是一条'),
      h(Icon, { icon: 'star', style: 'margin: 0 5px; color: gold' }),
      h('span', { style: 'color: teal' }, '自定义内容的消息')
    ]),
    type: 'success'
  })
}
</script>
<template>
  <div class="message-demo">
    <Button @click="showVNodeMessage">显示 VNode 消息</Button>
  </div>
</template>

<style scoped>
.message-demo {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
</style>
