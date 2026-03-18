/**
 * @Description: 像素处理路由
 * @Author: 陈思宇
 * @Date: 2026-03-18 14:22:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-18 14:34:00
 */

import type { RouteRecordRaw } from "vue-router";
import colorConversionRoutes from "./ColorConversion/colorConversion";

const pixelOperationRoutes: RouteRecordRaw[] = [
  {
    path: 'pixelOperation',
    name: 'pixelOperation',
    children: [
      ...colorConversionRoutes
    ],
    redirect: '/picture/pixelOperation/colorConversion'
  }
]

export default pixelOperationRoutes