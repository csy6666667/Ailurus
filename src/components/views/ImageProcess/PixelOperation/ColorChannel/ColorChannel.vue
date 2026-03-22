/**
 * @Description: 图片色彩通道页面组件
 * @Author: 陈思宇
 * @Date: 2026-03-18 20:25:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-18 20:33:00
 */
<template>
  <div class="channel-console">
    <h3 class="title">色彩通道控制</h3>

    <el-card class="box-card" shadow="never">
      <template #header>
        <div class="card-header"><span>通道开关</span></div>
      </template>
      <div class="switch-group">
        <div class="switch-item R">
          <span class="label">红色 (R)</span>
          <el-switch v-model="channels.r" active-color="#ff4949" @change="applyChanges" />
        </div>
        <div class="switch-item G">
          <span class="label">绿色 (G)</span>
          <el-switch v-model="channels.g" active-color="#13ce66" @change="applyChanges" />
        </div>
        <div class="switch-item B">
          <span class="label">蓝色 (B)</span>
          <el-switch v-model="channels.b" active-color="#1890ff" @change="applyChanges" />
        </div>
      </div>
    </el-card>

    <el-card class="box-card" shadow="never">
      <template #header>
        <div class="card-header"><span>特殊模式</span></div>
      </template>
      <div class="mode-group">
        <el-checkbox v-model="isGray" label="心理学灰度化 (Grayscale)" border @change="handleGrayChange" />
        <p class="hint">启用灰度将覆盖上方通道设置</p>
      </div>
    </el-card>

    <div class="actions">
      <el-button type="primary" :icon="MagicStick" @click="applyChanges" >
        应用更改
      </el-button>
      <el-button :icon="RefreshRight" @click="resetChannels">
        重置
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { MagicStick, RefreshRight } from '@element-plus/icons-vue';

const channels = reactive({
  r: true,
  g: true,
  b: true,
});

const isGray = ref(false);

const enableAllChannels = () => {
  channels.r = channels.g = channels.b = true;
};

const applyChanges = () => {
  // TODO: 集成 ColorChannel Store，调用 WASM 处理色彩通道
  console.log('applyChanges', { channels: { ...channels }, isGray: isGray.value });
};

const handleGrayChange = () => {
  if (isGray.value) {
    enableAllChannels();
  }
  applyChanges();
};

const resetChannels = () => {
  enableAllChannels();
  isGray.value = false;
  applyChanges();
};
</script>

<style scoped>
.channel-console {
  padding: var(--operate-padding);
  display: flex;
  flex-direction: column;
  gap: var(--operate-gap);
  color: #fff;
}

.title {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
}

.box-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
}

:deep(.el-card__header) {
  padding: 10px 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

:deep(.el-card__body) {
  padding: 15px;
}

.switch-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.switch-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.switch-item.R .label { color: #ff6b6b; }
.switch-item.G .label { color: #51cf66; }
.switch-item.B .label { color: #339af0; }

.mode-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

:deep(.el-checkbox.is-bordered.is-checked) {
  border-color: #409eff;
}

.mode-group :deep(.el-checkbox__label) {
  color: #fff;
}

.hint {
  font-size: 12px;
  color: #909399;
  margin: 0;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
</style>