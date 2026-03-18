/**
 * @Description: 图像色彩转换状态
 * @Author: 陈思宇
 * @Date: 2026-3-18 15:08:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-18 18:10:00
*/
import type { colorConversion } from "@/types/picture/PixelOperation/ColorConversion/colorConversion";
import type { config } from "@/types/picture/PixelOperation/ColorConversion/config";
import { defineStore } from "pinia";

export const useColorConversionStore = defineStore('colorConversion', {
  state: (): colorConversion => ({
    inputCanvas: null as HTMLCanvasElement | null,
    wasmTime: 0,
    currentY: 0,
    isRunning: false
  }),
  actions:{
    setInputCanvas(canvas: HTMLCanvasElement | null){
      this.inputCanvas = canvas;
    },
    async apply(config: config){
      if (!this.inputCanvas) return;

      const canvas = this.inputCanvas;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      this.isRunning = true;
      this.currentY = 0;

      const width = canvas.width;
      const height =canvas.height
      const bytesPerRow = width * 4;
      const imageData = ctx.getImageData(0, 0, width, height);

      const runStep = () => {
        if (this.currentY >= height) {
          this.isRunning = false;
          return;
        }

        const startPerf = performance.now();

        const startByte = this.currentY * bytesPerRow;
        let endByte = (this.currentY + config.step) * bytesPerRow;

        if (endByte > imageData.data.length) endByte = imageData.data.length;

        (window as any).__wasm_grayScale(imageData.data, startByte, endByte);

        ctx.putImageData(
          imageData, 
          0, 
          0, 
          0, 
          Math.floor(this.currentY),
          Math.floor(width), 
          Math.floor(config.step)
        );
        this.wasmTime = performance.now() - startPerf;
      
        this.currentY += config.step;

        if (this.isRunning) {
          requestAnimationFrame(runStep);
        }
      };
      requestAnimationFrame(runStep);
    }
  }
})