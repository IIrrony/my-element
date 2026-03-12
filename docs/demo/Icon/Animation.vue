<script setup>
import Icon from '@/components/Icon/Icon.vue'
</script>
<template>
  <div class="icon-demo">
    <div class="icon-item">
      <Icon icon="spinner" spin />
      <span>spin</span>
    </div>
    <div class="icon-item">
      <Icon icon="circle-notch" spin />
      <span>spin</span>
    </div>
    <div class="icon-item">
      <Icon icon="sync" spin />
      <span>spin</span>
    </div>
    <div class="icon-item">
      <Icon icon="cog" spin />
      <span>spin</span>
    </div>
    <div class="icon-item">
      <Icon icon="bell" shake />
      <span>shake</span>
    </div>
    <div class="icon-item">
      <Icon icon="heart" beat />
      <span>beat</span>
    </div>
    <div class="icon-item">
      <Icon icon="star" bounce />
      <span>bounce</span>
    </div>
    <div class="icon-item">
      <Icon icon="thumbs-up" fade />
      <span>fade</span>
    </div>
    <div class="icon-item">
      <Icon icon="camera-rotate" flip />
      <span>flip</span>
    </div>
    <div class="icon-item">
      <Icon icon="poo-bolt" beat-fade />
      <span>beat-fade</span>
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
