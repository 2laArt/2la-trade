import { useQuery } from '@tanstack/react-query'
import { coinsServices } from './api'
import { keyFactory } from '@/entities/key-factory'
import type { IFiltersCoinsParams, ITopMoversParams } from './types'

export const useQueryCoinsPage = (params: IFiltersCoinsParams) => {
  const coinsPage = useQuery({
    queryKey: keyFactory.filters(params),
    queryFn: () => coinsServices.filters(params),
  })

  return coinsPage
}

export const useQueryTopMovers = (params: ITopMoversParams) => {
  const topMovers = useQuery({
    queryKey: keyFactory.topMovers(params),
    queryFn: () => coinsServices.topMovers(params),
    staleTime: 1000,
  })

  return topMovers
}

// const icons = queryClient.getQueryData(['icons'])
