import { IChartParams } from '../coin/model'
import {
  IFiltersCoinsParams,
  ITopMoversParams,
  ITrendingCoinsParams,
} from '../coins-list'

export const keyFactory = {
  topMovers: (params: ITopMoversParams) => ['topMovers', params],
  filters: (params: IFiltersCoinsParams) => ['coinsPage', params],
  trending: (params: ITrendingCoinsParams) => ['coinsPage', params],
  coinChart: (params: IChartParams) => ['coinChart', params],
}
