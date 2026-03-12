<script setup>
import { ref } from 'vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>
<template>
  <div class="tooltip-demo">
    <div class="tooltip-row">
      <Tooltip content="Top Left 提示" placement="top-start">
        <Button>上左</Button>
      </Tooltip>
      <Tooltip content="Top 提示" placement="top">
        <Button>上边</Button>
      </Tooltip>
      <Tooltip content="Top Right 提示" placement="top-end">
        <Button>上右</Button>
      </Tooltip>
    </div>
    <div class="tooltip-row">
      <Tooltip content="Left 提示" placement="left">
        <Button>左边</Button>
      </Tooltip>
      <div style="width: 80px;"></div>
      <Tooltip content="Right 提示" placement="right">
        <Button>右边</Button>
      </Tooltip>
    </div>
    <div class="tooltip-row">
      <Tooltip content="Bottom Left 提示" placement="bottom-start">
        <Button>下左</Button>
      </Tooltip>
      <Tooltip content="Bottom 提示" placement="bottom">
        <Button>下边</Button>
      </Tooltip>
      <Tooltip content="Bottom Right 提示" placement="bottom-end">
        <Button>下右</Button>
      </Tooltip>
    </div>
  </div>
</template>

<style scoped>
.tooltip-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 0;
}
.tooltip-row {
  display: flex;
  gap: 20px;
}
</style>
