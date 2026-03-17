/**
 * @Description: 图片透视变换画布坐标组件
 * @Author: 陈思宇
 * @Date: 2026-03-17 16:04:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-17 21:24:00
 */
<template>
  <svg class="perspective-svg" width="100%" height="100%" v-if="perspectiveTransformStore.hasCorners">
    <polygon 
      :points="pointsString" 
      class="guideline"
    />
    
    <g 
      v-for="(point, index) in perspectiveTransformStore.corners" 
      :key="index"
      class="anchor-group"
      @mousedown="handleDragStart($event, index)"
    >
      <circle 
        :cx="point.x" 
        :cy="point.y" 
        r="8" 
        class="anchor-circle"
      />
      <text :x="point.x + 12" :y="point.y - 12" class="anchor-text">
        {{ index + 1 }}
      </text>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePerspectiveTransformStore } from '@/store/picture/AffineTransform/PerspectiveTransform/perspectiveTransform';

const perspectiveTransformStore = usePerspectiveTransformStore();

const pointsString = computed(() => {
  return perspectiveTransformStore.corners.map(p => `${p.x},${p.y}`).join(' ');
});

const handleDragStart = (e: MouseEvent, index: number) => {
  const startX = e.clientX;
  const startY = e.clientY;
  const originalPoint = { ...perspectiveTransformStore.corners[index] };

  const svgEl = (e.currentTarget as HTMLElement).closest('svg');
  if (!svgEl) return;
  const rect = svgEl.getBoundingClientRect();

  const onMouseMove = (moveEvent: MouseEvent) => {
    const dx = moveEvent.clientX - startX;
    const dy = moveEvent.clientY - startY;

    if(originalPoint.x !== undefined && originalPoint.y !== undefined){
      let nextX = originalPoint.x + dx;
      let nextY = originalPoint.y + dy;

      nextX = Math.max(0, Math.min(nextX, rect.width));
      nextY = Math.max(0, Math.min(nextY, rect.height));

      perspectiveTransformStore.updateCorner(index, nextX, nextY);
    }
  };

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
};
</script>

<style scoped>
.perspective-svg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  overflow: visible;
  pointer-events: none; 
}

.guideline {
  fill: rgba(64, 158, 255, 0.2);
  stroke: #409eff;
  stroke-width: 2;
  stroke-dasharray: 5, 5;
}

.anchor-group {
  cursor: crosshair;
  pointer-events: auto;
}

.anchor-circle {
  fill: #fff;
  stroke: #409eff;
  stroke-width: 3;
  transition: r 0.2s;
}

.anchor-circle:hover {
  r: 10;
  fill: #409eff;
}

.anchor-text {
  fill: #fff;
  font-size: 12px;
  user-select: none;
  text-shadow: 0 0 2px #000;
}
</style>