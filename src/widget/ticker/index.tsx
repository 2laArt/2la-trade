import { type ITicker } from '@/entities/ticker/model'
import { TickerBySlug, TickerSocket } from '@/features/ticker/ui'
import React from 'react'

export const Ticker: React.FC<{ ticker: ITicker }> = React.memo(
  ({ ticker }) => {
    return ticker.waring ? (
      <TickerBySlug cardCoin={ticker.coin} />
    ) : (
      <TickerSocket
        coin={ticker.coin}
        prices={ticker.prices}
        info={ticker.info}
      />
    )
  }
)
Ticker.displayName = 'Ticker'
