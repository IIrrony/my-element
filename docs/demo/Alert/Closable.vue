<script setup>
import Alert from '@/components/Alert/Alert.vue'
import { ref } from 'vue'

const alerts = ref([
  { id: 1, type: 'success', title: '成功提示' },
  { id: 2, type: 'warning', title: '警告提示' },
  { id: 3, type: 'danger', title: '危险提示' },
  { id: 4, type: 'info', title: '信息提示' }
])

const handleClose = (id) => {
  alerts.value = alerts.value.filter(alert => alert.id !== id)
}
</script>
<template>
  <div class="demo-alert">
    <Alert 
      v-for="alert in alerts" 
      :key="alert.id"
      :title="alert.title" 
      :type="alert.type" 
      closable
      @close="handleClose(alert.id)"
    />
  </div>
</template>

<style scoped>
.demo-alert > * {
  margin-bottom: 20px;
}
</style>
