<script setup>
import { ref } from 'vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
</script>
<template>
  <div class="tooltip-demo">
    <Tooltip>
      <Button>自定义内容</Button>
      <template #content>
        <div class="custom-tooltip-content">
          <h4><Icon icon="info-circle" /> 自定义提示内容</h4>
          <p>这里可以放置更加丰富的内容，包括：</p>
          <ul>
            <li>文本</li>
            <li>图标</li>
            <li>其他组件</li>
          </ul>
        </div>
      </template>
    </Tooltip>
  </div>
</template>

<style scoped>
.tooltip-demo {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}
.custom-tooltip-content {
  padding: 5px;
}
.custom-tooltip-content h4 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #409eff;
}
.custom-tooltip-content p {
  margin: 5px 0;
}
.custom-tooltip-content ul {
  margin: 5px 0;
  padding-left: 20px;
}
</style>
