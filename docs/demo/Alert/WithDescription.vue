<script setup>
import Alert from '@/components/Alert/Alert.vue'
</script>
<template>
  <div class="demo-alert">
    <Alert 
      title="默认提示" 
      description="这是一段关于默认提示的详细描述文本，用于补充说明提示内容。"
      showIcon
    />
    <Alert 
      title="成功提示" 
      type="success" 
      description="这是一段关于成功提示的详细描述文本，用于补充说明提示内容。"
      showIcon
    />
    <Alert 
      title="警告提示" 
      type="warning" 
      description="这是一段关于警告提示的详细描述文本，用于补充说明提示内容。"
      showIcon
    />
    <Alert 
      title="危险提示" 
      type="danger" 
      description="这是一段关于危险提示的详细描述文本，用于补充说明提示内容。"
      showIcon
    />
    <Alert 
      title="信息提示" 
      type="info" 
      description="这是一段关于信息提示的详细描述文本，用于补充说明提示内容。"
      showIcon
    />
  </div>
</template>

<style scoped>
.demo-alert > * {
  margin-bottom: 20px;
}
</style>
