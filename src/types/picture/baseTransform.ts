/**
 * @Description: 图像基础变换类型定义
 * @Author: 陈思宇
 * @Date: 2026-3-14 15:30:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-14 20:38:00
*/
export interface baseTransform {
  angle: number,
  initialCanvas: HTMLCanvasElement | null,
  currentCanvas: HTMLCanvasElement | null
}