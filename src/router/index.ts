/**
 * @Description: 路由入口
 * @Author: 陈思宇
 * @Date: 2026-03-11 19:49:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-11 20:32:00
 */
import { createRouter, createWebHistory } from 'vue-router';
import pictureRoutes  from './modules/picture';
import audioRoutes  from './modules/audio';
import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Picture',
    redirect: '/picture',
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