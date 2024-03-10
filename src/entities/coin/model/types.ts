export interface ICoin {
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
export interface ICoinBySlug {
  app_symbol: string
  app_tradable: boolean
  btc_marketcap: number
  btc_price: number
  btc_price_change_24h: number
  btc_volume_24h: number
  circulating_supply: number
  defi_tradable: boolean
  exchange_tradable: boolean
  max_supply: number
  price_update_time: number
  prices: number[]
  rank: number
  slug: string
  token_dominance_rate: unknown
  token_id: number
  total_supply: number
  update_time: number
  usd_marketcap: number
  usd_price: number
  usd_price_change_24h: number
  usd_price_change_24h_abs: number
  usd_volume_24h: number
}
export type PriceChartTuple = [time: number, price: number, cap: number]

export interface ICoinChartResponse {
  prices: PriceChartTuple[]
  usd_price_change: number
}
export interface ICoinPeriod {
  period: '1d' | '7d' | '30d' | '90d' | '365d' | 'all'
  high: number
  low: number
}
export interface ICoinMetaData {
  name: string
  slug: string
  symbol: string
  active: true
  tags: string[]
  description: string
  platform: []
  icon: string
  id: number
  source_slug: string
  website_urls: string[]
  whitepaper_urls: string[]
  explorer_urls: string[]
  sourcecode_urls: string[]
  message_board_urls: unknown[]
  announcement_urls: unknown[]
  chat_urls: unknown[]
  telegram_urls: unknown[]
  discord_urls: unknown[]
  reddit_urls: unknown[]
  twitter_urls: unknown[]
  rss_feeds: [
    {
      source: string
      url: string
      filters: string
    },
  ]
  is_defi_swap: boolean
  meta_title: string
  trading_view_symbol: string
  trading_view_status: number
  price_engine_enabled: boolean
}
export type ChartPeriodType =
  | 'h'
  | 'd'
  | 'w'
  | '30d'
  | '90d'
  | '180d'
  | '365d'
  | 'all'
export interface IChartParams {
  period: ChartPeriodType
  slug: string
}
export interface ICoinStatisticsParams {
  slug: string
  currency?: string
}
