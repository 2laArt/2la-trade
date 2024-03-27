'use client'

import React from 'react'
import { type IUserCart } from '../model'

interface IUserCartContext {
  userCart?: IUserCart
  setUserCart: (userCart: IUserCart) => void
}

const defaultContext: IUserCartContext = {
  userCart: undefined,
  setUserCart: () => {},
}
export const UserCartContext =
  React.createContext<IUserCartContext>(defaultContext)

export const useUserCart = () => {
  const context = React.useContext(UserCartContext)
  return context
}
export const UserCartProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [userCart, setUserCart] = React.useState<IUserCart>()

  return (
    <UserCartContext.Provider
      value={{
        userCart,
        setUserCart,
      }}
    >
      {children}
    </UserCartContext.Provider>
  )
}
