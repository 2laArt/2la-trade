import { useQuery } from '@tanstack/react-query'
import { keyFactory } from '@/entities/key-factory'
import { coinServices } from './api'
import type { IChartParams, ICoinStatisticsParams } from './types'

export const useQueryCoinChart = (params: IChartParams) => {
  const query = useQuery({
    queryKey: keyFactory.coinChart(params),
    queryFn: () => coinServices.chart(params),
  })
  return query
}
export const useQueryCoinStatistics = (params: ICoinStatisticsParams) => {
  const query = useQuery({
    queryKey: keyFactory.coinStatistics(params),
    queryFn: () => coinServices.statistics(params),
  })
  return query
}
export const useQueryCoinBySlug = (slug: string) => {
  const query = useQuery({
    queryKey: keyFactory.coinBySlug(slug),
    queryFn: () => coinServices.coin(slug),
  })
  return query
}
export const useQueryCoinMetaData = (slug: string) => {
  const query = useQuery({
    queryKey: keyFactory.metaData(slug),
    queryFn: () => coinServices.metaData(slug),
  })
  return query
}
