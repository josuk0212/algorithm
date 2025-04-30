/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  const originColor = image[sr][sc];

  if (originColor === color) {
    return image;
  }

  function fill(sr, sc) {
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length) {
      return;
    }

    if (image[sr][sc] !== originColor) {
      return;
    }

    image[sr][sc] = color;

    fill(sr + 1, sc);
    fill(sr - 1, sc);
    fill(sr, sc + 1);
    fill(sr, sc - 1);
  }

  fill(sr, sc);
  return image;
};
