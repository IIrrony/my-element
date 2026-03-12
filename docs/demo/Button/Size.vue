<script setup>
import Button from '@/components/Button/Button.vue'
</script>
<template>
  <div class="demo-button">
    <Button size="large">大型按钮</Button>
    <Button>默认按钮</Button>
    <Button size="small">小型按钮</Button>
  </div>
  <div class="demo-button" style="margin-top: 20px">
    <Button size="large" type="primary">大型按钮</Button>
    <Button type="primary">默认按钮</Button>
    <Button size="small" type="primary">小型按钮</Button>
  </div>
</template>

<style>
.demo-button .vk-button {
  margin-right: 10px;
}
</style>
