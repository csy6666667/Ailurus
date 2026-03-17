/**
 * @Description: 透视变换状态
 * @Author: 陈思宇
 * @Date: 2026-3-14 15:20:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-17 21:24:00
*/
import { applyPerspectiveEffect } from "@/components/utils/picture/affineTransform/perspectiveTransform/perspectiveTransform";
import type { perspectiveTransform } from "@/types/picture/AffineTransform/PerspectiveTransform/perspectiveTransform";
import { defineStore } from "pinia";
import { usePictureStore } from "../../picture";

export const usePerspectiveTransformStore = defineStore('perspectiveTransform', {
  state: (): perspectiveTransform => ({
    corners: [
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0}
    ],
    inputCanvas: null as HTMLCanvasElement | null,
    hasCorners: true
  }),
  getters:{
    baseRatio:() => {
      const pictureStore = usePictureStore();
      return pictureStore.baseRatio;
    },
    width:() => {
      const pictureStore = usePictureStore();
      return pictureStore.width
    },
    height:() => {
      const pictureStore = usePictureStore();
      return pictureStore.height
    }
  },
  actions:{
    setInputCanvas(canvas: HTMLCanvasElement | null){
      this.inputCanvas = canvas;
    },
    setHasCorners(val: boolean){
      this.hasCorners = val;
    },
    updateCorner(index: number, X: number, Y: number){
      this.corners[index] = {x: X, y: Y};
    },
    initPoints() {
      this.corners = [
        { x: 0, y: 0 },
        { x: this.width, y: 0 },
        { x: this.width, y: this.height },
        { x: 0, y: this.height }
      ];
    },
    reset(){
      this.hasCorners = true;
      this.initPoints();
    },
    apply(){
      if(!this.inputCanvas)return;
      const realCorners = this.corners.map(item => ({
        x: item.x / this.baseRatio,
        y: item.y / this.baseRatio
      }));
      applyPerspectiveEffect(
        this.inputCanvas,
        realCorners
      );
      this.setHasCorners(false);
    }
  }
})