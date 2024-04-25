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
  const { subscribeToUpdate, unsubscribeToUpdate } =
    useTickersSocket(updateTicker)
  const isMount = React.useRef(true)
  React.useEffect(() => {
    if (!tickers.length && userCart?.data.coins.length) {
      const coins = userCart.data.coins

      let favorites: ITicker[] = []
      for (let i = 0; i < coins.length; i++) {
        if (!!coins[i].coin.symbol) {
          const ticker = new TickerClass(coins[i].coin, coins[i].id)
          favorites.push(ticker)
        }
      }
      setTickers(favorites)
    }
  }, [setTickers, tickers.length, userCart])

  React.useEffect(() => {
    const coins = userCart?.data.coins
    if (!coins?.length || !tickers.length) return
    if (tickers.length === coins.length) return
    setTickers((prev) =>
      prev.filter(
        (item) => coins.some((el) => el.coin.id === item.coin.id) && item
      )
    )
  }, [setTickers, tickers.length, userCart?.data.coins])

  React.useEffect(() => {
    if (tickers.length > 0 && isMount.current) {
      isMount.current = false
      const symbols = tickers.map((item) => item.key)
      subscribeToUpdate(symbols)
    }
  }, [subscribeToUpdate, tickers])

  if (!tickers.length)
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
          callback={unsubscribeToUpdate}
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
