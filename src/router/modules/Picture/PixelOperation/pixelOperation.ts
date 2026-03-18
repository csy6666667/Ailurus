/**
 * @Description: 像素处理路由
 * @Author: 陈思宇
 * @Date: 2026-03-18 14:22:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-18 20:33:00
 */

import type { RouteRecordRaw } from "vue-router";
import colorConversionRoutes from "./ColorConversion/colorConversion";
import colorChannelRoutes from "./ColorChannel/colorChannel";

const pixelOperationRoutes: RouteRecordRaw[] = [
  {
    path: 'pixelOperation',
    name: 'pixelOperation',
    children: [
      ...colorConversionRoutes,
      ...colorChannelRoutes
    ],
    redirect: '/picture/pixelOperation/colorConversion'
  }
]

export default pixelOperationRoutes