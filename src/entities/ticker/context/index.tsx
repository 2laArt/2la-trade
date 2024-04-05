'use client'

import React from 'react'
import {
  ITicker,
  UpdateTickersType,
  type ITickerError,
  type ITickerSuccess,
} from '../model'
import { setTickerPrices } from '../lib'
import { TICKER } from '../config'

interface ITickersContext {
  tickers: ITicker[]
  updateTicker: UpdateTickersType
  setTickers: React.Dispatch<React.SetStateAction<ITicker[]>>
}

export const TickersContext = React.createContext<ITickersContext>(
  {} as ITickersContext
)

export const useTickers = () => {
  const context = React.useContext(TickersContext)
  return context
}
export const TickersProvider: React.FC<React.PropsWithChildren> = React.memo(
  ({ children }) => {
    const [tickers, setTickers] = React.useState<ITicker[]>([])
    const updateTicker: UpdateTickersType = React.useCallback(
      (key, message) => {
        setTickers((prev) => {
          let newState: ITicker[] = []

          for (let i = 0; i < prev.length; i++) {
            const now = Date.now()
            const ticker = prev[i]

            if (
              ticker.key === key &&
              message.type !== 'error' &&
              now - ticker.lastUpdate < TICKER.DELAY
            ) {
              return prev
            }

            if (ticker.key !== key) {
              newState.push(ticker)
              continue
            }
            if (message.type === 'error') {
              newState.push({
                ...ticker,
                waring: (message as ITickerError).reason,
              })
              continue
            }

            const response = message as ITickerSuccess
            const price = Number(response.price)
            const newTicker = !!ticker.info
              ? setTickerPrices(ticker, price)
              : { ...setTickerPrices(ticker, price), info: response }
            newState.push(newTicker)
          }
          return newState
        })
      },
      []
    )
    return (
      <TickersContext.Provider
        value={{
          tickers,
          updateTicker,
          setTickers,
        }}
      >
        {children}
      </TickersContext.Provider>
    )
  }
)
TickersProvider.displayName = 'TickersProvider'
