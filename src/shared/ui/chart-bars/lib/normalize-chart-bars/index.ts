export const normalizeChartBars = (prices: number[]) => {
  const maxVal = Math.max(...prices)
  const minVal = Math.min(...prices)
  if (maxVal === minVal) {
    return prices.map((ch) => 50)
  } else {
    return prices.map((ch) => 5 + ((ch - minVal) * 95) / (maxVal - minVal))
  }
}
