export interface INft {
  id: string
  slug: string
  index: number
  name: string
  assets: number
  averagePriceChange1d: number
  averagePriceChange7d: number
  averagePriceChange30d: number
  prices: unknown
  status: number
  tradable: boolean
  externalId: unknown
  image_url: string
  external_url: string
  floor_price: number
  market_cap: number
  sales_1d: number
  volume_1d: number
  volume_change_1d: number
  price_change_1d: unknown
  sales_7d: number
  volume_7d: number
  volume_change_7d: number
  price_change_7d: number
  sales_30d: number
  volume_30d: number
  volume_change_30d: number
  price_change_30d: unknown
  total_volume: number
  total_sales: number
  total_supply: number
  average_price_all_time: number
  update_time: number
  blockchain: number
  twitter_username: string
  discord_url: string
  detail_images: string[]
  contract_address: unknown
}
export interface INftMeta {
  id: string
  slug: string
  name: string
  assets: number
  owners: number
  blockchain: number
  description: string
}
export interface INftSales {
  owner: number
  volume: number
  sale: number
  averagePrices: number[]
  owners: number[]
  marketCaps: number[]
  volumes: number[]
  sales: number[]
  average_price: number
  market_cap: number
  total_volume: number
  floor_price: number
  price_change_7d: number
}
export interface INftSocialInform {
  id: string
  website: string
  description: string
  blockchain: number
  name: string
  status: number
  twitter_username: string
  discord_url: string
  market_url: string
  detail_images: string[]
}
export interface INftWhale {
  index: number
  id: string
  collection: string
  buyer: string
  value: string
  gas: string
  tx_hash: string
  transaction_time: number
}
export interface INftStatistic {
  prices: number[]
  volumes: number[]
  volume_1d?: number
  average_price_1d?: number
  volume_7d: number
  average_price_7d: number
  average_price_7d_rate: number
  volume_7d_rate: number
  volume_30d?: number
  average_price_30d?: number
  volume_all?: number
}

export interface INftWhalesWatch {
  data: INftWhale[]
  total: number
}
export interface INftCollections {
  data: INft[]
  total: number
}
export interface INftWhalesParams {
  page: number
  limit: number
  sort?: keyof INftWhale
}
export interface INftCollectionsParams {
  page: number
  limit: number
  blockchain: NftBlockchainType
  sort?: keyof INft
}
export interface INftBySlugParams {
  slug: string
  blockchain: NftBlockchainType
}
export interface INftStatisticParams {
  blockchain: NftBlockchainType
}
export type NftBlockchainType = 0 | 1 | 2 | 4
