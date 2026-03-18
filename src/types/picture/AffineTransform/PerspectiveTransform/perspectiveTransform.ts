/**
 * @Description: 图像透视变换类型定义
 * @Author: 陈思宇
 * @Date: 2026-3-17 16:11:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-18 19:52:00
*/
interface point{
  x: number,
  y: number,
}
export interface perspectiveTransform{
  corners: point[],
  hasCorners: boolean
}