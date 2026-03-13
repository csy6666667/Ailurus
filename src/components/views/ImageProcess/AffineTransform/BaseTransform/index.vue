/**
 * @Description: 图片旋转页面组件
 * @Author: 陈思宇
 * @Date: 2026-03-12 21:49:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-13 12:12:00
 */
<template>
  <div class="base-transform">
    <RotateModule />
  </div>
</template>
<script setup lang="ts">
import RotateModule from './RotateModule/RotateModule.vue';
</script>

<style scoped>
.base-transform{
  display: flex;
  flex-direction: column;
}
</style>