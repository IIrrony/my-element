<script setup>
import { ref } from 'vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>
<template>
  <div class="tooltip-demo">
    <Tooltip content="悬停触发的提示" trigger="hover">
      <Button>悬停触发（默认）</Button>
    </Tooltip>
    
    <Tooltip content="点击触发的提示" trigger="click">
      <Button>点击触发</Button>
    </Tooltip>
  </div>
</template>

<style scoped>
.tooltip-demo {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 40px 0;
}
</style>
