'use client'
import { ChartPeriodType } from '@/entities/coin/model'
import { cn } from '@/shared/lib'
import { Button, Each } from '@/shared/ui'
import React from 'react'

interface IChartHeader {
  name: string
  currency?: string
  setPeriod: (period: ChartPeriodType) => void
  period: ChartPeriodType
}

const periodDisplay = {
  h: '1H',
  d: '24H',
  w: '7D',
  '30d': '1M',
  '90d': '3M',
  '180d': '6M',
  '365d': '1Y',
  all: 'ALL',
}
export const ChartHeader: React.FC<IChartHeader> = ({
  currency = 'USD',
  name,
  period,
  setPeriod,
}) => {
  const isActive = (arg: ChartPeriodType) => period.trim() === arg.trim()
  return (
    <div className="flex max mb-6 justify-between">
      <h4 className="capitalize font-semibold">
        {name} Price Chart ({currency})
      </h4>
      <div className="flex gap-3">
        <Each
          arr={Object.entries(periodDisplay)}
          render={([key, view]) => (
            <Button
              className={cn(
                'py-0 px-1 h-auto bg-transparent text-current hover:bg-blue-600  hover:text-white',
                isActive(key as ChartPeriodType) && 'bg-blue-600 text-white'
              )}
              key={key}
              onClick={() => setPeriod(key as ChartPeriodType)}
            >
              {view}
            </Button>
          )}
        />
      </div>
    </div>
  )
}
