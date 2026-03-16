/**
 * @Description: 图片形态特征分析页面组件
 * @Author: 陈思宇
 * @Date: 2026-03-12 21:49:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-16 21:25:00
 */
<template>
  <div class="morphology-panel">
    <Threshold />
    <Operator />
    <Kernel />
    <button @click="handleApply">应用效果</button>
    <PanelButton />
  </div>
</template>

<script setup lang="ts">
import PanelButton from '@/components/common/panelButton.vue';
import Kernel from './Kernel/Kernel.vue';
import Operator from './Operator/Operator.vue';
import Threshold from './Threshold/Threshold.vue';

const handleApply = () => {

}
</script>

<style scoped>
.morphology-panel{
  display: flex;
  flex-direction: column;
  padding: var(--panel-button-gap);
  gap: var(--operate-gap);
}
</style>