/**
 * @Description: 内核选择组件
 * @Author: 陈思宇
 * @Date: 2026-03-16 18:16:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-16 21:25:00
 */
<template>
  <section class="panel-section">
    <h3 class="kernel-title">内核配置</h3>
    <div class="control-group">
      <label class="kernel-label">形状</label>
      <select  class="styled-select" v-model="morphologyStore.kernelShape">
        <option value="MORPH_RECT">矩形</option>
        <option value="MORPH_CROSS">十字形</option>
        <option value="MORPH_ELLIPSE">椭圆形</option>
      </select>
    </div>
    <div class="control-group">
      <label class="kernel-label">内核大小</label>
      <input 
        type="range" 
        min="3" max="51" step="2" 
        class="kernel-size-slider"
        v-model.number="morphologyStore.kernelSize"
      />
    </div>
    <div class="control-group">
      <label class="kernel-label">迭代次数</label>
      <input type="range" min="1" max="10" class="range-slider" v-model.number="morphologyStore.iterations"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMorphologyStore } from '@/store/picture/Morphology/morphology';

const morphologyStore = useMorphologyStore();
</script>

<style scoped>
.kernel-title{
  font-size: var(--operate-title-fs);
  color: var(--operate-title-color-1);
  font-weight: var(--operate-title-fw);
}

.kernel-label{
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-sm);
  font-size: var(--operate-label-fs);
  color: var(--operate-label-color-1);
  opacity: 0.8;
}

.styled-select {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+');
  background-repeat: no-repeat;
  background-position: right 8px center;
  padding-right: 25px;
  transition: border-color 0.2s ease;
}

.styled-select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.kernel-size-slider, .range-slider{
  width: 100%;
  height: var(--slider-h);
  border-radius: var(--slider-radius);
  background: var(--slider-color-1);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.kernel-size-slider::-webkit-slider-thumb, .range-slider::-webkit-slider-thumb {
  -webkit-appearance: none; 
  appearance: none;
  width: var(--slider-thumb-w);
  height: var(--slider-thumb-h);
  border-radius: 50%;
  background: var(--slider-thumb-bg-color-1);
  cursor: pointer;
}
</style>