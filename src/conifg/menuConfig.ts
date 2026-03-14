/**
 * @Description: 侧边栏菜单配置
 * @Author: 陈思宇
 * @Date: 2026-3-14 14:51:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-13 12:12:00
*/
import { markRaw } from "vue"
import { Picture, Mic } from "@element-plus/icons-vue"

export interface MenuItem {
  title: string
  icon?: any
  routeName?: string
  depth: number,
  children?: MenuItem[]
}

export const sideBarMenu: MenuItem[] = [
  {
    title: '图像处理',
    icon: markRaw(Picture),
    depth: 1,
    children: [
      {
        title: '仿射变换',
        routeName: 'affineTransform',
        depth: 2,
        children: [
          { title: '基础变换', routeName: 'baseTransform', depth: 3 },
          { title: '高级几何', routeName: 'complexTransform', depth: 3 },
        ]
      },
      // {
      //   title: '形态学分析',
      //   depth: 2
      // }
    ]
  },
  {
    title: '音频处理',
    icon: markRaw(Mic),
    routeName: 'audio',
    depth: 1
  }
]