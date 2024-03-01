import {
  IFiltersCoinsParams,
  ITopMoversParams,
  ITrendingCoinsParams,
} from '../coin'

export const keyFactory = {
  topMovers: (params: Omit<ITopMoversParams, 'direction'>) => [
    'topMovers',
    params,
  ],
  filters: (params: IFiltersCoinsParams) => ['coinsPage', params],
  trending: (params: ITrendingCoinsParams) => ['coinsPage', params],
}
