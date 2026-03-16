/**
 * @Description: 侧边栏菜单配置
 * @Author: 陈思宇
 * @Date: 2026-3-14 14:51:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-16 16:49:00
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
        ]
      },
      {
        title: '形态学处理',
        routeName: 'morphology',
        depth: 2,
        children: [
          { title: '形状特征分析', routeName: 'morphologyAnalysis', depth: 3},
        ]
      }
    ]
  },
  {
    title: '音频处理',
    icon: markRaw(Mic),
    routeName: 'audio',
    depth: 1
  }
]