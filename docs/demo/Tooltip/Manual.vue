<script setup>
import { ref } from 'vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'

const tooltipRef = ref(null)

const showTooltip = () => {
  tooltipRef.value.show()
}

const hideTooltip = () => {
  tooltipRef.value.hide()
}
</script>
<template>
  <div class="tooltip-demo">
    <Tooltip
      content="这是一个手动控制的提示"
      manual
      ref="tooltipRef"
      placement="top"
    >
      <Button>手动控制的目标元素</Button>
    </Tooltip>

    <div class="control-buttons">
      <Button type="primary" @click="showTooltip">显示提示</Button>
      <Button @click="hideTooltip">隐藏提示</Button>
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
.control-buttons {
  display: flex;
  gap: 10px;
}
</style>
