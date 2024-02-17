'use client'

import React from 'react'
import { cryptoServices } from '@/shared/api'

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

export interface ICoinListResponse {
  data: ICoinList[]
  total: number
}
interface ICoinContext {
  coinList: ICoinListResponse
  getTableItems: (page?: number, limit?: number) => void
}
const startValue: ICoinListResponse = {
  data: [] as ICoinList[],
  total: 0,
}
const defaultContext = {
  coinList: startValue,
  getTableItems: () => {},
}
export const CoinListContext = React.createContext<ICoinContext>(defaultContext)

export const useCoinList = () => {
  const context = React.useContext(CoinListContext)
  return context
}
export const CoinListProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [coinList, setCoinLIst] = React.useState<ICoinListResponse>(startValue)
  const getTableItems = async (page?: number, limit?: number) => {
    const response = await cryptoServices.getCoinList(page ?? 1, limit ?? 50)
    if (response) setCoinLIst(response)
  }

  return (
    <CoinListContext.Provider
      value={{
        coinList,
        getTableItems,
      }}
    >
      {children}
    </CoinListContext.Provider>
  )
}
