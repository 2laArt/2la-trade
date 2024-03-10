import type { ChartPeriodType } from '@/entities/coin/model'

export const getPriceDateDisplay = (time: number, period: ChartPeriodType) => {
  const jsDate = time * 1e3
  const date = new Date(jsDate)
  const formatTime = (time: number) =>
    time < 10 ? `0${time}` : time.toString()
  const dateMouth = `${date.getDate()}.${date.toString().substring(4, 8)}`
  const mouthYear = `${date.toString().substring(4, 8)}.${date.getFullYear().toString().substring(2)}`
  const variants = {
    h: `${formatTime(date.getHours())} : ${formatTime(date.getMinutes())}`,
    d: `${formatTime(date.getHours())} : 00`,
    w: dateMouth,
    '30d': dateMouth,
    '90d': dateMouth,
    '180d': mouthYear,
    '365d': mouthYear,
    all: date.getFullYear().toString(),
  }
  return variants[period as keyof typeof variants]
}
