import React from 'react'
import { normalizeChartBars } from './lib'
import { Spinner } from '@/shared/ui'

export const ChartBars: React.FC<{ prices: number[]; limit: number }> = ({
  prices,
  limit,
}) => {
  const [chart, setChart] = React.useState<number[]>([])
  const width = (1 / limit) * 100
  React.useEffect(() => {
    setChart(normalizeChartBars(prices))
  }, [prices])
  const chartEls = chart.map((ch, idx) => (
    <div
      key={`${ch}-${idx}`}
      style={{
        height: `${ch}%`,
        width: `${width}%`,
      }}
      className="bg-blue-600 "
    />
  ))

  return (
    <div className=" h-[40svh] gap-[1%] flex flex-grow justify-center items-end">
      {!!prices.length ? chartEls : <Spinner size={50} />}
    </div>
  )
}
