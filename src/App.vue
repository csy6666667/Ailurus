<!--
* @FileDescription: 根组件
* @Author: 陈思宇
* @Date: 2026-03-11 15:10:00
* @LastEditors: 陈思宇
* @LastEditTime: 2026-03-11 19:35:00
-->
<template>
  <div id="app">
    <MainLayout />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import MainLayout from './components/layout/MainLayout.vue';
onMounted(() => {
  const checkOpenCV = () => {
    if (window.cv && window.cv.runtimeInitialized) {
      console.log('✅ OpenCV.js 已就绪 (直接检测成功)');
      return true;
    }
    return false;
  };

  if (checkOpenCV()) return;

  if (window.cv) {
    window.cv.onRuntimeInitialized = () => {
      console.log("🚀 OpenCV.js 通过 cv 对象的钩子初始化成功!");
    };
  }
})
</script>
