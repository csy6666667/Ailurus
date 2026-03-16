/**
 * @Description: 图片基础变换路由
 * @Author: 陈思宇
 * @Date: 2026-03-12 18:54:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-16 16:49:00
 */
import type { RouteRecordRaw } from 'vue-router'

const baseTransformRoutes: RouteRecordRaw[] = [
  {
    path: 'baseTransform',
    name: 'baseTransform',
    components: {
      viewport: () => import('@/components/views/ImageProcess/AffineTransform/index.vue'),
      console: () => import('@/components/views/ImageProcess/AffineTransform/BaseTransform/index.vue')
    },
  }
]

export default baseTransformRoutes