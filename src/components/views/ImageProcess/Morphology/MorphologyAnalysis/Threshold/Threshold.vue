/**
 * @Description: 二值化组件
 * @Author: 陈思宇
 * @Date: 2026-03-16 18:16:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-16 15:36:00
 */

<template>
  <section class="threshold">
    <h3 class="threshold-title">二值化阈值</h3>
    <div class="control-group">
      <input type="range"  min="0" max="255" class="threshold-slider"/>
    </div>
    <div class="control-group inline">
      <label class="checkbox-label">
        <input type="checkbox" /> 反色 (黑白翻转)
      </label>
    </div>
  </section>
</template>

<style scoped>
.threshold-title{
  font-size: var(--operate-title-fs);
  color: var(--operate-title-color-1);
  font-weight: var(--operate-title-fw);
}

.threshold-slider{
  width: 100%;
  height: var(--slider-h);
  border-radius: var(--slider-radius);
  background: var(--slider-color-1);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.threshold-slider::-webkit-slider-thumb {
  -webkit-appearance: none; 
  appearance: none;
  width: var(--slider-thumb-w);
  height: var(--slider-thumb-h);
  border-radius: 50%;
  background: var(--slider-thumb-bg-color-1);
  cursor: pointer;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: var(--fs-sm);
  color: var(--text-color);
}

.checkbox-label input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  position: relative;
  margin-right: 8px;
  transition: all 0.2s ease;
}

.checkbox-label input[type="checkbox"]:checked {
  background: #007bff;
  border-color: #007bff;
}

.checkbox-label input[type="checkbox"]:checked::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
  font-weight: bold;
}
</style>