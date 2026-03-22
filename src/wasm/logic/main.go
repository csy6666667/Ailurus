/**
 * @Description: Go 图像处理工具函数集合
 * @Author: 陈思宇
 * @Date: 2026-03-22
 */
package main

import (
	"math"
	"syscall/js"
)

// ==================== 灰度转换 ====================

func grayScale(this js.Value, args []js.Value) interface{} {
	data := args[0]
	start := args[1].Int()
	end := args[2].Int()

	for i := start; i < end; i += 4 {
		r := float64(data.Index(i).Int())
		g := float64(data.Index(i + 1).Int())
		b := float64(data.Index(i + 2).Int())

		gray := uint8(r*0.299 + g*0.587 + b*0.114)

		data.SetIndex(i, gray)
		data.SetIndex(i+1, gray)
		data.SetIndex(i+2, gray)
	}
	return nil
}

// ==================== 仿射变换核心 ====================

func affineTransformCore(this js.Value, args []js.Value) interface{} {
	data := args[0]
	width := args[1].Int()
	height := args[2].Int()
	transform := args[3]

	a00 := transform.Index(0).Float()
	a01 := transform.Index(1).Float()
	b0 := transform.Index(2).Float()
	a10 := transform.Index(3).Float()
	a11 := transform.Index(4).Float()
	b1 := transform.Index(5).Float()

	dstLen := width * height * 4
	dst := make([]uint8, dstLen)

	for i := 0; i < dstLen; i++ {
		dst[i] = 0
	}

	for y := 0; y < height; y++ {
		for x := 0; x < width; x++ {
			srcX := a00*float64(x) + a01*float64(y) + b0
			srcY := a10*float64(x) + a11*float64(y) + b1

			if srcX >= 0 && srcX < float64(width-1) && srcY >= 0 && srcY < float64(height-1) {
				x0 := int(srcX)
				y0 := int(srcY)
				x1 := x0 + 1
				y1 := y0 + 1

				if x1 >= width {
					x1 = width - 1
				}
				if y1 >= height {
					y1 = height - 1
				}

				idx00 := (y0*width + x0) * 4
				idx10 := (y0*width + x1) * 4
				idx01 := (y1*width + x0) * 4
				idx11 := (y1*width + x1) * 4

				dx := srcX - float64(x0)
				dy := srcY - float64(y0)

				dstIdx := (y*width + x) * 4
				for c := 0; c < 4; c++ {
					v00 := float64(data.Index(idx00 + c).Int())
					v10 := float64(data.Index(idx10 + c).Int())
					v01 := float64(data.Index(idx01 + c).Int())
					v11 := float64(data.Index(idx11 + c).Int())

					v0 := v00*(1-dx) + v10*dx
					v1 := v01*(1-dx) + v11*dx
					v := v0*(1-dy) + v1*dy

					if v > 255 {
						dst[dstIdx+c] = 255
					} else if v < 0 {
						dst[dstIdx+c] = 0
					} else {
						dst[dstIdx+c] = uint8(v)
					}
				}
			}
		}
	}

	result := js.Global().Get("Uint8ClampedArray").New(dstLen)
	for i := 0; i < dstLen; i++ {
		result.SetIndex(i, dst[i])
	}

	return result
}

// ==================== 图像平移 ====================

func translateImage(this js.Value, args []js.Value) interface{} {
	data := args[0]
	width := args[1].Int()
	height := args[2].Int()
	tx := args[3].Float()
	ty := args[4].Float()

	borderR := uint8(args[5].Int())
	borderG := uint8(args[6].Int())
	borderB := uint8(args[7].Int())
	borderA := uint8(args[8].Int())

	dstLen := width * height * 4
	dst := make([]uint8, dstLen)

	for y := 0; y < height; y++ {
		for x := 0; x < width; x++ {
			idx := (y*width + x) * 4
			dst[idx] = borderR
			dst[idx+1] = borderG
			dst[idx+2] = borderB
			dst[idx+3] = borderA
		}
	}

	for y := 0; y < height; y++ {
		for x := 0; x < width; x++ {
			srcX := int(float64(x) - tx)
			srcY := int(float64(y) - ty)

			if srcX >= 0 && srcX < width && srcY >= 0 && srcY < height {
				srcIdx := (srcY*width + srcX) * 4
				dstIdx := (y*width + x) * 4
				copy(dst[dstIdx:dstIdx+4], []uint8{
					uint8(data.Index(srcIdx).Int()),
					uint8(data.Index(srcIdx + 1).Int()),
					uint8(data.Index(srcIdx + 2).Int()),
					uint8(data.Index(srcIdx + 3).Int()),
				})
			}
		}
	}

	result := js.Global().Get("Uint8ClampedArray").New(dstLen)
	for i := 0; i < dstLen; i++ {
		result.SetIndex(i, dst[i])
	}

	return result
}

// ==================== 图像缩放 ====================

func scaleImage(this js.Value, args []js.Value) interface{} {
	data := args[0]
	srcWidth := args[1].Int()
	srcHeight := args[2].Int()
	dstWidth := args[3].Int()
	dstHeight := args[4].Int()
	interpolation := args[5].Int()

	dstLen := dstWidth * dstHeight * 4
	dst := make([]uint8, dstLen)

	scaleX := float64(srcWidth) / float64(dstWidth)
	scaleY := float64(srcHeight) / float64(dstHeight)

	if interpolation == 0 {
		for y := 0; y < dstHeight; y++ {
			for x := 0; x < dstWidth; x++ {
				srcX := int(float64(x) * scaleX)
				srcY := int(float64(y) * scaleY)

				if srcX >= srcWidth {
					srcX = srcWidth - 1
				}
				if srcY >= srcHeight {
					srcY = srcHeight - 1
				}

				srcIdx := (srcY*srcWidth + srcX) * 4
				dstIdx := (y*dstWidth + x) * 4

				for c := 0; c < 4; c++ {
					dst[dstIdx+c] = uint8(data.Index(srcIdx + c).Int())
				}
			}
		}
	} else {
		for y := 0; y < dstHeight; y++ {
			for x := 0; x < dstWidth; x++ {
				srcX := float64(x) * scaleX
				srcY := float64(y) * scaleY

				x0 := int(srcX)
				y0 := int(srcY)
				x1 := x0 + 1
				y1 := y0 + 1

				if x1 >= srcWidth {
					x1 = srcWidth - 1
				}
				if y1 >= srcHeight {
					y1 = srcHeight - 1
				}

				idx00 := (y0*srcWidth + x0) * 4
				idx10 := (y0*srcWidth + x1) * 4
				idx01 := (y1*srcWidth + x0) * 4
				idx11 := (y1*srcWidth + x1) * 4

				dx := srcX - float64(x0)
				dy := srcY - float64(y0)

				dstIdx := (y*dstWidth + x) * 4

				for c := 0; c < 4; c++ {
					v00 := float64(data.Index(idx00 + c).Int())
					v10 := float64(data.Index(idx10 + c).Int())
					v01 := float64(data.Index(idx01 + c).Int())
					v11 := float64(data.Index(idx11 + c).Int())

					v0 := v00*(1-dx) + v10*dx
					v1 := v01*(1-dx) + v11*dx
					v := v0*(1-dy) + v1*dy

					if v > 255 {
						v = 255
					} else if v < 0 {
						v = 0
					}
					dst[dstIdx+c] = uint8(v)
				}
			}
		}
	}

	result := js.Global().Get("Uint8ClampedArray").New(dstLen)
	for i := 0; i < dstLen; i++ {
		result.SetIndex(i, dst[i])
	}

	return result
}

// ==================== 图像旋转 ====================

func rotateImage(this js.Value, args []js.Value) interface{} {
	data := args[0]
	width := args[1].Int()
	height := args[2].Int()
	angleDeg := args[3].Float()
	bgR := uint8(args[4].Int())
	bgG := uint8(args[5].Int())
	bgB := uint8(args[6].Int())
	bgA := uint8(args[7].Int())

	dstLen := width * height * 4
	dst := make([]uint8, dstLen)

	for y := 0; y < height; y++ {
		for x := 0; x < width; x++ {
			idx := (y*width + x) * 4
			dst[idx] = bgR
			dst[idx+1] = bgG
			dst[idx+2] = bgB
			dst[idx+3] = bgA
		}
	}

	angleRad := angleDeg * math.Pi / 180.0
	cosA := math.Cos(angleRad)
	sinA := math.Sin(angleRad)

	cx := float64(width) / 2.0
	cy := float64(height) / 2.0

	invA00 := cosA
	invA01 := sinA
	invB0 := cx - cosA*cx + sinA*cy
	invA10 := -sinA
	invA11 := cosA
	invB1 := cy - sinA*cx - cosA*cy

	for y := 0; y < height; y++ {
		for x := 0; x < width; x++ {
			srcX := invA00*float64(x) + invA01*float64(y) + invB0
			srcY := invA10*float64(x) + invA11*float64(y) + invB1

			if srcX >= 0 && srcX < float64(width-1) && srcY >= 0 && srcY < float64(height-1) {
				x0 := int(srcX)
				y0 := int(srcY)
				x1 := x0 + 1
				y1 := y0 + 1

				if x1 >= width {
					x1 = width - 1
				}
				if y1 >= height {
					y1 = height - 1
				}

				idx00 := (y0*width + x0) * 4
				idx10 := (y0*width + x1) * 4
				idx01 := (y1*width + x0) * 4
				idx11 := (y1*width + x1) * 4

				dx := srcX - float64(x0)
				dy := srcY - float64(y0)

				dstIdx := (y*width + x) * 4

				for c := 0; c < 4; c++ {
					v00 := float64(data.Index(idx00 + c).Int())
					v10 := float64(data.Index(idx10 + c).Int())
					v01 := float64(data.Index(idx01 + c).Int())
					v11 := float64(data.Index(idx11 + c).Int())

					v0 := v00*(1-dx) + v10*dx
					v1 := v01*(1-dx) + v11*dx
					v := v0*(1-dy) + v1*dy

					if v > 255 {
						v = 255
					} else if v < 0 {
						v = 0
					}
					dst[dstIdx+c] = uint8(v)
				}
			}
		}
	}

	result := js.Global().Get("Uint8ClampedArray").New(dstLen)
	for i := 0; i < dstLen; i++ {
		result.SetIndex(i, dst[i])
	}

	return result
}

// ==================== 主入口 ====================

func main() {
	c := make(chan struct{}, 0)

	js.Global().Set("__wasm_grayScale", js.FuncOf(grayScale))
	js.Global().Set("__wasm_affineTransform", js.FuncOf(affineTransformCore))
	js.Global().Set("__wasm_translateImage", js.FuncOf(translateImage))
	js.Global().Set("__wasm_scaleImage", js.FuncOf(scaleImage))
	js.Global().Set("__wasm_rotateImage", js.FuncOf(rotateImage))

	println("Go WebAssembly Image Processing Initialized")
	<-c
}
