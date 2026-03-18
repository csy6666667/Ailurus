/**
 * @Description: 图像类型定义
 * @Author: 陈思宇
 * @Date: 2026-3-17 19:55:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-18 19:52:00
*/
export interface picture{
  baseRatio: number,
  width: number,
  height: number,
  inputCanvas: HTMLCanvasElement | null
}