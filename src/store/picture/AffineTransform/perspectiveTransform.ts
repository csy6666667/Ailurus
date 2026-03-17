/**
 * @Description: 透视变换状态
 * @Author: 陈思宇
 * @Date: 2026-3-14 15:20:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-17 19:34:00
*/
import { applyPerspectiveEffect } from "@/components/utils/picture/affineTransform/perspectiveTransform/perspectiveTransform";
import type { perspectiveTransform } from "@/types/picture/AffineTransform/perspectiveTransform";
import { defineStore } from "pinia";

export const usePerspectiveTransformStore = defineStore('perspectiveTransform', {
  state: (): perspectiveTransform => ({
    corners: [
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0}
    ],
    inputCanvas: null as HTMLCanvasElement | null
  }),
  actions:{
    setInputCanvas(canvas: HTMLCanvasElement | null){
      this.inputCanvas = canvas;
    },
    updateCorner(index: number, X: number, Y: number){
      this.corners[index] = {x: X, y: Y};
    },
    initPoints(width: number, height: number) {
      const padding = 50;
      this.corners = [
        { x: padding, y: padding },
        { x: width - padding, y: padding },
        { x: width - padding, y: height - padding },
        { x: padding, y: height - padding }
      ];
    },
    apply(){
      if(!this.inputCanvas)return;
      applyPerspectiveEffect(
        this.inputCanvas,
        this.corners
      )
    }
  }
})