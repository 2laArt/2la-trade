import { TICKER } from '../../config'
import type { ITicker } from '../../model'

export const setTickerPrices = (ticker: ITicker, price: number) => {
  let prices
  if (ticker.prices.length > TICKER.MAX_TICKER_PRICES) {
    prices = [...ticker.prices.slice(1), price]
  } else prices = [...ticker.prices, price]

  return {
    ...ticker,
    prices: prices,
    lastUpdate: Date.now(),
  }
}
