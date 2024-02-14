'use client'

import React from 'react'
import { getCoinList } from '../lib'

export interface ICoinList {
  icon?: string
  active: true
  app_symbol: string
  app_tradable: boolean
  exchange_tradable: boolean
  id: number
  name: string
  prices: number[]
  rank: number
  slug: string
  symbol: string
  token_id: number
  usd_marketcap: number
  usd_price: number
  usd_price_change_24h: number
  usd_volume_24h: number
}
interface ICoinContext {
  coinList: ICoinList[]
  setCoinLIst: React.Dispatch<React.SetStateAction<ICoinList[]>>
}
const startValue = [] as ICoinList[]
const defaultContext = {
  coinList: startValue,
  setCoinLIst: () => {},
}
export const CoinListContext = React.createContext<ICoinContext>(defaultContext)

export const useCoinList = () => {
  const context = React.useContext(CoinListContext)
  return context
}
export const CoinListProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [coinList, setCoinLIst] = React.useState<ICoinList[]>(startValue)
  const getList = async () => {
    const response = await getCoinList()
    if (response) setCoinLIst(response)
  }
  React.useEffect(() => {
    getList()
  }, [])

  return (
    <CoinListContext.Provider
      value={{
        coinList,
        setCoinLIst,
      }}
    >
      {children}
    </CoinListContext.Provider>
  )
}
