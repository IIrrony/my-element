<script setup>
import Button from '@/components/Button/Button.vue'
</script>
<template>
  <div class="demo-button">
    <Button disabled>默认按钮</Button>
    <Button type="primary" disabled>主要按钮</Button>
    <Button type="success" disabled>成功按钮</Button>
    <Button type="warning" disabled>警告按钮</Button>
    <Button type="danger" disabled>危险按钮</Button>
    <Button type="info" disabled>信息按钮</Button>
  </div>
  <div class="demo-button" style="margin-top: 20px">
    <Button plain disabled>朴素按钮</Button>
    <Button type="primary" plain disabled>主要按钮</Button>
    <Button type="success" plain disabled>成功按钮</Button>
    <Button type="warning" plain disabled>警告按钮</Button>
    <Button type="danger" plain disabled>危险按钮</Button>
    <Button type="info" plain disabled>信息按钮</Button>
  </div>
</template>

<style>
.demo-button .vk-button {
  margin-right: 10px;
}
</style>
