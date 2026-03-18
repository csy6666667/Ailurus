/**
 * @Description: 图像形态学处理类型定义
 * @Author: 陈思宇
 * @Date: 2026-3-16 19:38:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-18 19:52:00
*/
export interface morphology {
  operator: string,
  kernelSize: number,
  kernelShape: string,
  iterations: number,
  threshold: number, 
  outputCanvas: HTMLCanvasElement | null
}