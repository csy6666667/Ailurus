<template>
  <div class="morphology-panel">
    <Threshold />
    <Operator />
    <Kernel />
    <button>应用效果</button>
    <PanelButton />
  </div>
</template>

<script setup lang="ts">
import PanelButton from '@/components/common/panelButton.vue';
import Kernel from './Kernel/Kernel.vue';
import Operator from './Operator/Operator.vue';
import Threshold from './Threshold/Threshold.vue';
</script>

<style scoped>
.morphology-panel{
  display: flex;
  flex-direction: column;
  padding: var(--panel-button-gap);
  gap: var(--operate-gap);
}
</style>