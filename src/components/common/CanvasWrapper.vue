<!--
* @FileDescription: 画布组件
* @Author: 陈思宇
* @Date: 2026-03-12 19:58:00
* @LastEditors: 陈思宇
* @LastEditTime: 2026-03-15 14:51:00
-->
<template>
  <div class="canvas-wrapper">
    <input 
      type="file"
      ref="fileInput"
      accept="image/*"
      @change="onFileSelected"
      style="display: none;"
    />
    <div v-show="!hasImage" class="preview-stage" @click="triggerFileInput">
      <div class="upload-placeholder">
        <el-icon class="upload-icon">
          <component :is="Upload" />
        </el-icon>
        <p class="upload-hint">点击上传图片</p>
      </div>
    </div>
    <image-editor-viewport ref="viewport"/>
  </div>
</template>

<script setup lang="ts">
import { Upload } from '@element-plus/icons-vue'
import { ref } from 'vue'
import ImageEditorViewport from './ImageEditorViewport.vue';

let hasImage = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);
const viewport = ref<InstanceType<typeof ImageEditorViewport> | null>(null);

const onFileSelected = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0];

  if(!file) return;

  const reader = new FileReader();

  reader.onload = (e) => {
    const imageDataUrl = e.target?.result as string;
    
    const img =new Image();
    img.onload = () => {
      viewport.value?.renderToCanvas(img);
      hasImage.value = true;
    }
    img.src = imageDataUrl;
  }

  reader.readAsDataURL(file);
}

const triggerFileInput = () => {
  fileInput.value?.click();
}
</script>

<style scoped>
.canvas-wrapper {
  max-height: 100%;
  padding: var(--canvas-wrapper-padding);
  margin: var(--canvas-wrapper-margin);
  background-color: var(--canvas-wrapper-bg-color);
  border-radius: var(--canvas-wrapper-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--canvas-wrapper-shadow);
}
.preview-stage{
  height: var(--preview-stage-h);
  border: var(--preview-stage-border);
  border-radius:  var(--preview-stage-radius);
  display: flex;
  justify-content: center;
  flex: 1;
  background-color: var(--preview-stage-bg-color);
}
.preview-stage:hover{
  border-color: var(--preview-stage-hover-border-color);
  background-color: var(--preview-stage-hover-bg-color);
}
.upload-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--upload-placeholder-gap);
  color: var(--upload-placeholder-color);
}
.upload-icon{
  color: var(--upload-icon-color);
  font-size: var(--upload-icon-fs);
}
.upload-hint {
  font-weight: var(--upload-hint-fw);
  letter-spacing: var(--upload-hint-letter-spacing);
}

.canvas{
  max-width: 90%;
  max-height:90%;
  image-rendering: pixelated;
  box-shadow: var(--canvas-shadow);
  background-color: var(--canvas-bg-color);
}
</style>