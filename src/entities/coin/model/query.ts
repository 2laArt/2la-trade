import { useQuery } from '@tanstack/react-query'
import { coinServices } from './api'
import { keyFactory } from '@/entities/key-factory'
import type { IFiltersCoinsParams, ITopMoversParams } from './types'

export const useQueryCoinsPage = (params: IFiltersCoinsParams) => {
  const coinsPage = useQuery({
    queryKey: keyFactory.filters(params),
    queryFn: () => coinServices.filters(params),
  })

  return coinsPage
}

export const useQueryTopMovers = ({
  depth,
}: Omit<ITopMoversParams, 'direction'>) => {
  const topMovers = useQuery({
    queryKey: keyFactory.topMovers({ depth }),
    queryFn: () => coinServices.topMovers({ depth }),
    staleTime: 1000,
  })

  return topMovers
}

// const icons = queryClient.getQueryData(['icons'])
