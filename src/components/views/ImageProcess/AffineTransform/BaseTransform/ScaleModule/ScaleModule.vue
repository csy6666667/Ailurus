/**
 * @Description: 图片放缩组件
 * @Author: 陈思宇
 * @Date: 2026-03-13 12:00:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-15 15:26:00
 */

<template>
  <div class="scale-module">
    <h3 class="scale-title">图片放缩</h3>
    <div class="scale-controls">
      <div class="scale-slider-container">
        <input
          type="range"
          min="0.1"
          max="3.0"
          step="0.1"
          class="scale-slider"
        />
        <div class="scale-labels">
          <span>0.1x</span>
          <span>1.0x</span>
          <span>3.0x</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>    
.scale-title {
  font-size: var(--fs-md);
  color: var(--operate-title-color-1);
  font-weight: var(--operate-title-fw);
}

.scale-slider {
  width: 100%;
  height: var(--slider-h);
  border-radius: var(--slider-radius);
  background: var(--slider-color-1);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.scale-slider::-webkit-slider-thumb {
  -webkit-appearance: none; 
  appearance: none;
  width: var(--slider-thumb-w);
  height: var(--slider-thumb-h);
  border-radius: 50%;
  background: var(--slider-thumb-bg-color-1);
  cursor: pointer;
}

.scale-labels {
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-sm);
  font-size: var(--operate-label-fs);
  color: var(--operate-label-color-1);
  opacity: 0.8;
}   
</style>