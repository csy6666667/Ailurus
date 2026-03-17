/**
 * @Description: 图像状态
 * @Author: 陈思宇
 * @Date: 2026-3-17 19:55:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-17 21:24:00
*/
import type { picture } from "@/types/picture/picture";
import { defineStore } from "pinia";

export const usePictureStore = defineStore('picture', {
  state: ():picture => ({
    baseRatio: 1,
    width: 0,
    height: 0
  }),
  actions: {
    setBaseRatio(baseRatio: number){
      this.baseRatio = baseRatio;
    },
    setSize(width: number, height: number){
      this.width = width;
      this.height = height;
    }
  }
})