/**
 * @Description: 图像色彩转换工具函数
 * @Author: 陈思宇
 * @Date: 2026-3-18 16:00:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-18 18:10:00
 */
package main

import (
	"syscall/js"
)

// 1. 核心算法：灰度转换算子
func grayScale(this js.Value, args []js.Value) interface{} {
	// 获取 JS 传来的 Uint8ClampedArray
	data := args[0]
	start := args[1].Int()
	end := args[2].Int()

	for i := start; i < end; i += 4 {
		r := float64(data.Index(i).Int())
		g := float64(data.Index(i + 1).Int())
		b := float64(data.Index(i + 2).Int())

		// 心理学灰度公式
		gray := uint8(r*0.299 + g*0.587 + b*0.114)

		data.SetIndex(i, gray)   // R
		data.SetIndex(i+1, gray) // G
		data.SetIndex(i+2, gray) // B
		// A 保持不变
	}
	return nil
}

func main() {
	// 创建一个信道防止 Go 程序退出
	c := make(chan struct{}, 0)

	// 将 Go 函数挂载到 JS 的全局对象 (window)
	js.Global().Set("__wasm_grayScale", js.FuncOf(grayScale))

	println("Go WebAssembly Initialized")
	<-c
}
