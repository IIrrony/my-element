<script setup>
import { createMessage } from '@/components/Message/method'
import Button from '@/components/Button/Button.vue'

const showMessage = (type) => {
  createMessage({
    message: `这是一条${type}消息`,
    type
  })
}
</script>
<template>
  <div class="message-demo">
    <Button @click="showMessage('info')">信息提示</Button>
    <Button @click="showMessage('success')">成功提示</Button>
    <Button @click="showMessage('warning')">警告提示</Button>
    <Button @click="showMessage('danger')">错误提示</Button>
  </div>
</template>

<style scoped>
.message-demo {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
}
</style>
