import type { IChartParams, ICoinStatisticsParams } from '../coin/model'
import {
  IFiltersCoinsParams,
  ITopMoversParams,
  ITrendingCoinsParams,
} from '../coins-list'

export const keyFactory = {
  topMovers: (params: ITopMoversParams) => ['top_movers', params],
  filters: (params: IFiltersCoinsParams) => ['coins_filters', params],
  trending: (params: ITrendingCoinsParams) => ['coins_trending', params],
  coinChart: (params: IChartParams) => ['coin_chart', params],
  coinBySlug: (slug: string) => ['coin', slug],
  metaData: (slug: string) => ['coin_meta_data', slug],
  coinStatistics: (params: ICoinStatisticsParams) => [
    'coin_statistics',
    params,
  ],
}
