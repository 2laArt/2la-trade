'use client'
import { Percentage } from '@/shared/ui'
import React from 'react'
import { SmallChart } from '../small-chart'
import { cn } from '@/shared/lib'

export const MarketPriceCard: React.FC<{
  percent: number
  prices: number[]
  marketCap: string | string
  title: string
  className?: string
  chartClassName?: string
}> = ({ marketCap, percent, prices, title, className, chartClassName }) => {
  return (
    <div
      className={cn('card flex justify-between items-center p-6', className)}
    >
      <div className="flex flex-col">
        <div className="text-xs dark:text-slate-400 text-slate-800">
          {title}
        </div>
        <div className="my-3 text-xl font-semibold">{marketCap}</div>
        <Percentage percent={percent} />
      </div>
      <div>
        <SmallChart
          percent={percent}
          prices={prices}
          className={cn('w-52 h-20', chartClassName)}
        />
      </div>
    </div>
  )
}
