<!--
* @FileDescription: 主体布局组件
* @Author: 陈思宇
* @Date: 2026-03-11 15:21:00
* @LastEditors: 陈思宇
* @LastEditTime: 2026-03-11 19:35:00
-->
<template>
  <div class="layout">
    <header class="layout-header">
      <Navbar/>
    </header>
    <section class="layout-body">
        <SideBar/>
    </section>
  </div>
</template>

<script setup lang="ts">
import SideBar from './SideBar.vue';
</script>

<style scoped>
.layout{
  width: 100vw;
  height: 100vh;
}
.layout-body{
  height: 100%;
}
</style>