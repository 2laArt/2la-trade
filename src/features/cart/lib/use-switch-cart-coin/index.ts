import {
  type ICreationCoin,
  type IUserCart,
  useMutationAddToCart,
  useMutationRemoveFromCart,
} from '@/entities/cart/model'

export const useSwitchCartCoin = ({
  coin,
  cart,
}: {
  coin: ICreationCoin
  cart: IUserCart
}) => {
  const {
    data: { userId, id },
  } = cart
  const {
    mutate: addToCart,
    isPending: pendingAdd,
    isError: errorAdd,
    isSuccess: successAdd,
  } = useMutationAddToCart({ userCartId: id, userId: userId })
  const {
    mutate: removeFromCart,
    isPending: pendingRemove,
    isError: errorRemove,
    isSuccess: successRemove,
  } = useMutationRemoveFromCart(userId)

  const foundCoin = cart.data.coins.find(
    (item) => item?.coin?.slug === coin.slug
  )
  const mutate = () =>
    foundCoin ? removeFromCart(foundCoin.id) : addToCart(coin)
  const isPending = pendingAdd || pendingRemove
  const isError = errorAdd || errorRemove
  const isSuccess = successRemove || successAdd
  return { mutate, isPending, isError, isSuccess }
}
