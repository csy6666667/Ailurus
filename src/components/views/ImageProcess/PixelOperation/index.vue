/**
 * @Description: 图片像素处理页面组件
 * @Author: 陈思宇
 * @Date: 2026-03-18 14:24:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-18 18:10:00
 */
 <template>
  <div class="workplace">
    <canvas-wrapper v-model:has-image="isloaded" @update:has-image="handleUpload" ref="inputCanvas" @ready = "onCanvasReady"/>
  </div>
 </template>
 
 <script setup lang="ts">
import CanvasWrapper from '@/components/common/CanvasWrapper.vue';
import { useColorConversionStore } from '@/store/picture/PixelOperation/ColorConversion.ts/colorConversion';
import { usePictureStore } from '@/store/picture/picture';
import { ref } from 'vue';

const colorConversionStore = useColorConversionStore();
const pictureStore = usePictureStore();

let isloaded = ref<boolean>(false);

const inputCanvas = ref<InstanceType<typeof CanvasWrapper> | null>(null);
function handleUpload(val: boolean){
  if(!val) return;
  isloaded.value = true;
  let canvas = inputCanvas.value?.getCanvas();
  if(canvas)
    colorConversionStore.setInputCanvas(canvas);
}

const onCanvasReady = (data: {visualWidth: number, visualHeight: number, baseRatio: number}) => {
  pictureStore.setSize(data.visualWidth, data.visualHeight);
  pictureStore.setBaseRatio(data.baseRatio);
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