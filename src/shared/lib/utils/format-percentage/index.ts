import { priceWithSuffix } from '..'

export const formatPercentage = (num: number) => {
  const isPositive = num > 0
  const suffix = '%'
  const prefix = isPositive ? '+' : '-'
  const isBig = Math.abs(num * 1e2) > 1e2
  if (isBig)
    return `${prefix} ${priceWithSuffix(Math.abs(num) * 100, '')} ${suffix}`
  const formatted = `${prefix} ${(Math.abs(num) * 100).toFixed(2)} ${suffix}`
  return formatted
}
