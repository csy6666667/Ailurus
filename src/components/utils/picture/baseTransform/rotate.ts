/**
 * @Description: 图像旋转工具函数
 * @Author: 陈思宇
 * @Date: 2026-3-14 14:51:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-14 20:38:00
*/
interface RotateOptions {
  angle: number;
}

export const rotateImage = (
  sourceCanvas: HTMLCanvasElement,
  targetCanvas: HTMLCanvasElement,
  options: RotateOptions
) => {
  const { angle } = options;
  if(!window.cv) return;

  const src = window.cv.imread(sourceCanvas);
  const dst = new window.cv.Mat();

  const center = new window.cv.Point(src.cols / 2, src.rows / 2);
  const M = window.cv.getRotationMatrix2D(center, angle, 1.0);

  const dsize = new window.cv.Size(src.cols, src.rows);
  window.cv.warpAffine(
    src,
    dst,
    M,
    dsize,
    window.cv.INTER_LINEAR,
    window.cv.BORDER_CONSTANT,
    new window.cv.Scalar(255, 255, 255, 255)
  )

  window.cv.imshow(targetCanvas, dst);

  src.delete();
  dst.delete();
  M.delete();
};