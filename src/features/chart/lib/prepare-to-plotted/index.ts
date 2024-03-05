import type { ChartPeriodType, PriceChartTuple } from '@/entities/coin/model'

export const prepareToPlotted = ({
  prices,
  period,
}: {
  prices: PriceChartTuple[]
  period: ChartPeriodType
}) => {
  const { length } = prices
  const labels = []
  const data = []
  for (let i = 0; i < length; i++) {
    const [time, price, cap] = prices[i]
    labels.push(getPriceDate(time, period))
    data.push(price)
  }

  return { labels, data }
}

const getPriceDate = (time: number, period: ChartPeriodType) => {
  const date = new Date(time * 1e3)
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
