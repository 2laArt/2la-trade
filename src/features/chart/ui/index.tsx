'use client'
import { Chart, ChartData } from 'chart.js/auto'
import React from 'react'
import { useTheme } from 'next-themes'
import {
  IChartParams,
  PriceChartTuple,
  useQueryCoinChart,
} from '@/entities/coin/model'
import { chartOptions } from '../config'
import { prepareToPlotted } from '../lib'

const queryParams: IChartParams = { period: 'all', slug: 'bitcoin' }
const CoinChart = ({
  data,
  isLoading,
}: {
  data?: PriceChartTuple[]
  isLoading?: boolean
}) => {
  const ref = React.useRef<HTMLCanvasElement>(null)
  const { theme, systemTheme } = useTheme()
  const { data: coinData } = useQueryCoinChart(queryParams)

  const [chartData, setChartData] = React.useState<{
    labels: string[]
    data: number[]
  }>()
  console.log('chart render')

  const chartDataOptions: ChartData = React.useMemo(
    () => ({
      labels: chartData?.labels,
      datasets: [
        {
          data: chartData?.data || [],
          label: 'price',
          borderColor: 'rgba(123, 182, 221,.7)',
          backgroundColor: 'rgba(123, 182, 221,.5)',
          fill: true,
          pointRadius: 0,
          pointBorderWidth: 0,
          pointStyle: 'circle',
          pointHoverBorderWidth: 1,
          pointBorderColor: 'white',
        },
      ],
    }),
    [chartData?.data, chartData?.labels]
  )

  React.useEffect(() => {
    if (!!coinData?.prices)
      setChartData(
        prepareToPlotted({
          prices: coinData.prices,
          period: queryParams.period,
        })
      )
  }, [coinData])

  React.useEffect(() => {
    if (!ref.current) return

    const ctx = ref.current.getContext('2d')
    if (!ctx) return
    const myChart = new Chart(ctx, {
      type: 'line',
      data: chartDataOptions,
      options: chartOptions,
    })
    return () => {
      myChart.clear()
      myChart.destroy()
    }
  }, [chartDataOptions, ref])

  return (
    <>
      <canvas
        ref={ref}
        id="myChart"
        aria-label="Cryptocurrency Chart"
        role="img"
      ></canvas>
    </>
  )
}
export default CoinChart
