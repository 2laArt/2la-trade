'use client'
import { useUserCart } from '@/entities/cart/context'
import { TickersProvider, useTickers } from '@/entities/ticker/context'
import { TickerClass } from '@/entities/ticker/lib'
import { type ITicker, useTickersSocket } from '@/entities/ticker/model'
import { Spinner } from '@/shared/ui'
import { Ticker } from '@/widget/ticker'
import React from 'react'

const Main = () => {
  const { userCart } = useUserCart()
  const { updateTicker, setTickers, tickers } = useTickers()
  const { subscribeToUpdate } = useTickersSocket(updateTicker)
  const isMount = React.useRef(true)
  React.useEffect(() => {
    if (!tickers.length && userCart?.data.coins.length) {
      const coins = userCart.data.coins
      let favorites: ITicker[] = []
      for (let i = 0; i < coins.length; i++) {
        if (!!coins[i].coin.symbol) {
          favorites.push(new TickerClass(coins[i].coin))
        }
      }

      setTickers(favorites)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userCart])
  React.useEffect(() => {
    if (tickers.length > 0 && isMount.current) {
      isMount.current = false
      const symbols = tickers.map((item) => item.key)
      subscribeToUpdate(symbols)
    }
  }, [subscribeToUpdate, tickers])
  if (isMount.current)
    return (
      <div className="grid h-[50vh] place-items-center">
        <Spinner size={50} />
      </div>
    )
  return !!tickers.length && userCart ? (
    <div className="grid lg:grid-cols-2 [&>*]:w-full grid-cols-1 gap-5">
      {tickers.map((item) => (
        <Ticker
          userId={userCart?.data.userId}
          ticker={item}
          key={item.coin.id}
        />
      ))}
    </div>
  ) : (
    <h6 className="text-center text-2xl">No Traceable Coins</h6>
  )
}

const Tickers: React.FC = () => {
  return (
    <TickersProvider>
      <Main />
    </TickersProvider>
  )
}

export default Tickers
