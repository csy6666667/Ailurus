/**
 * @Description: 图像透视变换工具函数
 * @Author: 陈思宇
 * @Date: 2026-03-17 18:19:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-17 19:34:00
*/
export const applyPerspectiveEffect = (
  inputCanvas: HTMLCanvasElement,
  corners: { x: number; y: number }[],
) => {
  const src = window.cv.imread(inputCanvas);
  const dst = new window.cv.Mat();
  if(corners.length !== 4)return;
  const [p1, p2, p3, p4] = corners;
  let srcCoords = null;
  if(p1 !=undefined && p2 != undefined && p3 != undefined && p4 != undefined){
    srcCoords = window.cv.matFromArray(4, 1, window.cv.CV_32FC2, [
      p1.x, p1.y,
      p2.x, p2.y,
      p3.x, p3.y,
      p4.x, p4.y,
    ]);
    const widthUpper = Math.hypot(p2.x - p1.x, p2.y - p1.y);
    const widthLower = Math.hypot(p3.x - p4.x, p3.y - p4.y);
    const maxWidth = Math.max(widthUpper, widthLower);

    // 2. 计算左边和右边的长度，取较大者作为高度
    const heightLeft = Math.hypot(p4.x - p1.x, p4.y - p1.y);
    const heightRight = Math.hypot(p3.x - p2.x, p3.y - p2.y);
    const maxHeight = Math.max(heightLeft, heightRight);
    const dstCoords = window.cv.matFromArray(4, 1, window.cv.CV_32FC2, [
      0, 0,
      maxWidth, 0,
      maxWidth, maxHeight,
      0, maxHeight,
    ]);

  const M = window.cv.getPerspectiveTransform(srcCoords, dstCoords);

  const dsize = new window.cv.Size(maxWidth, maxHeight);
  window.cv.warpPerspective(
    src,
    dst,
    M,
    dsize,
    window.cv.INTER_LANCZOS4,
    window.cv.BORDER_CONSTANT,
    new window.cv.Scalar()
  );

  // 6. 将结果渲染回 Canvas
  window.cv.imshow(inputCanvas, dst);

  src.delete();
  dst.delete();
  M.delete();
  srcCoords.delete();
  dstCoords.delete();
  }
};