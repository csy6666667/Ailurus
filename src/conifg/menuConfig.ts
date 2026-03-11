/**
 * @Description: 侧边栏菜单配置
 * @Author: 陈思宇
 * @Date: 2026-3-11 15:53:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-11 19:35:00
*/
import { markRaw } from "vue"
import { Picture, Document } from "@element-plus/icons-vue"

export interface MenuItem {
  title: string
  icon: any
}

export const sideBarMenu: MenuItem[] = [
  {
    title: '图像处理',
    icon: markRaw(Picture)
  },
  {
    title: '文档',
    icon: markRaw(Document)
  }
]