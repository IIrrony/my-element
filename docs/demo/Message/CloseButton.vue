<script setup>
import { createMessage } from '@/components/Message/method'
import Button from '@/components/Button/Button.vue'

const showMessage = (type) => {
  createMessage({
    message: '这条消息可以手动关闭',
    type,
    showClose: true
  })
}
</script>
<template>
  <div class="message-demo">
    <Button plain type="info" @click="showMessage('info')">显示可关闭的消息</Button>
    <Button plain type="primary" @click="showMessage('success')">显示可关闭的消息</Button>
    <Button plain type="warning" @click="showMessage('warning')">显示可关闭的消息</Button>
    <Button plain type="danger" @click="showMessage('danger')">显示可关闭的消息</Button>
  </div>
</template>

<style scoped>
.message-demo {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px 0;
}
</style>
