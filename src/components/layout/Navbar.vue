<!--
* @FileDescription: 顶部导航栏组件
* @Author: 陈思宇
* @Date: 2026-03-11 15:21:00
* @LastEditors: 陈思宇
* @LastEditTime: 2026-03-11 19:35:00
-->
<template>
  <div class="navbar">
    <AppBrand/>
  </div>
</template>
<script setup lang="ts">
import AppBrand from './Appbrand.vue';
</script>

<style scoped>
.navbar {
  background-color: var(--navbar-bg-color);
  height: var(--navbar-h);
  width: 100%;
  border-bottom: var(--navbar-border-bottom);
}
</style>