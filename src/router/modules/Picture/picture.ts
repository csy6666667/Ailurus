/**
 * @Description: 图片管理路由
 * @Author: 陈思宇
 * @Date: 2026-03-11 19:49:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-16 16:49:00
 */
import type { RouteRecordRaw } from 'vue-router'
import affineTransformRoutes from './AffineTransform/affineTransform';
import morphologyRoutes from './Morphology/morphology';

const pictureRoutes: RouteRecordRaw[] = [
  {
    path: '/picture',
    redirect: '/picture/affineTransform',
    children: [
      ...affineTransformRoutes,
      ...morphologyRoutes
    ]
  }
]

export default pictureRoutes