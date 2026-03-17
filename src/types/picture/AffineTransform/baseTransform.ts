/**
 * @Description: 图像基础变换类型定义
 * @Author: 陈思宇
 * @Date: 2026-3-14 15:30:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-16 15:36:00
*/
export interface baseTransform {
  angle: number,
  scale: number,
  translateX: number,
  translateY: number,
  baseRatio: number,
  initialCanvas: HTMLCanvasElement | null
}