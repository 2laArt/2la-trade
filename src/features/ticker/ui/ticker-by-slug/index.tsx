import { type ICoinDB } from '@/entities/cart/model'
import { TICKER } from '@/entities/ticker/config'
import {
  TickerDrawer,
  TickerHeader,
  TickerPricesList,
  TickerRow,
  TickerSkeleton,
  TickerWidget,
  TickerWidgetTitle,
} from '@/entities/ticker/ui'

import { ChartBars } from '@/shared/ui'
import { ArrowDown } from 'lucide-react'
import React from 'react'

import { useQueryCoinBySlug } from '@/entities/coin/model'
import { formatDate, percentDifference } from '@/shared/lib'
import { DeleteCoin } from '@/features/cart/ui/delete-coin'

export const TickerBySlug: React.FC<{
  cardCoin: ICoinDB
  userId: string
  coinCartId: string
}> = ({ cardCoin, userId, coinCartId }) => {
  const { data: coin } = useQueryCoinBySlug(cardCoin.slug)
  const percent = coin
    ? percentDifference(Number(coin.usd_price), Number(cardCoin.price))
    : 0
  const isProfit = coin?.usd_price_change_24h || -1 >= 0

  const variant = isProfit ? 'green' : 'red'
  const prices = coin ? coin.prices.slice(-20) : []

  const header = (
    <TickerHeader
      name={cardCoin.name || ''}
      percent={percent}
      slug={cardCoin.slug}
      token_id={cardCoin.tokenId}
    />
  )
  return (
    <section className="card p-4">
      {header}
      {coin ? (
        <>
          <div className="flex gap-3 justify-center [&>div]:flex-grow-[1] [&>div]:w-1/2 max-md:flex-wrap">
            <TickerWidget>
              <TickerWidgetTitle>Purchase</TickerWidgetTitle>
              <TickerRow label={'Date'}>
                {formatDate(cardCoin.createdAt)}
              </TickerRow>
              <TickerRow label={'Price'} variant={'green'}>
                ${cardCoin.price}
              </TickerRow>
              <ArrowDown className="my-3" />
              <TickerWidgetTitle>Now</TickerWidgetTitle>
              <TickerRow label={'Date'}>
                {formatDate(new Date(coin.update_time))}
              </TickerRow>
              <TickerRow label={'Price'} variant={variant}>
                ${coin.usd_price}
              </TickerRow>
            </TickerWidget>

            <TickerWidget>
              <TickerWidgetTitle>Market Cap</TickerWidgetTitle>
              <TickerRow label={'USD'}>{coin.usd_marketcap}</TickerRow>
              <TickerRow label={'BTC'}>{coin.btc_marketcap}</TickerRow>
              <TickerRow label={'Max Supply'}>${coin.max_supply}</TickerRow>
              <div className="my-3 w-full h-[1px] dark:bg-gray-700 bg-gray-300" />
              <TickerWidgetTitle>Volume</TickerWidgetTitle>
              <TickerRow label={'USD 24h'}>{coin.usd_volume_24h}</TickerRow>
              <TickerRow label={'BTC 30d'}>{coin.btc_volume_24h}</TickerRow>
            </TickerWidget>
          </div>

          <div className="flex justify-between items-center">
            <TickerDrawer className="mt-3" title={header}>
              <div className="flex items-end">
                <TickerPricesList prices={prices} />
                <ChartBars limit={TICKER.MAX_TICKER_PRICES} prices={prices} />
              </div>
            </TickerDrawer>
            <DeleteCoin userCoinId={coinCartId} userId={userId} />
          </div>
        </>
      ) : (
        <TickerSkeleton />
      )}
    </section>
  )
}
