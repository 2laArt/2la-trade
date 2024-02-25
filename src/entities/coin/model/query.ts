import { type ICoinsPageParams, keyFactory } from '@/shared/api'
import { useQuery } from '@tanstack/react-query'
import { getCoinsPage, getTopMovers } from './api'

export const useQueryCoinsPage = (params: ICoinsPageParams) => {
  const coinsPage = useQuery({
    queryKey: keyFactory.coinsPage(params),
    queryFn: () => getCoinsPage(params),
  })

  return coinsPage
}

export const useQueryTopMovers = (count: number) => {
  const topMovers = useQuery({
    queryKey: keyFactory.topMovers(count),
    queryFn: () => getTopMovers(count),
  })

  return topMovers
}
