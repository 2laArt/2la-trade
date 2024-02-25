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
export interface ICoinShort {
  icon?: string
  name: string
  symbol: string
  slug: string
  usd_price: number
  token_id: number
  prices: number[]
  usd_price_change_24h: number
}
export interface ICoinIcon {
  icon_light: string
  id: number
  name: string
  symbol: string
}
export interface ICoinList {
  data: ICoin[]
  total: number
}
