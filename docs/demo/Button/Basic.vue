<script setup>
import Button from '@/components/Button/Button.vue'
</script>
<template>
  <div class="demo-button">
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="info">信息按钮</Button>
  </div>

  <div class="demo-button" style="margin-top: 20px">
    <Button plain>朴素按钮</Button>
    <Button type="primary" plain>主要按钮</Button>
    <Button type="success" plain>成功按钮</Button>
    <Button type="warning" plain>警告按钮</Button>
    <Button type="danger" plain>危险按钮</Button>
    <Button type="info" plain>信息按钮</Button>
  </div>

  <div class="demo-button" style="margin-top: 20px">
    <Button round>圆角按钮</Button>
    <Button type="primary" round>主要按钮</Button>
    <Button type="success" round>成功按钮</Button>
    <Button type="warning" round>警告按钮</Button>
    <Button type="danger" round>危险按钮</Button>
    <Button type="info" round>信息按钮</Button>
  </div>

  <div class="demo-button" style="margin-top: 20px">
    <Button icon="search" circle></Button>
    <Button type="primary" icon="edit" circle></Button>
    <Button type="success" icon="check" circle></Button>
    <Button type="warning" icon="star" circle></Button>
    <Button type="danger" icon="trash-can" circle></Button>
    <Button type="info" icon="message" circle></Button>
  </div>
</template>

<style>
.demo-button .vk-button {
  margin-right: 10px;
}
</style>
