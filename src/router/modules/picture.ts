/**
 * @Description: 图片管理路由
 * @Author: 陈思宇
 * @Date: 2026-03-11 19:49:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-11 20:32:00
 */
import type { RouteRecordRaw } from 'vue-router'
const pictureRoutes: RouteRecordRaw[] = [
  {
    path: '/picture',
    name: 'picture',
    component: () => import('@/components/views/ImageProcess/index.vue')
  }
]

export default pictureRoutes