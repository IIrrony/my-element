<script setup>
import Alert from '@/components/Alert/Alert.vue'
</script>
<template>
  <div class="demo-alert">
    <Alert title="居中显示的提示" center />
    <Alert title="居中显示的成功提示" type="success" center />
    <Alert title="居中显示的警告提示" type="warning" center />
    <Alert title="居中显示的危险提示" type="danger" center />
    <Alert title="居中显示的信息提示" type="info" center />
  </div>
</template>

<style scoped>
.demo-alert > * {
  margin-bottom: 20px;
}
</style>
