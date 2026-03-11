<!--
* @FileDescription: 下拉项组件
* @Author: 陈思宇
* @Date: 2026-03-11 15:34:00
* @LastEditors: 陈思宇
* @LastEditTime: 2026-03-11 19:35:00
-->
<template>
  <div class="drop-down">
    <el-icon class="icon">
      <component :is="props.menuItem.icon"/>
    </el-icon>
    <span class="drop-down-title">{{ props.menuItem.title }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  menuItem: {
    type: Object,
    required: true
  }
});
</script> 

<style scoped>
.drop-down {
  height: var(--drop-down-item-h);
  display: flex;
  align-items: center;
  padding: var(--drop-down-item-padding);
  gap: var(--drop-down-item-gap);
  color: var(--drop-down-item-color);
}
.drop-down-title {
  font-size: var(--drop-down-item-fs);
}
.icon{
  font-size: var(--drop-down-item-icon-size);
}
</style>