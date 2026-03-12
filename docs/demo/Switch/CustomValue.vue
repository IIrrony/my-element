<template>
  <div class="demo-switch">
    <vk-switch
      v-model="value"
      active-value="100"
      inactive-value="0"
    />
    <div class="value-display">当前值: {{ value }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import vkSwitch from '@/components/Switch/Switch.vue'

const value = ref('100')
</script>

<style scoped>
.demo-switch {
  display: flex;
  align-items: center;
  gap: 20px;
}
.value-display {
  font-size: 14px;
  color: #666;
}
</style>
