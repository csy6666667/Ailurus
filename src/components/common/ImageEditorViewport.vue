<!--
* @FileDescription: 图片编辑视口组件
* @Author: 陈思宇
* @Date: 2026-03-14 21:11:00
* @LastEditors: 陈思宇
* @LastEditTime: 2026-03-15 14:52:00
-->
<template>
  <div class="viewport-container" v-show="hasImage">
    <div class="crop-box">
      <canvas 
        ref="canvasRef" 
        class="transform-canvas"
        :style="previewStyle"
      ></canvas>
    </div>
    
    <div class="guide-mask"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { usebaseTransformStore } from '@/store/picture/baseTransform';

const baseTransformStore = usebaseTransformStore();

const canvasRef = ref<HTMLCanvasElement | null>(null);

let  hasImage = ref<boolean>(false);

const renderToCanvas = (img: HTMLImageElement) => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.drawImage(img, 0, 0);

  const offscreenCanvas = document.createElement('canvas');
  offscreenCanvas.width = img.width;
  offscreenCanvas.height = img.height;
  const offCtx = offscreenCanvas.getContext('2d');
  offCtx?.drawImage(img, 0, 0);

  baseTransformStore.setInitialCanvas(offscreenCanvas);

  hasImage.value = true;
};

const previewStyle = computed(() => ({
  transform: `rotate(${baseTransformStore.angle}deg)`,
  transition: 'none',
  'will-change': 'transform' 
}));

defineExpose({
  renderToCanvas
})
</script>

<style scoped>
.viewport-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--viewpoint-container-bg-color);
  overflow: hidden;
}

.crop-box {
  position: relative;
  overflow: hidden; 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.guide-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 3;
}

.transform-canvas {
  max-width: 90vh;
  max-height: 90vh;
  image-rendering: high-quality;
}
</style>