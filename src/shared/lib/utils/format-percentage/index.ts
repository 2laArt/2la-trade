export const formatPercentage = (num: number) => {
  const isPositive = num > 0
  const suffix = '%'
  const prefix = isPositive ? '+' : '-'
  const formatted = `${prefix} ${(Math.abs(num) * 100).toFixed(2)} ${suffix}`
  return formatted
}
