<script setup>
import { ref } from 'vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>
<template>
  <div class="tooltip-demo">
    <Tooltip content="这是一个提示文本">
      <Button>悬停查看提示</Button>
    </Tooltip>
  </div>
</template>

<style scoped>
.tooltip-demo {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}
</style>
