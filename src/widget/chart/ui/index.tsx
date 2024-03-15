'use client'
import React from 'react'
import { ChartPeriodType, useQueryCoinChart } from '@/entities/coin/model'
import { prepareToPlotted } from '../lib'
import { ChartHeader } from './chart-header'
import { CanvasChart } from './chart'
import { useCustomSearchParams } from '@/shared/lib'
import { Spinner } from '@/shared/ui'

const periodWrapper = (period: ChartPeriodType) => {
  const isException = ['30d', '90d', '180d', '365d'].includes(period)
  return isException ? 'all' : period
}

export const CoinChart: React.FC<{
  slug: string
  period?: ChartPeriodType
  className?: string
}> = ({ slug, period = 'd', className }) => {
  const wPeriod = React.useMemo(() => periodWrapper(period), [period])
  const { data, isLoading } = useQueryCoinChart({ slug, period: wPeriod })
  const { setSearchParams } = useCustomSearchParams(false)
  const setPeriod = (value: ChartPeriodType) =>
    setSearchParams([{ key: 'period', value }])
  const [chartData, setChartData] = React.useState<{
    labels: string[]
    data: number[]
  }>()

  React.useEffect(() => {
    if (!data?.prices || isLoading) return
    const newData = prepareToPlotted({
      prices: data.prices,
      period: period,
      isException: wPeriod === 'all',
    })
    setChartData(newData)
  }, [data, period, isLoading, wPeriod])
  if (!data?.prices.length && !isLoading)
    return (
      <div className="my-4 text-lg font-semibold flex justify-center text-center items-center min-h-52 border border-gray-500">
        Unfortunately, this data could not be obtained
      </div>
    )
  return isLoading ? (
    <div className="relative w-full h-full min-h-56 min-w-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Spinner size={50} />
      </div>
    </div>
  ) : (
    <div>
      <ChartHeader period={period} name={slug} setPeriod={setPeriod} />
      <CanvasChart
        prices={chartData?.data}
        labels={chartData?.labels}
        className={className}
      />
    </div>
  )
}
