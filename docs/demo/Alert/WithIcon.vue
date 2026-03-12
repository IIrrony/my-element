<script setup>
import Alert from '@/components/Alert/Alert.vue'
</script>
<template>
  <div class="demo-alert">
    <Alert title="默认提示" showIcon />
    <Alert title="成功提示" type="success" showIcon />
    <Alert title="警告提示" type="warning" showIcon />
    <Alert title="危险提示" type="danger" showIcon />
    <Alert title="信息提示" type="info" showIcon />
  </div>
</template>

<style scoped>
.demo-alert > * {
  margin-bottom: 20px;
}
</style>
