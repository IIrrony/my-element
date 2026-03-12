<script setup>
import Button from '@/components/Button/Button.vue'
</script>
<template>
  <div class="demo-button">
    <Button round>圆角按钮</Button>
    <Button type="primary" round>主要按钮</Button>
    <Button type="success" round>成功按钮</Button>
    <Button type="warning" round>警告按钮</Button>
    <Button type="trash-can" round>危险按钮</Button>
    <Button type="info" round>信息按钮</Button>
  </div>
  <div class="demo-button" style="margin-top: 20px">
    <Button icon="search" circle></Button>
    <Button icon="edit" type="primary" circle></Button>
    <Button icon="check" type="success" circle></Button>
    <Button icon="message" type="info" circle></Button>
    <Button icon="trash-can" type="danger" circle></Button>
    <Button icon="star" type="warning" circle></Button>
  </div>
</template>

<style>
.demo-button .vk-button {
  margin-right: 10px;
}
</style>
