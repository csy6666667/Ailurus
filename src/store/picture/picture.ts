/**
 * @Description: 图像状态
 * @Author: 陈思宇
 * @Date: 2026-3-17 19:55:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-17 20:12:00
*/
import type { picture } from "@/types/picture/picture";
import { defineStore } from "pinia";

export const usePictureStore = defineStore('picture', {
  state: ():picture => ({
    baseRatio: 1
  }),
  actions: {
    setBaseRatio(baseRatio: number){
      this.baseRatio = baseRatio;
    }
  }
})