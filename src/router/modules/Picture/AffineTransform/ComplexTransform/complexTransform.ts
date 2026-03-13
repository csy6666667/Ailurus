/**
 * @Description: 图片基础变换路由
 * @Author: 陈思宇
 * @Date: 2026-03-12 18:54:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-13 12:12:00
 */
import type { RouteRecordRaw } from 'vue-router'

const complexTransformRoutes: RouteRecordRaw[] = [
  {
    path: 'complexTransform',
    name: 'complexTransform',
    component: () => import('@//components/views/ImageProcess/AffineTransform/ComplexTransform/index.vue')
  }
]

export default complexTransformRoutes
