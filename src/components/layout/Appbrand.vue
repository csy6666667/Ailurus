<!--
* @FileDescription: 网站名组件
* @Author: 陈思宇
* @Date: 2026-03-11 15:21:00
* @LastEditors: 陈思宇
* @LastEditTime: 2026-03-11 19:35:00
-->
<template>
  <div class="app-brand">
    <h1>{{ siteName }}</h1>
  </div>
</template>
<script setup lang="ts">
const siteName = import.meta.env.VITE_APP_TITLE;
</script>

<style scoped>
.app-brand {
  padding-left: var(--appbrand-padding-left);
}
</style>