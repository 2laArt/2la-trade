export interface ICoin {
  icon?: string
  active: boolean
  app_symbol: string
  app_tradable: boolean
  exchange_tradable: boolean
  id: number
  name: string
  prices: number[]
  rank: number
  slug: string
  symbol: string
  token_id: number
  usd_marketcap: number
  usd_price: number
  usd_price_change_24h: number
  usd_volume_24h: number
}
export interface ITopMovers {
  icon?: string
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
