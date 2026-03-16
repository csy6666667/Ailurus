/**
 * @Description: 形态学处理状态
 * @Author: 陈思宇
 * @Date: 2026-3-14 15:20:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-16 21:25:00
*/
import type { morphology } from "@/types/picture/morphology"
import { defineStore } from "pinia"

export const useMorphologyStore = defineStore('morphology', {
  state: (): morphology => ({
    operator: 'MORPH_ERODE',
    kernelSize: 3,
    kernelShape: 'MORPH_RECT', 
    iterations: 1,
    threshold: 127,
    inputCanvas: null as HTMLCanvasElement | null,
    outputCanvas: null as HTMLCanvasElement | null
  }),
  actions:{
    setOutputCanvas(canvas: HTMLCanvasElement | null){
      this.outputCanvas = canvas;
    },
    setInputCanvas(canvas: HTMLCanvasElement | null){
      this.inputCanvas = canvas;
    }
  }
})