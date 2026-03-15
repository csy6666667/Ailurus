/**
 * @Description: 图片旋转页面组件
 * @Author: 陈思宇
 * @Date: 2026-03-12 21:49:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-15 15:29:00
 */
<template>
  <div class="base-transform">
    <RotateModule />
    <ScaleModule />
    <PanelButton @download="handleDownload" @reset="handleReset" />
  </div>
</template>
<script setup lang="ts">
import PanelButton from '@/components/common/panelButton.vue';
import RotateModule from './RotateModule/RotateModule.vue';
import ScaleModule from './ScaleModule/ScaleModule.vue';
import { usebaseTransformStore } from '@/store/picture/baseTransform';

const baseTransformStore = usebaseTransformStore();

const handleDownload = () => {
  baseTransformStore.download();
};

const handleReset = () => {
  baseTransformStore.reset();
};
</script>

<style scoped>
.base-transform{
  display: flex;
  flex-direction: column;
  gap: var(--operate-gap);
  padding: var(--operate-padding);
}
</style>