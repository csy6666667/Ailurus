/**
 * @Description: 图片仿射变换路由
 * @Author: 陈思宇
 * @Date: 2026-03-11 19:49:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-16 16:49:00
 */
import type { RouteRecordRaw } from 'vue-router'
import baseTransformRoutes from './BaseTransform/baseTransfrom'

const affineTransformRoutes: RouteRecordRaw[] = [
  {
    path: 'affineTransform',
    name: 'affineTransform',
    redirect: '/picture/affineTransform/baseTransform',
    children: [
      ...baseTransformRoutes,
    ]
  }
]

export default affineTransformRoutes