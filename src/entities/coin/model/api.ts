import { ApiInstance } from '@/shared/api'
import type {
  IFiltersCoins,
  IFiltersCoinsParams,
  IShowroom,
  ITopMovers,
  ITopMoversParams,
  ITrendingCoins,
  ITrendingCoinsParams,
} from './types'

const baseUrl = `${process.env.NEXT_PUBLIC_CRYPTO_COM_URL}/price`

export class CoinServices extends ApiInstance {
  topMovers = async (params: ITopMoversParams): Promise<ITopMovers[]> => {
    const searchParams = this.getSearchParams({
      ...params,
      tradable_on: 'EXCHANGE-OR-APP',
    })
    const url = `v1/top-movers?${searchParams}`
    return await this.fetch(url)
  }
  filters = async (params: IFiltersCoinsParams): Promise<IFiltersCoins> => {
    const searchParams = this.getSearchParams(params)
    const url = `v1/tokens?${searchParams}`
    return await this.fetch<IFiltersCoins>(url)
  }
  trending = async ({
    limit,
  }: ITrendingCoinsParams): Promise<ITrendingCoins> => {
    const url = `v1/trending-tokens?limit=${limit}`
    return await this.fetch<ITrendingCoins>(url)
  }
  showroom = async (): Promise<IShowroom> => {
    const url = 'v1/showroom/tokens/statistic'
    const response = await this.fetch(url)
    return response.data
  }
}

export const coinServices = new CoinServices(baseUrl)
