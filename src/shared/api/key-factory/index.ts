export const keyFactory = {
  topMovers: (count: number) => ['topMovers', count],
  coinsPage: (params: ICoinsPageParams) => ['coinsPage', params],
}

export interface ICoinsPageParams {
  page: number
  limit: number
}
