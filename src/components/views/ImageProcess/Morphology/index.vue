<!--
* @FileDescription: 形态学处理画布组件
* @Author: 陈思宇
* @Date: 2026-03-16 16:21:00
* @LastEditors: 陈思宇
* @LastEditTime: 2026-03-16 21:25:00
-->
<template>
  <div class="workplace">
    <canvas-wrapper v-model:has-image="isloaded" @update:has-image="handleUpload" ref="inputCanvas"/>
    <canvas-wrapper :has-image = "isloaded" ref="outputCanvas"/>
  </div>
</template>

<script setup lang="ts">
import CanvasWrapper from '@/components/common/CanvasWrapper.vue';
import { nextTick, ref } from 'vue';
import { useMorphologyStore } from '@/store/picture/morphology';

const morphology = useMorphologyStore();

let isloaded = ref<boolean>(false);

const inputCanvas = ref<InstanceType<typeof CanvasWrapper> | null>(null);
const outputCanvas = ref<InstanceType<typeof CanvasWrapper> | null>(null);

const handleUpload = async (val: boolean) => {
  isloaded.value = val;

  if(val){
    await nextTick();
  }
  let canvas = inputCanvas.value?.getCanvas();
  if(canvas)
    morphology.setInputCanvas(canvas);
  canvas = outputCanvas.value?.getCanvas();
  if(canvas)
    morphology.setOutputCanvas(canvas);
}
</script>

<style scoped>
.workplace{
  width: 100%;
  height: 100%;
  background-image: radial-gradient(#2d1610 1px, transparent 1px);
  background-size: 20px 20px; /* 暗平铺格纹 */
  background-color: #1a0d0a;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>