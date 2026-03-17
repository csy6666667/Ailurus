/**
 * @Description: 基础变换状态
 * @Author: 陈思宇
 * @Date: 2026-3-14 15:20:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-1 719:34:00
*/
import { defineStore } from "pinia";
import { markRaw } from "vue";
import type { baseTransform } from "@/types/picture/AffineTransform/baseTransform"; 
import { rotateImage } from '@/components/utils/picture/affineTransform/baseTransform/rotate';
import { scaleImage } from "@/components/utils/picture/affineTransform/baseTransform/scale";
import { translateImage } from "@/components/utils/picture/affineTransform/baseTransform/translate";

export const usebaseTransformStore = defineStore('baseTransform',{
  state: (): baseTransform => ({
    angle: 0,
    scale: 1,
    translateX: 0,
    translateY: 0,
    baseRatio: 1,
    initialCanvas: null as HTMLCanvasElement | null,
  }),
  actions: {
    setInitialCanvas(canvas: HTMLCanvasElement){
      this.initialCanvas = markRaw(canvas);
    },
    setBaseRatio(baseRatio: number){
      this.baseRatio = baseRatio;
    },
    reset(){
      this.angle = 0;
      this.scale = 1;
      this.translateX = 0;
      this.translateY = 0;
      this.baseRatio = 1;
    },
    download() {
      if (this.initialCanvas) {
        const tempCanvas = document.createElement('canvas');

        translateImage(this.initialCanvas, tempCanvas, { tx: this.translateX / this.baseRatio, ty: this.translateY / this.baseRatio});
        rotateImage(tempCanvas, tempCanvas, { angle: -this.angle });
        scaleImage(tempCanvas, tempCanvas, { scale: this.scale });

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
