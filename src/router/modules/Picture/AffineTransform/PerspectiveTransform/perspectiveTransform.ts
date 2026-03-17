/**
 * @Description: 图片透视变换路由
 * @Author: 陈思宇
 * @Date: 2026-03-17 10:36:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-17 10:55:00
 */

import type { RouteRecordRaw } from "vue-router";

const perspectiveTransformRoutes: RouteRecordRaw[] = [
  {
    path: 'perspectiveTransform',
    name: 'perspectiveTransform',
    components: {
      viewport: () => import("@/components/views/ImageProcess/AffineTransform/index.vue"),
      console: () => import("@/components/views/ImageProcess/AffineTransform/PerspectiveTransform/index.vue")
    }
  }
]

export default perspectiveTransformRoutes