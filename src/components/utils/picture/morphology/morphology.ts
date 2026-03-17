/**
 * @Description: 图像形态特征分析工具函数
 * @Author: 陈思宇
 * @Date: 2026-03-16 21:225:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-17 10:06:00
*/
export const applyMorphologyEffect = (
  srcCanvas: HTMLCanvasElement,
  dstCanvas: HTMLCanvasElement,
  options: {
    operator: string,
    kernelSize: number,
    kernelShape: string,
    iterations: number,
    threshold: number
  }
) => {
  const src = window.cv.imread(srcCanvas);
  const dst = new window.cv.Mat();
  const gray = new window.cv.Mat();

  try {
    window.cv.cvtColor(src, gray, window.cv.COLOR_RGBA2GRAY);
    window.cv.threshold(gray, gray, options.threshold, 255, window.cv.THRESH_BINARY);

    const ksize = new window.cv.Size(options.kernelSize, options.kernelSize);
    const M = window.cv.getStructuringElement(window.cv[options.kernelShape], ksize);

    window.cv.morphologyEx(
      gray, 
      dst, 
      window.cv[options.operator], 
      M, 
      new window.cv.Point(-1, -1), 
      options.iterations
    );

    window.cv.imshow(dstCanvas, dst);

    src.delete(); gray.delete(); dst.delete(); M.delete();
    
  } catch (err) {
    console.error("OpenCV 处理失败:", err);
    [src, gray, dst].forEach(m => m && !m.isDeleted() && m.delete());
  }
};