/**
 * @Description: 图像放缩工具函数
 * @Author: 陈思宇
 * @Date: 2026-3-15 20:00:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-14 20:38:00
*/
interface scaleOptions {
  scale: number;
}

export const scaleImage = (
  sourceCanvas: HTMLCanvasElement,
  targetCanvas: HTMLCanvasElement,
  options: scaleOptions
) => {
  const { scale } = options;
  if (!window.cv) return;
  const targetWidth = sourceCanvas.width;
  const targetHeight = sourceCanvas.height;
  const src = window.cv.imread(sourceCanvas);
  const dst = new window.cv.Mat();

  const center = new window.cv.Point(src.cols / 2, src.rows / 2);

  const M = window.cv.getRotationMatrix2D(center, 0, scale);

  M.doublePtr(0, 2)[0] += (targetWidth / 2) - (src.cols / 2);
  M.doublePtr(1, 2)[0] += (targetHeight / 2) - (src.rows / 2);

  try {
    window.cv.warpAffine(
      src,
      dst,
      M,
      new window.cv.Size(targetWidth, targetHeight),
      window.cv.INTER_LINEAR,
      window.cv.BORDER_CONSTANT,
      new window.cv.Scalar(0, 0, 0, 0) // 背景补全颜色：透明/黑色
    );

    window.cv.imshow(targetCanvas, dst);
  } catch (err) {
    console.error("WarpAffine Error:", err);
  } finally {
    src.delete();
    dst.delete();
    M.delete();
  }
};