export const defineWidthAndHeight = (
  originalHeight: number,
  originalWidth: number,
  resultingWidth: number = 500
) => ({
  width: resultingWidth,
  height: (originalHeight / originalWidth) * resultingWidth,
});
