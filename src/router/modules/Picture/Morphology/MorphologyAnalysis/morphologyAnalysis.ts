/**
 * @Description: 形态学特征分析路由
 * @Author: 陈思宇
 * @Date: 2026-03-16 16:15:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-16 16:49:00
 */

import type { RouteRecordRaw } from "vue-router";

const morphologyAnalysisRoutes: RouteRecordRaw[] = [
  {
    path: 'analysis',
    name: 'morphologyAnalysis',
    components: {
      viewport: () => import("@/components/views/ImageProcess/Morphology/index.vue"),
      console: () => import("@/components/views/ImageProcess/Morphology/MorphologyAnalysis/index.vue")
    },
  }
]

export default morphologyAnalysisRoutes;