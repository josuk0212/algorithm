/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
  let lines = 1;
  let width = 0;

  for (let ele of s) {
    const wid = widths[ele.charCodeAt(0) - 97];
    if (width + wid > 100) {
      lines++;
      width = wid;
    } else {
      width += wid;
    }
  }

  return [lines, width];
};
