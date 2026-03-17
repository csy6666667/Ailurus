<!--
* @FileDescription: 仿射变换画布组件
* @Author: 陈思宇
* @Date: 2026-03-12 19:58:00
* @LastEditors: 陈思宇
* @LastEditTime: 2026-03-17 21:24:00
-->
<template>
  <div class="workplace">
    <CanvasWrapper v-model:has-image="isloaded" @update:has-image="handleUpload" ref="inputCanvas" @ready = "onCanvasReady">
      <template #overlay>
        <router-view name="canvasOverlay"/>
      </template>
    </CanvasWrapper>
  </div>
</template>

<script setup lang="ts">
import CanvasWrapper from '@/components/common/CanvasWrapper.vue';
import { ref } from 'vue';
import { usePerspectiveTransformStore } from '@/store/picture/AffineTransform/PerspectiveTransform/perspectiveTransform';
import { usePictureStore } from '@/store/picture/picture';

const perspectiveTransformStore = usePerspectiveTransformStore();
const pictureStore = usePictureStore();
let isloaded = ref<boolean>(false);

const inputCanvas = ref<InstanceType<typeof CanvasWrapper> | null>(null);

const handleUpload = (val: boolean) => {
  if(!val) return;
  isloaded.value = true;
  let canvas = inputCanvas.value?.getCanvas();
  if(canvas)
    perspectiveTransformStore.setInputCanvas(canvas);
}

const onCanvasReady = (data: {visualWidth: number, visualHeight: number, baseRatio: number}) => {
  pictureStore.setSize(data.visualWidth, data.visualHeight);
  pictureStore.setBaseRatio(data.baseRatio);
  perspectiveTransformStore.initPoints();
}
</script>

<style scoped>
.workplace{
  width: 100%;
  height: 100%;
  background-image: radial-gradient(#2d1610 1px, transparent 1px);
  background-size: 20px 20px; 
  background-color: #1a0d0a;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>