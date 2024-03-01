/* eslint-disable @next/next/no-img-element */
import { SmallChart } from '@/features/small-chart'
import { cn, formatToCurrency } from '@/shared/lib'
import { Percentage, TokenIcon } from '@/shared/ui'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { ITopMovers } from '../../model'

interface ICoinCartProps {
  coin: ITopMovers
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
    token_id,
    prices,
    slug,
    symbol,
    usd_price,
    usd_price_change_24h,
  } = coin
  const is640 = useMediaQuery({ query: '(min-width: 640px)' })
  return (
    <div
      className={cn(
        'dark:bg-slate-900 bg-white p-2 sm:p-5  rounded-sm font-semibold',
        className
      )}
    >
      <div className="flex justify-between items-center">
        <TokenIcon slug={slug} symbol={symbol} token_id={token_id} />
        {is640 ? (
          <SmallChart
            percent={usd_price_change_24h}
            prices={prices}
            className="w-32 h-12"
          />
        ) : (
          <Percentage percent={usd_price_change_24h} />
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
        {is640 && <Percentage percent={usd_price_change_24h} />}
      </div>
    </div>
  )
}
