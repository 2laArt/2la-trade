import { type ICoinDB } from '@/entities/cart/model'
import { TICKER } from '@/entities/ticker/config'
import { type ITickerSuccess } from '@/entities/ticker/model'
import {
  TickerDrawer,
  TickerHeader,
  TickerRow,
  TickerSkeleton,
  TickerWidget,
  TickerWidgetTitle,
} from '@/entities/ticker/ui'

import { formatDate, percentDifference } from '@/shared/lib'
import { ChartBars } from '@/shared/ui'
import { ArrowDown } from 'lucide-react'
import React from 'react'

export const TickerSocket: React.FC<{
  coin: ICoinDB
  info?: ITickerSuccess
  prices: number[]
}> = ({ coin, info, prices }) => {
  const price = prices[prices.length - 1]
  const percent = percentDifference(Number(price), Number(coin.price))
  const isProfit = percent > 0
  const variant = isProfit ? 'green' : 'red'
  const header = (
    <TickerHeader
      name={coin.name || ''}
      percent={percent}
      slug={coin.slug}
      token_id={coin.tokenId}
    />
  )

  return (
    <section className="card p-4">
      {header}
      {info ? (
        <>
          <div className="flex gap-3 justify-center [&>div]:flex-grow-[1] [&>div]:w-1/2 max-md:flex-wrap">
            <TickerWidget>
              <TickerWidgetTitle>Purchase</TickerWidgetTitle>
              <TickerRow label={'Date'}>{formatDate(coin.createdAt)}</TickerRow>
              <TickerRow label={'Price'} variant={'green'}>
                ${coin.price}
              </TickerRow>
              <ArrowDown className="my-3" />
              <TickerWidgetTitle>Now</TickerWidgetTitle>
              <TickerRow label={'Date'}>
                {formatDate(new Date(info.time))}
              </TickerRow>
              <TickerRow label={'Price'} variant={variant}>
                ${price}
              </TickerRow>
            </TickerWidget>

            <TickerWidget>
              <TickerWidgetTitle>Moving 24H</TickerWidgetTitle>
              <TickerRow label={'Open'} variant={variant}>
                ${info.open_24h}
              </TickerRow>
              <TickerRow label={'Low'} variant={variant}>
                ${info.low_24h}
              </TickerRow>
              <TickerRow label={'High'} variant={variant}>
                ${info.high_24h}
              </TickerRow>
              <div className="my-3 w-full h-[1px] dark:bg-gray-700 bg-gray-300" />
              <TickerWidgetTitle>Volume</TickerWidgetTitle>
              <TickerRow label={'24h'}>
                {info.volume_24h} {coin.symbol}
              </TickerRow>
              <TickerRow label={'30d'}>
                {info.volume_30d} {coin.symbol}
              </TickerRow>
            </TickerWidget>
          </div>

          <TickerDrawer className="mt-3" title={header}>
            <ChartBars limit={TICKER.MAX_TICKER_PRICES} prices={prices} />
          </TickerDrawer>
        </>
      ) : (
        <TickerSkeleton />
      )}
    </section>
  )
}
