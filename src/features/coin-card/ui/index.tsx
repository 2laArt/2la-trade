import { SmallChart } from '@/features/small-chart'
import { cn, formatPercentage, formatToCurrency } from '@/shared/lib'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

export interface ICoinCard {
  icon?: string
  name: string
  symbol: string
  slug: string
  usd_price: number
  token_id: number
  prices: number[]
  usd_price_change_24h: number
}
export interface ICoinCartProps {
  coin: ICoinCard
  className?: string
  currency: string
}
export const CoinCard: React.FC<ICoinCartProps> = ({
  coin,
  className,
  currency,
}) => {
  const {
    name,
    prices,
    slug,
    symbol,
    token_id,
    usd_price,
    usd_price_change_24h,
    icon,
  } = coin
  const is640 = useMediaQuery({ query: '(min-width: 640px)' })
  return (
    <div
      className={cn(
        'dark:bg-slate-900 bg-white @container p-2 sm:p-5  rounded-sm font-semibold',
        className
      )}
    >
      <div className="flex justify-between items-center">
        <div className="w-10 h-10 bg-zinc-600 mr-2"></div>
        {is640 ? (
          <SmallChart
            percent={usd_price_change_24h}
            prices={prices}
            className="w-32 h-12"
          />
        ) : (
          <div>{formatPercentage(usd_price_change_24h)}</div>
        )}
      </div>
      <div className="flex max-sm:flex-col justify-between gap-2 my-2">
        <div className="whitespace-nowrap truncate">{name}</div>
        <div>{symbol}</div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          {formatToCurrency(usd_price, {
            currency,
            style: 'currency',
          })}
        </div>
        {is640 && <div>{formatPercentage(usd_price_change_24h)}</div>}
      </div>
    </div>
  )
}
