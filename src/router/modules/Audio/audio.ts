/**
 * @Description: 音频处理路由
 * @Author: 陈思宇
 * @Date: 2026-03-11 19:49:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-11 20:32:00
 */
import type { RouteRecordRaw } from 'vue-router'
const audioRoutes: RouteRecordRaw[] = [
  {
    path: '/audio',
    name: 'audio',
    component: () => import('@/components/views/AudioProcess/index.vue')
  }
]

export default audioRoutes