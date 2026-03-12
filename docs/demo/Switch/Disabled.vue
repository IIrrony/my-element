<template>
  <div class="demo-switch">
    <vk-switch v-model="value1" disabled />
    <vk-switch v-model="value2" disabled />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import vkSwitch from '@/components/Switch/Switch.vue'

const value1 = ref(true)
const value2 = ref(false)
</script>

<style scoped>
.demo-switch {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
