<script setup>
import { ref } from 'vue'
import Button from '@/components/Button/Button.vue'

const isLoading = ref(false)

const handleClick = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
</script>
<template>
  <div class="demo-button">
    <Button loading>加载中</Button>
    <Button type="primary" loading>加载中</Button>
    <Button type="success" loading>加载中</Button>
  </div>
  <div class="demo-button" style="margin-top: 20px">
    <Button :loading="isLoading" @click="handleClick">点击后加载</Button>
  </div>
</template>

<style>
.demo-button .vk-button {
  margin-right: 10px;
}
</style>
