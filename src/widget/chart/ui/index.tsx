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
}> = ({ slug, period = 'd' }) => {
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

  return isLoading ? (
    <div className="relative w-full h-full">
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
        isLoading={isLoading}
      />
    </div>
  )
}
