import type { ChartPeriodType, PriceChartTuple } from '@/entities/coin/model'
import { getPriceDateDisplay } from '../get-price-date-display'

export const prepareToPlotted = ({
  prices,
  period,
  isException,
}: {
  prices: PriceChartTuple[]
  period: ChartPeriodType
  isException: boolean
}) => {
  const priceSlice = getPricesSlice({ isException, period, prices })
  const { length } = priceSlice
  const labels = []
  const data = []
  for (let i = 0; i < length; i++) {
    const [time, price, cap] = priceSlice[i]
    const date = getPriceDateDisplay(time, period)
    labels.push(date)
    data.push(price)
  }

  return { labels, data }
}

const getPricesSlice = ({
  period,
  prices,
  isException,
}: {
  prices: PriceChartTuple[]
  period: ChartPeriodType
  isException: boolean
}) => {
  const lastLitter = period.length - 1
  const periodDays = Number(period.slice(0, lastLitter))
  const sliceIdx = periodDays * 2
  if (isException && prices.length > sliceIdx) {
    return prices.slice(prices.length - sliceIdx)
  }

  return prices
}
