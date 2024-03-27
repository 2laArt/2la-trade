import { ApiInstance } from '@/shared/api'
import type {
  IChartParams,
  ICoinBySlug,
  ICoinChartResponse,
  ICoinMetaData,
  ICoinPeriod,
  ICoinStatisticsParams,
} from './types'

const baseUrl = `${process.env.NEXT_PUBLIC_CRYPTO_COM_URL}`

class CoinServices extends ApiInstance {
  chart = async ({
    period,
    slug,
  }: IChartParams): Promise<ICoinChartResponse> => {
    const url = `price/v2/${period}/${slug}`
    return await this.fetch(url)
  }
  statistics = async ({
    currency = 'USD',
    slug,
  }: ICoinStatisticsParams): Promise<ICoinPeriod[]> => {
    const url = `price/v1/statistics/${slug}?convert=${currency}`
    const { statistics } = await this.fetch<{ statistics: ICoinPeriod[] }>(url)
    return statistics
  }
  coin = async (slug: string): Promise<ICoinBySlug> => {
    const url = `price/v1/token-price/${slug}`
    return await this.fetch(url)
  }
  metaData = async (slug: string): Promise<ICoinMetaData> => {
    const url = `meta/v1/tokens/${slug}`
    const { data } = await this.fetch<{ data: ICoinMetaData }>(url)
    return data
  }
}

export const coinServices = new CoinServices(baseUrl)
