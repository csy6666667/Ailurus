/**
 * @Description: 图片基础变换路由
 * @Author: 陈思宇
 * @Date: 2026-03-11 19:49:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-13 12:12:00
 */
import type { RouteRecordRaw } from 'vue-router'
import baseTransformRoutes from './BaseTransform/baseTransfrom'
import complexTransformRoutes from './ComplexTransform/complexTransform'

const affineTransformRoutes: RouteRecordRaw[] = [
  {
    path: 'affineTransform',
    name: 'affineTransform',
    redirect: '/affineTransform/baseTransform',
    children: [
      ...baseTransformRoutes,
      ...complexTransformRoutes
    ]
  }
]

export default affineTransformRoutes