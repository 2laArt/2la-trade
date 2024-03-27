import type { IUserCart } from '@/entities/cart/model'

export const isAddedToCart = ({
  slug,
  cart,
}: {
  slug: string
  cart: IUserCart
}): boolean => {
  const isInCart = cart.data.coins.some((coin) => coin.coin.slug === slug)
  return isInCart
}
