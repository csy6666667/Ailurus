<!--
* @FileDescription: 主体布局组件
* @Author: 陈思宇
* @Date: 2026-03-11 15:21:00
* @LastEditors: 陈思宇
* @LastEditTime: 2026-03-13 12:12:00
-->
<template>
  <div class="layout">
    <header class="layout-header">
      <Navbar/>
    </header>
    <section class="layout-body">
        <SideBar/>
        <main class="layout-content">
          <Workplace/>
          <div class="control-panel">
            <router-view/>
          </div>
        </main>
    </section>
  </div>
</template>

<script setup lang="ts">
import Workplace from './Workplace.vue';
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
</style>