<script setup>
import { ref, h } from 'vue'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'

const menuOptions = [
  { 
    label: h('div', { style: 'display: flex; align-items: center;' }, [
      h(Icon, { icon: 'edit', style: 'margin-right: 8px;' }),
      '编辑'
    ]), 
    key: 'edit' 
  },
  { 
    label: h('div', { style: 'display: flex; align-items: center;' }, [
      h(Icon, { icon: 'copy', style: 'margin-right: 8px;' }),
      '复制'
    ]), 
    key: 'copy' 
  },
  { 
    label: h('div', { style: 'display: flex; align-items: center;' }, [
      h(Icon, { icon: 'trash-can', style: 'margin-right: 8px; color: #f56c6c;' }),
      h('span', { style: 'color: #f56c6c;' }, '删除')
    ]), 
    key: 'delete',
    divided: true
  }
]
</script>
<template>
  <Dropdown :menuOptions="menuOptions">
    <Button>自定义渲染</Button>
  </Dropdown>
</template>
