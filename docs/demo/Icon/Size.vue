<script setup>
import Icon from '@/components/Icon/Icon.vue'
</script>
<template>
  <div class="icon-demo">
    <div class="icon-item">
      <Icon icon="user" size="xs" />
      <span>xs</span>
    </div>
    <div class="icon-item">
      <Icon icon="user" size="sm" />
      <span>sm</span>
    </div>
    <div class="icon-item">
      <Icon icon="user" />
      <span>默认</span>
    </div>
    <div class="icon-item">
      <Icon icon="user" size="lg" />
      <span>lg</span>
    </div>
    <div class="icon-item">
      <Icon icon="user" size="xl" />
      <span>xl</span>
    </div>
    <div class="icon-item">
      <Icon icon="user" size="2xl" />
      <span>2xl</span>
    </div>
  </div>
</template>

<style scoped>
.icon-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 100px;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  transition: all 0.2s;
}
.icon-item:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.icon-item span {
  font-size: 12px;
  margin-top: 10px;
}
</style>
