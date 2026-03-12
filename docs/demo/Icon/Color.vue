<script setup>
import Icon from '@/components/Icon/Icon.vue'
</script>
<template>
  <div class="icon-demo">
    <div class="icon-item">
      <Icon icon="star" color="#e6a23c" />
      <span>黄色</span>
    </div>
    <div class="icon-item">
      <Icon icon="heart" color="#f56c6c" />
      <span>红色</span>
    </div>
    <div class="icon-item">
      <Icon icon="check-circle" color="#67c23a" />
      <span>绿色</span>
    </div>
    <div class="icon-item">
      <Icon icon="info-circle" color="#409eff" />
      <span>蓝色</span>
    </div>
    <div class="icon-item">
      <Icon icon="ban" color="red"/>
      <span style="white-space: nowrap">ban</span>
    </div>
  </div>
</template>

<style scoped>
.icon-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.icon-item i {
  font-size: 30px;
  margin-bottom: 10px;
}
.icon-item span {
  font-size: 12px;
}
</style>
