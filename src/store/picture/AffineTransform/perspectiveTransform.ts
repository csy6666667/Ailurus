import type { perspectiveTransform } from "@/types/picture/AffineTransform/perspectiveTransform";
import { defineStore } from "pinia";

/**
 * @Description: 透视变换状态
 * @Author: 陈思宇
 * @Date: 2026-3-14 15:20:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-16 15:36:00
*/
export const usePerspectiveTransformStore = defineStore('perspectiveTransform', {
  state: (): perspectiveTransform => ({
    corners: [
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0}
    ]
  }),
  actions:{
    updateCorner(index: number, X: number, Y: number){
      this.corners[index] = {x: X, y: Y};
    }
  }
})