<!--
* @FileDescription: 下拉项组件
* @Author: 陈思宇
* @Date: 2026-03-11 15:34:00
* @LastEditors: 陈思宇
* @LastEditTime: 2026-03-13 12:12:00
-->
<template>
  <div class="drop-down-container">
    <div class="drop-down" :class="'depth-' + props.menuItem.depth">
      <el-icon class="icon">
        <component :is="props.menuItem.icon"/>
      </el-icon>
      <router-link :to="{name: props.menuItem.routeName}" class="drop-down-title" active-class="active-red-panda">{{ props.menuItem.title }}</router-link>
    </div>
    <ul class="drop-down-sub">
      <li v-if="props.menuItem.children" v-for="(child, index) in props.menuItem.children" :key="index">
        <DropDown  :menuItem="child"/>
      </li>
    </ul>
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
  display: flex;
  align-items: center;
  padding: var(--drop-down-item-padding);
  gap: var(--drop-down-item-gap);
  color: var(--drop-down-item-color);
}
.drop-down.depth-1 {
  height: var(--drop-down-item-1-h);
  background-color: var(--drop-down-item-1-bg-color);
}
.drop-down.depth-2 {
  height: var(--drop-down-item-2-h);
  background-color: var(--drop-down-item-2-bg-color);
  color: var(--drop-down-item-2-color);
}
.drop-down.depth-3 {
  height: var(--drop-down-item-3-h);
  padding-left: var(--drop-down-item-3-padding-left);
  /* background-color: var(--drop-down-item-3-bg-color); */
}
.drop-down-title {
  font-size: var(--drop-down-item-fs);
}
.icon{
  font-size: var(--drop-down-item-icon-size);
}
.drop-down-sub .dro-down{
  display: none;
  flex-direction: column;
}
.depth-3:has(.active-red-panda) {
  background-color: var(--drop-down-item-3-active-bg-color);
  color: var(--drop-down-item-3-active-color);
}
</style>