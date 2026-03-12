<script setup>
import { ref } from 'vue'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'

const menuOptions = [
  { label: '选项1', key: 'item-1' },
  { label: '选项2', key: 'item-2' },
  { label: '选项3', key: 'item-3', divided: true },
  { label: '选项4', key: 'item-4' }
]
</script>
<template>
  <Dropdown :menuOptions="menuOptions">
    <Button>下拉菜单（分割线）</Button>
  </Dropdown>
</template>
