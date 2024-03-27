'use client'

import React from 'react'

interface ICoinContext {
  coinList: any
  getTableItems: (page?: number, limit?: number) => void
}
const startValue: any = {
  data: [],
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
  const [coinList, setCoinLIst] = React.useState<any>(startValue)
  const getTableItems = async (page?: number, limit?: number) => {
    const response = 'some fetch data'
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
