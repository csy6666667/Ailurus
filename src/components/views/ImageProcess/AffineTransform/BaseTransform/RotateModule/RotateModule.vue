/**
 * @Description: 图片旋转组件
 * @Author: 陈思宇
 * @Date: 2026-03-13 12:00:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-15 15:59:00
 */
<template>
  <div class="rotate-module">
    <h3 class="rotate-title">旋转</h3>
      <input
        type="range"
        min="0"
        max="360"
        v-model="baseTransformStore.angle"
        step="1"
        class="rotate-slider"
      />
  </div>
</template>

<script setup lang="ts">
import { usebaseTransformStore } from '@/store/picture/baseTransform';

const baseTransformStore = usebaseTransformStore();
</script>

<style scoped>
.rotate-module{
  flex: 1;
}

.rotate-title{
  color: var(--operate-title-color-1);
  font-size: var(--fs-md);
  font-weight: var(--operate-title-fw);
}

.rotate-slider {
  width: 100%;
  height: var(--slider-h);
  border-radius: var(--slider-radius);
  background: var(--slider-color-1);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.rotate-slider::-webkit-slider-thumb {
  -webkit-appearance: none; 
  appearance: none;
  width: var(--slider-thumb-w);
  height: var(--slider-thumb-h);
  border-radius: 50%;
  background: var(--slider-thumb-bg-color-1);
  cursor: pointer;
}
</style>