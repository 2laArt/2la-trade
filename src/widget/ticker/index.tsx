import { type ITicker } from '@/entities/ticker/model'
import { TickerBySlug, TickerSocket } from '@/features/ticker/ui'
import React from 'react'

export const Ticker: React.FC<{ ticker: ITicker; userId: string }> = React.memo(
  ({ ticker, userId }) => {
    return ticker.waring ? (
      <TickerBySlug userId={userId} cardCoin={ticker.coin} />
    ) : (
      <TickerSocket
        userId={userId}
        coin={ticker.coin}
        prices={ticker.prices}
        info={ticker.info}
      />
    )
  }
)
Ticker.displayName = 'Ticker'
