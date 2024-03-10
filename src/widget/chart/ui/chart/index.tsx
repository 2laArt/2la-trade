'use client'
import { Chart, ChartData } from 'chart.js/auto'
import React from 'react'
import { chartOptions } from '../../config'
import { useChartTheme } from '../../lib'

export const CanvasChart: React.FC<{
  prices?: number[]
  labels?: string[]
  isLoading?: boolean
}> = ({ prices, labels, isLoading }) => {
  const ref = React.useRef<HTMLCanvasElement>(null)
  const coinChart = React.useRef<Chart>()
  const colors = useChartTheme()
  console.log('chart render')

  const chartDataOptions: ChartData = React.useMemo(
    () => ({
      labels: labels || [],
      datasets: [
        {
          data: prices || [],
          label: 'price',
          borderColor: colors.border,
          backgroundColor: colors.bg,
          fill: true,
          pointRadius: 0,
          pointBorderWidth: 0,
          pointStyle: 'circle',
          pointHoverBorderWidth: 1,
          pointBorderColor: 'white',
        },
      ],
    }),
    [prices, labels, colors]
  )

  React.useEffect(() => {
    const ctx = ref.current?.getContext('2d')
    if (!ctx) return
    coinChart.current = new Chart(ctx, {
      type: 'line',
      data: chartDataOptions,
      options: chartOptions,
    })
    return () => {
      coinChart.current?.clear()
      coinChart.current?.destroy()
    }
  }, [chartDataOptions, ref])
  React.useEffect(() => {
    if (!coinChart.current) return
    if (
      !coinChart.current?.options?.scales?.x?.grid ||
      !coinChart.current?.options?.scales?.y?.grid ||
      !coinChart.current.options.scales.x.ticks ||
      !coinChart.current.options.scales.y.ticks
    )
      return
    // grig
    coinChart.current.options.scales.x.grid.color = colors.scaleColor
    coinChart.current.options.scales.y.grid.color = colors.scaleColor
    // scale x
    coinChart.current.options.scales.x.ticks.color = colors.scaleTextColor
    coinChart.current.options.scales.x.ticks.textStrokeColor = colors.scaleColor
    // scale y
    coinChart.current.options.scales.y.ticks.color = colors.scaleTextColor
    coinChart.current.options.scales.y.ticks.textStrokeColor = colors.scaleColor

    coinChart.current.update()
  }, [coinChart, colors])
  return (
    <>
      <canvas
        ref={ref}
        id="coinChart"
        aria-label="Cryptocurrency Chart"
        // className="bg-sky-200"
        role="img"
      ></canvas>
    </>
  )
}
