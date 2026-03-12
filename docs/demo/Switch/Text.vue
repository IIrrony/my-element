<template>
  <div class="demo-switch">
    <vk-switch
      v-model="value1"
      active-text="开启"
      inactive-text="关闭"
    />
    <vk-switch
      v-model="value2"
      active-text="是"
      inactive-text="否"
      size="large"
    />
    <vk-switch
      v-model="value3"
      active-text="ON"
      inactive-text="OFF"
      size="small"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import vkSwitch from '@/components/Switch/Switch.vue'

const value1 = ref(true)
const value2 = ref(false)
const value3 = ref(true)
</script>

<style scoped>
.demo-switch {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
