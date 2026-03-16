/**
 * @Description: 形态学处理路由
 * @Author: 陈思宇
 * @Date: 2026-03-16 16:15:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-16 16:49:00
 */
import type { RouteRecordRaw } from "vue-router";
import morphologyAnalysisRoutes from "./MorphologyAnalysis/morphologyAnalysis";


const morphologyRoutes: RouteRecordRaw[] = [
  {
    path: 'morphology',
    name: 'morphology',
    children: [
      ...morphologyAnalysisRoutes
    ],
    redirect: '/picture/morphology/analysis'
  }
]

export default morphologyRoutes