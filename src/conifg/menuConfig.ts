/**
 * @Description: 侧边栏菜单配置
 * @Author: 陈思宇
 * @Date: 2026-3-11 15:53:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-11 20:32:00
*/
import { markRaw } from "vue"
import { Picture, Mic } from "@element-plus/icons-vue"

export interface MenuItem {
  title: string
  icon: any
  routeName: string
}

export const sideBarMenu: MenuItem[] = [
  {
    title: '图像处理',
    icon: markRaw(Picture),
    routeName: 'picture'
  },
  {
    title: '音频处理',
    icon: markRaw(Mic),
    routeName: 'audio'
  }
]