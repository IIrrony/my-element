<script setup>
import Icon from '@/components/Icon/Icon.vue'
</script>
<template>
  <div class="icon-demo">
    <div class="icon-item">
      <Icon icon="home" />
      <span>home</span>
    </div>
    <div class="icon-item">
      <Icon icon="user" />
      <span>user</span>
    </div>
    <div class="icon-item">
      <Icon icon="search" />
      <span>search</span>
    </div>
    <div class="icon-item">
      <Icon icon="edit" />
      <span>edit</span>
    </div>
    <div class="icon-item">
      <Icon icon="check" />
      <span>check</span>
    </div>
    <div class="icon-item">
      <Icon icon="times" />
      <span>times</span>
    </div>
    <div class="icon-item">
      <Icon icon="info-circle" />
      <span>info-circle</span>
    </div>
    <div class="icon-item">
      <Icon icon="arrow-circle-down" />
      <span style="white-space: nowrap">arrow-circle-down</span>
    </div>
    <div class="icon-item">
      <Icon icon="ban" />
      <span style="white-space: nowrap">ban</span>
    </div>
    <div class="icon-item">
      <Icon icon="exclamation-circle" />
      <span style="white-space: nowrap">exclamation-circle</span>
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
  color: #409eff;
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
