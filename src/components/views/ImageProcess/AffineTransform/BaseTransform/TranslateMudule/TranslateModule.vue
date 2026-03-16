/**
 * @Description: 图片平移组件
 * @Author: 陈思宇
 * @Date: 2026-03-16 12:10:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-16 15:36:00
 */

<template>
  <div class="translate-module">
    <h3 class="translate-title">图片平移</h3>

    <div class="translate-controls">
      <div class="translate-slider-container">
        <label class="translate-label">水平</label>
        <input
          type="range"
          min="-200"
          max="200"
          step="1"
          class="translate-slider"   
          v-model.number="baseTransformStore.translateX"
        />
        <div class="translate-labels">
          <span>-200</span>
          <span>0</span>
          <span>200</span>
        </div>
      </div>

      <div class="translate-slider-container">
        <label class="translate-label">垂直</label>
        <input
          type="range"
          min="-200"
          max="200"
          step="1"
          class="translate-slider"
          v-model.number="baseTransformStore.translateY"
        />
        <div class="translate-labels">
          <span>-200</span>
          <span>0</span>
          <span>200</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usebaseTransformStore } from '@/store/picture/baseTransform';

const baseTransformStore = usebaseTransformStore();
</script>

<style scoped>
.translate-title {
  font-size: var(--operate-title-fs);
  color: var(--operate-title-color-1);
  font-weight: var(--operate-title-fw);
}

.translate-controls {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.translate-slider {
  width: 100%;
  height: var(--slider-h);
  border-radius: var(--slider-radius);
  background: var(--slider-color-1);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.translate-slider::-webkit-slider-thumb {
  -webkit-appearance: none; 
  appearance: none;
  width: var(--slider-thumb-w);
  height: var(--slider-thumb-h);
  border-radius: 50%;
  background: var(--slider-thumb-bg-color-1);
  cursor: pointer;
}

.translate-labels {
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-sm);
  font-size: var(--operate-label-fs);
  color: var(--operate-label-color-1);
  opacity: 0.8;
}

.translate-label {
  font-size: var(--operate-label-fs);
  color: var(--operate-label-color-1);
}
</style>
