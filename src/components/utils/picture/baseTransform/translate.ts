/**
 * @Description: 图像平移工具函数
 * @Author: 陈思宇
 * @Date: 2026-03-16 12:20:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-16 15:36:00
*/

interface TranslateOptions {
  tx: number;
  ty: number;
}

export const translateImage = (
  sourceCanvas: HTMLCanvasElement,
  targetCanvas: HTMLCanvasElement,
  options: TranslateOptions
) => {
  const { tx, ty } = options;
  if (!window.cv) return;

  const src = window.cv.imread(sourceCanvas);
  const dst = new window.cv.Mat();

  // 平移矩阵
  const M = window.cv.matFromArray(2, 3, window.cv.CV_64F, [
    1, 0, tx,
    0, 1, ty
  ]);

  try {
    window.cv.warpAffine(
      src,
      dst,
      M,
      new window.cv.Size(sourceCanvas.width, sourceCanvas.height),
      window.cv.INTER_LINEAR,
      window.cv.BORDER_CONSTANT,
      new window.cv.Scalar(0, 0, 0, 0)
    );

    window.cv.imshow(targetCanvas, dst);
  } catch (err) {
    console.error('WarpAffine Error:', err);
  } finally {
    src.delete();
    dst.delete();
    M.delete();
  }
};
