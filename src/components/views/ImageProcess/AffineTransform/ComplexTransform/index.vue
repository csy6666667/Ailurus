/**
 * @Description: 图片旋转页面组件
 * @Author: 陈思宇
 * @Date: 2026-03-11 21:49:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-11 20:32:00
 */
<template>
  <div class="rotate-container">
    <main class="preview-stage">
      <div class="image-wrapper" :style="{ transform: `rotate(${angle}deg) scale(${zoom})` }">
        <img src="https://via.placeholder.com/600x400" alt="Preview" ref="imageRef" />
      </div>
      
      <div class="zoom-tools">
        <button @click="zoom -= 0.1">-</button>
        <span>{{ Math.round(zoom * 100) }}%</span>
        <button @click="zoom += 0.1">+</button>
      </div>
    </main>

    <aside class="control-panel">
      <h3 class="panel-title">旋转与变换</h3>
      
      <div class="control-group">
        <label>自由旋转 ({{ angle }}°)</label>
        <el-slider 
          v-model="angle" 
          :min="0" 
          :max="360" 
          :step="1"
          @input="handleRotate"
        />
      </div>

      <div class="quick-actions">
        <button class="action-btn" @click="angle -= 90">
          <el-icon><RefreshLeft /></el-icon> 向左 90°
        </button>
        <button class="action-btn" @click="angle += 90">
          <el-icon><RefreshRight /></el-icon> 向右 90°
        </button>
      </div>

      <div class="submit-area">
        <button class="apply-btn">应用变换</button>
        <button class="reset-btn" @click="angle = 0; zoom = 1">重置</button>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'

const angle: Ref<number> = ref(0)
const zoom: Ref<number> = ref(1)
const imageRef: Ref<HTMLImageElement | null> = ref(null)

const handleRotate = (val: number) => {
  angle.value = val
}
</script>

<style scoped>
.rotate-container {
  display: flex;
  height: calc(100vh - 60px); /* 减去顶部导航栏高度 */
  background-color: #1A0D0A; /* 深褐黑背景 */
  overflow: hidden;
}

/* 预览区样式 */
.preview-stage {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-image: radial-gradient(#2d1610 1px, transparent 1px);
  background-size: 20px 20px; /* 暗平铺格纹 */
}

.image-wrapper {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  max-width: 100%;
}

.image-wrapper img {
  display: block;
  max-width: 100%;
  max-height: 70vh;
}

/* 控制面板样式 - 小熊猫色系 */
.control-panel {
  width: 300px;
  background-color: #2D1610; 
  border-left: 1px solid rgba(214, 73, 51, 0.3);
  padding: 24px;
  color: #F8E6D1;
}

.panel-title {
  color: #D64933; /* 火红色 */
  margin-bottom: 30px;
  font-size: 1.2rem;
}

.control-group label {
  display: block;
  margin-bottom: 15px;
  font-size: 14px;
}

.quick-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 30px 0;
}

.action-btn {
  background: #4A261A;
  border: 1px solid #D64933;
  color: #F8E6D1;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: 12px;
}

.apply-btn {
  width: 100%;
  background-color: #D64933;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
}

/* 响应式适配 */
@media (max-width: 992px) { /* md 型号 */
  .rotate-container {
    flex-direction: column;
  }
  .control-panel {
    width: 100%;
    height: auto;
    border-left: none;
    border-top: 1px solid #D64933;
  }
}
</style>