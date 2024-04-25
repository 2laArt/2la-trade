import { type ITicker } from '@/entities/ticker/model'
import { TickerBySlug, TickerSocket } from '@/features/ticker/ui'
import React from 'react'

export const Ticker: React.FC<{
  ticker: ITicker
  userId: string
  callback: Function
}> = React.memo(({ ticker, userId, callback }) => {
  return ticker.waring ? (
    <TickerBySlug
      userId={userId}
      cardCoin={ticker.coin}
      coinCartId={ticker.coinCartId}
    />
  ) : (
    <TickerSocket
      callback={callback}
      userId={userId}
      coin={ticker.coin}
      prices={ticker.prices}
      info={ticker.info}
      coinCartId={ticker.coinCartId}
    />
  )
})
Ticker.displayName = 'Ticker'
