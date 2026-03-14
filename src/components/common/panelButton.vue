<!--
* @FileDescription: 工作台复用按钮组件
* @Author: 陈思宇
* @Date: 2026-03-14 19:00:00
* @LastEditors: 陈思宇
* @LastEditTime: 2026-03-14 20:38:00
-->
<template>
  <div class="panel-button">
    <el-button
      type="primary"
      @click="handleDownload"
      class="download-btn"
    >
      <el-icon><Download /></el-icon>
      下载
    </el-button>
    <el-button
      type="warning"
      @click="handleReset"
      class="reset-btn"
    >
      <el-icon><Refresh /></el-icon>
      重置
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { Download, Refresh } from '@element-plus/icons-vue';

const emit = defineEmits<{
  download: [];
  reset: [];
}>();

const handleDownload = () => {
  emit('download');
};

const handleReset = () => {
  emit('reset');
};
</script>

<style scoped>
.panel-button {
  padding: var(--panel-button-padding);
  display: flex;
  gap: var(--panel-button-gap);
  align-items: center;
}

.download-btn {
  background-color: var(--drop-down-item-1-bg-color);
  border-color: var(--drop-down-item-1-bg-color);
  color: var(--white);
  flex: 1;
}

.download-btn:hover {
  background-color: var(--download-btn-hover-bg-color);
  border-color: var(--download-btn-hover-border-color);
}

.reset-btn {
  background-color: var(--drop-down-item-2-bg-color);
  border-color: var(--drop-down-item-2-bg-color);
  color: var(--drop-down-item-2-color);
  flex: 1;
}

.reset-btn:hover {
  background-color: var(--reset-btn-hover-bg-color);
  border-color: var(--reset-btn-hover-border-color);
}
</style>
