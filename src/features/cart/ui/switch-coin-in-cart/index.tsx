'use client'
import { Checkbox, Spinner } from '@/shared/ui'
import React from 'react'
import { isAddedToCart, useSwitchCartCoin } from '../../lib'
import { ICreationCoin, IUserCart } from '@/entities/cart/model'

export const SwitchCoinInCart: React.FC<{
  coin: ICreationCoin
  cart: IUserCart
}> = ({ coin, cart }) => {
  console.log('switch component')
  const isInCart = isAddedToCart({ slug: coin.slug, cart })
  const { mutate, isPending } = useSwitchCartCoin({
    cart,
    coin,
  })
  const handleChange = () => {
    mutate()
  }
  return isPending ? (
    <Spinner size={22} />
  ) : (
    <Checkbox
      size="lg"
      className="max-sm:w-4 z-[2]"
      variant="star"
      checked={isInCart}
      disabled={isPending}
      onCheckedChange={handleChange}
      aria-label="Select row"
    />
  )
}
