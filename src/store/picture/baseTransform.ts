/**
 * @Description: 基础变换状态
 * @Author: 陈思宇
 * @Date: 2026-3-14 15:20:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-14 20:38:00
*/
import { defineStore } from "pinia";
import { markRaw } from "vue";
import type { baseTransform } from "@/types/picture/baseTransform"; 
import { rotateImage } from '@/components/utils/picture/baseTransform/rotate';


export const usebaseTransformStore = defineStore('baseTransform',{
  state: (): baseTransform => ({
    angle: 0,
    initialCanvas: null as HTMLCanvasElement | null,
    currentCanvas: null as HTMLCanvasElement | null
  }),
  actions: {
    setInitialCanvas(canvas: HTMLCanvasElement){
      this.initialCanvas = markRaw(canvas);
    },
    setCurrentCanvas(canvas: HTMLCanvasElement){
      this.currentCanvas = markRaw(canvas);
    },
    reset(){
      this.angle = 0;
    },
    download() {
      if (this.initialCanvas) {
        const tempCanvas = document.createElement('canvas');
        
        rotateImage(this.initialCanvas, tempCanvas, { angle: -this.angle });
        
        tempCanvas.toBlob((blob) => {
          if (!blob) {
            console.error('图片生成失败');
            return;
          }

          const url = URL.createObjectURL(blob);
          
          const link = document.createElement('a');
          link.download = `rotated_${this.angle}.png`;
          link.href = url;
          link.click();

          setTimeout(() => URL.revokeObjectURL(url), 1000);
          
          tempCanvas.remove();
        }, 'image/png', 1.0); 
      }
    }
  }
})
