/**
 * @Description: 图片色彩转换页面组件
 * @Author: 陈思宇
 * @Date: 2026-03-18 14:25:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-18 14:34:00
 */
<template>
  <div class="pixel-control-panel">
    <el-card shadow="never" class="status-card">
      <template #header>
        <div class="card-header">
          <span>实验室监控 (Wasm Engine)</span>
          <el-tag :type="isRunning ? 'danger' : 'success'">
            {{ isRunning ? '处理中...' : '待命' }}
          </el-tag>
        </div>
      </template>
      <div class="metrics">
        <div class="metric-item">
          <span class="label">当前行:</span>
          <span class="value">{{ currentY }} / {{ imageHeight }}</span>
        </div>
        <div class="metric-item">
          <span class="label">耗时 (Wasm):</span>
          <span class="value highlight">{{ wasmTime.toFixed(2) }}ms</span>
        </div>
      </div>
      <el-progress :percentage="progress" :status="progress === 100 ? 'success' : ''" />
    </el-card>

    <div class="settings-section">
      <h4 class="section-title">算法配置</h4>
      
      <el-form label-position="top">
        <el-form-item label="转换模式">
          <el-select v-model="config.mode" placeholder="选择色彩空间">
            <el-option label="心理学灰度 (Weighted)" value="weighted" />
            <el-option label="平均值灰度 (Average)" value="average" />
            <el-option label="HSV - 色相提取" value="hsv_hue" />
          </el-select>
        </el-form-item>

        <el-form-item label="扫描速度 (步进行数)">
          <el-slider v-model="config.step" :min="1" :max="100" />
        </el-form-item>

        <el-form-item label="对比度调节">
          <el-slider v-model="config.contrast" :min="-100" :max="100" />
        </el-form-item>
      </el-form>
    </div>

    <div class="action-footer">
      <el-button-group>
        <el-button type="primary" :loading="isRunning" @click="handleStart">
          开始实验
        </el-button>
        <el-button 
          @mousedown="handleCompareStart" 
          @mouseup="handleCompareEnd"
          @mouseleave="handleCompareEnd"
        >
          按住对比
        </el-button>
        <el-button @click="handleReset">重置</el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const isRunning = ref(false)
const currentY = ref(0)
const wasmTime = ref(0)
const imageHeight = ref(1080) // 实际应从图片获取

const config = reactive({
  mode: 'weighted',
  step: 10,
  contrast: 0
})

const progress = computed(() => {
  return Math.round((currentY.value / imageHeight.value) * 100)
})

// 模拟开始处理
const handleStart = async () => {
  isRunning.value = true
  currentY.value = 0
  
  const runStep = async () => {
    if (currentY.value >= imageHeight.value) {
      isRunning.value = false
      return
    }

    const start = performance.now()
    
    // 这里调用你的 Go-Wasm
    // await wasmWorker.process({ 
    //   y: currentY.value, 
    //   step: config.step,
    //   mode: config.mode 
    // })
    
    wasmTime.value = performance.now() - start
    currentY.value += config.step
    
    requestAnimationFrame(runStep)
  }

  requestAnimationFrame(runStep)
}

// 单画布对比逻辑：利用备份覆盖
const handleCompareStart = () => {
  // 从 Store 获取 initialData 塞入 Canvas
}

const handleCompareEnd = () => {
  // 将最后一次处理好的 processedData 塞回 Canvas
}

const handleReset = () => {
  currentY.value = 0
  isRunning.value = false
  // 恢复原图
}
</script>

<style scoped>
.pixel-control-panel {
  padding: 20px;
  background: var(--control-panel-bg-color);
  border-left: 1px solid #e0e0e0;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.status-card {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }
  .metrics {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 15px;
    font-family: 'Courier New', Courier, monospace;
    .highlight {
      color: #409eff;
      font-weight: bold;
    }
  }
}

.section-title {
  margin-bottom: 15px;
  padding-left: 10px;
  border-left: 4px solid #409eff;
}

.action-footer {
  margin-top: auto;
  padding-top: 20px;
}
</style>