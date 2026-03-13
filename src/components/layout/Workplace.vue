<!--
* @FileDescription: 画布组件
* @Author: 陈思宇
* @Date: 2026-03-12 19:58:00
* @LastEditors: 陈思宇
* @LastEditTime: 2026-03-13 12:12:00
-->
<template>
  <div class="workplace">
    <CanvasWrapper/>
  </div>
</template>

<script setup lang="ts">
import CanvasWrapper from '../common/CanvasWrapper.vue';

</script>

<style scoped>
.workplace{
  width: 100%;
  height: 100%;
  background-image: radial-gradient(#2d1610 1px, transparent 1px);
  background-size: 20px 20px; /* 暗平铺格纹 */
  background-color: #1a0d0a;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>