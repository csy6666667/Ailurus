/**
 * @Description: 图片管理路由
 * @Author: 陈思宇
 * @Date: 2026-03-11 19:49:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-18 14:34:00
 */
import type { RouteRecordRaw } from 'vue-router'
import affineTransformRoutes from './AffineTransform/affineTransform';
import morphologyRoutes from './Morphology/morphology';
import pixelOperationRoutes from './PixelOperation/pixelOperation';

const pictureRoutes: RouteRecordRaw[] = [
  {
    path: '/picture',
    redirect: '/picture/pixelOperation',
    children: [
      ...affineTransformRoutes,
      ...morphologyRoutes,
      ...pixelOperationRoutes
    ]
  }
]

export default pictureRoutes