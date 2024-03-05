import { ICoin } from '@/entities/coin/model'

export interface ITopMovers {
  rank?: number
  name: string
  symbol: string
  slug: string
  usd_price: number
  token_id: number
  prices: number[]
  usd_price_change_24h: number
}
export interface IFiltersCoins {
  data: ICoin[]
  total: number
}

export interface IFiltersCoinsParams {
  page: number
  limit: number
  sort?:
    | 'type'
    | 'createdTime'
    | 'tokenId'
    | 'name'
    | 'slug'
    | 'symbol'
    | 'rank'
  direction?: 'DESC' | 'ASC'
  tags?: string
}
export interface ITopMoversParams {
  direction?: 1 | -1
  depth: number
}
export interface ITrendingCoinsParams {
  limit: number
}
export interface ITrendingCoins {
  slug: string
  symbol: string
  name: string
  token_id: number
  usd_price_change_24h: number
}
export interface IShowroom {
  market_cap: number
  market_cap_change_rate: number
  samples: { time: number; market_cap: number }[]
}
