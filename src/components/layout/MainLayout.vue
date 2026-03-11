<!--
* @FileDescription: 主体布局组件
* @Author: 陈思宇
* @Date: 2026-03-11 15:21:00
* @LastEditors: 陈思宇
* @LastEditTime: 2026-03-11 21:03:00
-->
<template>
  <div class="layout">
    <header class="layout-header">
      <Navbar/>
    </header>
    <section class="layout-body">
        <SideBar/>
        <main class="layout-content">
          <router-view/>
        </main>
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
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.layout-header{
  height: var(--layout-header-h);
}
.layout-body{
  flex: 1;
  display: flex;
  overflow: hidden;
}
.layout-content{
  overflow-y: auto;
  min-height: 0;
  flex: 1;
}
</style>