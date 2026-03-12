<script setup>
import { createMessage } from '@/components/Message/method'
import Button from '@/components/Button/Button.vue'

const showMessage = () => {
  createMessage({
    message: '这条消息将在 10 秒后关闭',
    type: 'info',
    duration: 10000
  })
}
</script>
<template>
  <div class="message-demo">
    <Button @click="showMessage">显示较长时间的消息</Button>
  </div>
</template>

<style scoped>
.message-demo {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
</style>
