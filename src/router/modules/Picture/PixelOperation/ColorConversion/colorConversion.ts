/**
 * @Description: 色彩转换路由
 * @Author: 陈思宇
 * @Date: 2026-03-18 14:22:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-18 20:33:00
 */
import type { RouteRecordRaw } from "vue-router";

const colorConversionRoutes: RouteRecordRaw[] = [
  {
    path: 'colorConversion',
    name: 'colorConversion',
    components:{
      viewport: () => import("@/components/views/ImageProcess/PixelOperation/index.vue"),
      console: () => import("@/components/views/ImageProcess/PixelOperation/ColorConversion/index.vue")
    }
  }
] 

export default colorConversionRoutes