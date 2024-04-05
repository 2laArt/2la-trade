import type { ICoinDB } from '@/entities/cart/model'

export interface ITickerError {
  message: string
  reason: string
  type: 'error'
}

export interface ITickerSuccess {
  best_ask: string
  best_ask_size: string
  best_bid: string
  best_bid_size: string
  high_24h: string
  last_size: string
  low_24h: string
  open_24h: string
  price: string
  product_id: string
  sequence: number
  side: string
  time: string
  trade_id: number
  type: string
  volume_24h: string
  volume_30d: string
}

export interface ITicker {
  key: string
  coin: ICoinDB
  info?: ITickerSuccess
  prices: number[]
  waring?: string
  lastUpdate: number
}
export type UpdateTickersType = (
  key: string,
  message: ITickerError | ITickerSuccess
) => void
