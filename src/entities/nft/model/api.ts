import { ApiInstance } from '@/shared/api'
import type {
  INftCollectionsParams,
  INftBySlugParams,
  INftMeta,
  INftSales,
  INftSocialInform,
  INftWhalesWatch,
  INftCollections,
  INftStatistic,
  INftStatisticParams,
  INft,
} from './types'

const baseUrl = `${process.env.NEXT_PUBLIC_CRYPTO_COM_URL}/nft`

class NFTServices extends ApiInstance {
  collections = async (
    params: INftCollectionsParams
  ): Promise<INftCollections> => {
    const searchParams = this.getSearchParams(params)
    const url = `v2/collection/assets?${searchParams}`
    const { data } = await this.fetch(url)
    return data
  }
  statistic = async ({
    blockchain,
  }: INftStatisticParams): Promise<INftStatistic> => {
    const url = `v2/collection/statistic?blockchain=${blockchain}`
    const { data } = await this.fetch(url)
    return data
  }
  collectionTrending = async ({
    blockchain,
  }: INftStatisticParams): Promise<INft[]> => {
    const url = `v2/collection/trending?blockchain=${blockchain}`
    const { data } = await this.fetch(url)
    return data
  }
  meta = async ({ blockchain, slug }: INftBySlugParams): Promise<INftMeta> => {
    const url = `v2/collection/metadata/${slug}?blockchain=${blockchain}`
    const { data } = await this.fetch(url)
    return data
  }
  sales = async ({
    blockchain,
    slug,
  }: INftBySlugParams): Promise<INftSales> => {
    const url = `v2/collection/sales/${slug}?blockchain=${blockchain}`
    const { data } = await this.fetch(url)
    return data
  }
  socialInform = async ({
    blockchain,
    slug,
  }: INftBySlugParams): Promise<INftSocialInform> => {
    const searchParams = this.getSearchParams({ blockchain })
    const url = `v2/collection/social-information//${slug}?${searchParams}`
    const { data } = await this.fetch(url)
    return data
  }
  whales = async (params: INftBySlugParams): Promise<INftWhalesWatch> => {
    const searchParams = this.getSearchParams(params)
    const url = `/v1/whales?page=1&limit=10`
    return await this.fetch(url)
  }
}

export const nftServices = new NFTServices(baseUrl)

//  https://price-api.crypto.com/nft/v2/collection/trending?blockchain=2
// https://price-api.crypto.com/nft/v2/collection/metadata/boredapeyachtclub?blockchain=0
