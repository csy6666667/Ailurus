/**
 * @Description: 图像色彩通道状态
 * @Author: 陈思宇
 * @Date: 2026-3-18 20:25:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-18 20:33:00
*/
import type { RouteRecordRaw } from "vue-router";

const colorChannelRoutes: RouteRecordRaw[] = [
  {
    path: 'colorChannel',
    name: 'colorChannel',
    components:{
      viewport: () => import("@/components/views/ImageProcess/PixelOperation/index.vue"),
      console: () => import("@/components/views/ImageProcess/PixelOperation/ColorChannel/ColorChannel.vue")
    }
  }
]

export default colorChannelRoutes