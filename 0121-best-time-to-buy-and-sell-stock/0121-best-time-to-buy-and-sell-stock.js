/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let ele of prices) {
    if (ele <= minPrice) {
      minPrice = ele;
    } else {
      const profit = ele - minPrice;
      if (profit >= maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
};