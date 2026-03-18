/**
 * @Description: 图像色彩转换类型定义
 * @Author: 陈思宇
 * @Date: 2026-3-18 15:08:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-18 18:10:00
*/
export interface colorConversion{
  inputCanvas: HTMLCanvasElement | null,
  wasmTime: number,
  isRunning: boolean,
  currentY: number
}