<template>
  <div class="demo-switch">
    <vk-switch v-model="value1" size="large" />
    <vk-switch v-model="value2" />
    <vk-switch v-model="value3" size="small" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import vkSwitch from '@/components/Switch/switch.vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
</script>

<style scoped>
.demo-switch {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
