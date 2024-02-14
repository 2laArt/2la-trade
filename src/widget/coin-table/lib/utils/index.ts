export interface IPresentationPrice {
  price: number
  prefix: string
}

export const percentageChange = (num: number) => {
  const isPositive = num > 0
  const suffix = '%'
  const prefix = isPositive ? '+' : '-'
  const formatted = `${prefix} ${(Math.abs(num) * 100).toFixed(2)} ${suffix}`
  return formatted
}
export const presentationPrice = (num: number, prefix: string) => {
  const map = [
    { suffix: 'T', threshold: 1e12 },
    { suffix: 'B', threshold: 1e9 },
    { suffix: 'M', threshold: 1e6 },
    { suffix: 'K', threshold: 1e3 },
    { suffix: '', threshold: 1 },
  ]

  const found = map.find((x) => Math.abs(num) >= x.threshold)
  if (found) {
    const formatted = `${prefix} ${(num / found.threshold).toFixed(2)} ${found.suffix}`
    return formatted
  }

  return num
}
