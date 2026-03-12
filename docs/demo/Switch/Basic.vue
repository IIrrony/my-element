<template>
  <div class="demo-switch">
    <vk-switch v-model="value1" />
    <vk-switch v-model="value2" style="--vk-switch-on-color: #13ce66; --vk-switch-off-color: #ff4949;" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import vkSwitch from '@/components/Switch/Switch.vue'

const value1 = ref(true)
const value2 = ref(true)
</script>

<style scoped>
.demo-switch {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
