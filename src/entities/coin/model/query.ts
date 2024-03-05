import { useQuery } from '@tanstack/react-query'
import { keyFactory } from '@/entities/key-factory'
import { coinServices } from './api'
import type { IChartParams } from './types'

export const useQueryCoinChart = (params: IChartParams) => {
  const coinsPage = useQuery({
    queryKey: keyFactory.coinChart(params),
    queryFn: () => coinServices.chart(params),
  })

  return coinsPage
}

// const icons = queryClient.getQueryData(['icons'])
