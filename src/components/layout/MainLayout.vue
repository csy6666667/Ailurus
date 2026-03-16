<!--
* @FileDescription: 主体布局组件
* @Author: 陈思宇
* @Date: 2026-03-11 15:21:00
* @LastEditors: 陈思宇
* @LastEditTime: 2026-03-16 16:49:00
-->
<template>
  <div class="layout">
    <header class="layout-header">
      <Navbar/>
    </header>
    <section class="layout-body">
        <SideBar/>
        <main class="layout-content">
          <div class="viewport">
            <router-view name="viewport"/>
          </div>
          <div class="control-panel">
            <router-view name="console"/>
          </div>
        </main>
    </section>
  </div>
</template>

<script setup lang="ts">
import SideBar from './SideBar.vue';
import Navbar from './Navbar.vue';
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
  display: flex;
}
.control-panel{
  width: var(--control-panel-w);
  background-color: var(--control-panel-bg-color);
}
.viewport{
  flex: 1;
}
</style>