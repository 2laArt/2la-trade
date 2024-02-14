export interface IListAll {
  icon: null
  id: number
  name: string
  price_engine_enabled: boolean
  slug: string
  source_id: number
  source_slug: string
  symbol: string
}
export interface ITopCoins {
  name: string
  prices: number[]
  slug: string
  symbol: string
  token_id: number
  usd_price: number
  usd_price_change_24h: number
}
export interface IListAll2 {
  icon?: string
  active: true
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
