<!--
* @FileDescription: 侧边栏组件
* @Author: 陈思宇
* @Date: 2026-03-11 15:21:00
* @LastEditors: 陈思宇
* @LastEditTime: 2026-03-11 21:03:00
-->
<template>
  <aside class="sidebar">
    <ul>
      <li v-for="(item, index) in sideBarMenu" :key="index">
        <DropDown :menuItem="item"/>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import DropDown from '../common/DropDown.vue';
import { sideBarMenu } from '../../conifg/menuConfig';

</script>

<style scoped>
.sidebar {
  width: var(--side-bar-w);
  height: 100%;
  background-color: var(--sidebar-bg-color);
  font-size: var(--sidebar-menu-fs);
}
</style>