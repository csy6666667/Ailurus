/**
 * @Description: 图片仿射变换路由
 * @Author: 陈思宇
 * @Date: 2026-03-17 10:05:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-17 10:55:00
 */
import type { RouteRecordRaw } from 'vue-router'
import baseTransformRoutes from './BaseTransform/baseTransfrom'
import perspectiveTransformRoutes from './PerspectiveTransform/perspectiveTransform'

const affineTransformRoutes: RouteRecordRaw[] = [
  {
    path: 'affineTransform',
    name: 'affineTransform',
    redirect: '/picture/affineTransform/baseTransform',
    children: [
      ...baseTransformRoutes,
      ...perspectiveTransformRoutes
    ]
  }
]

export default affineTransformRoutes