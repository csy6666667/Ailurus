/**
 * @Description: 路由入口
 * @Author: 陈思宇
 * @Date: 2026-03-11 19:49:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-13 12:12:00
 */
import { createRouter, createWebHistory } from 'vue-router';
import pictureRoutes  from './modules/Picture/picture';
import audioRoutes  from './modules/Audio/audio';
import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Picture',
    redirect: '/picture/AffineTransform/baseTransform',
    children:[
      ...pictureRoutes,
      ...audioRoutes
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})  

export default router;