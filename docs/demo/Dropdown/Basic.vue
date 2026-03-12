<script setup>
import { ref } from 'vue'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'

const menuOptions = [
  { label: '选项1', key: 'item-1' },
  { label: '选项2', key: 'item-2' },
  { label: '选项3', key: 'item-3' }
]

const handleSelect = (item) => {
  console.log('选中了:', item)
}
</script>
<template>
  <div style="display: flex; gap: 20px;">
    <Dropdown :menuOptions="menuOptions" @select="handleSelect">
      <Button>下拉菜单</Button>
    </Dropdown>
    
    <Dropdown :menuOptions="menuOptions" @select="handleSelect" placement="bottom-start">
      <Button>位置：bottom-start</Button>
    </Dropdown>
    
    <Dropdown :menuOptions="menuOptions" @select="handleSelect" placement="bottom-end">
      <Button>位置：bottom-end</Button>
    </Dropdown>
  </div>
</template>
