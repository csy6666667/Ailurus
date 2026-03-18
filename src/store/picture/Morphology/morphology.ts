/**
 * @Description: 形态学处理状态
 * @Author: 陈思宇
 * @Date: 2026-3-14 15:20:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-18 19:52:00
*/
import { applyMorphologyEffect } from "@/components/utils/picture/morphology/morphology"
import type { morphology } from "@/types/picture/Morphology/morphology"
import { defineStore } from "pinia"
import { usePictureStore } from "../picture";

export const useMorphologyStore = defineStore('morphology', {
  state: (): morphology => ({
    operator: 'MORPH_ERODE',
    kernelSize: 3,
    kernelShape: 'MORPH_RECT', 
    iterations: 1,
    threshold: 127,
    outputCanvas: null as HTMLCanvasElement | null
  }),
  getters:{
    inputCanvas: () => {
      const pictureStore = usePictureStore();
      return pictureStore.inputCanvas;
    }
  },
  actions:{
    setOutputCanvas(canvas: HTMLCanvasElement | null){
      this.outputCanvas = canvas;
    },
    apply() {
      if (!this.inputCanvas || !this.outputCanvas) {
        console.warn("Canvas 尚未就绪");
        return;
      }
      applyMorphologyEffect(this.inputCanvas, this.outputCanvas, {
        operator: this.operator,
        kernelSize: this.kernelSize,
        kernelShape: this.kernelShape,
        iterations: this.iterations,
        threshold: this.threshold
      });
    }
  }
})