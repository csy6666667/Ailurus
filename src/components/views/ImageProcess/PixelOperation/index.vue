/**
 * @Description: 图片像素处理页面组件
 * @Author: 陈思宇
 * @Date: 2026-03-18 14:24:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-18 14:34:00
 */
 <template>
  <div class="workplace">
    <canvas-wrapper v-model:has-image="isloaded" @update:has-image="handleUpload" ref="inputCanvas"/>
  </div>
 </template>
 
 <script setup lang="ts">
import CanvasWrapper from '@/components/common/CanvasWrapper.vue';
import { ref } from 'vue';

let isloaded = ref<boolean>(false);

function handleUpload(){

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