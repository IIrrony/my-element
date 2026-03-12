<script setup>
import { ref } from 'vue'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'

const menuOptions = [
  { label: '选项1', key: 'item-1' },
  { label: '选项2', key: 'item-2' },
  { label: '选项3', key: 'item-3' }
]
</script>
<template>
  <div style="display: flex; gap: 20px;">
    <Dropdown :menuOptions="menuOptions" trigger="hover">
      <Button>悬停触发（默认）</Button>
    </Dropdown>
    
    <Dropdown :menuOptions="menuOptions" trigger="click">
      <Button>点击触发</Button>
    </Dropdown>
  </div>
</template>
