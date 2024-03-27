import { useMutation, useQuery } from '@tanstack/react-query'
import { cartService } from './api'
import { keyFactory } from '@/entities/key-factory'
import { ICreationCoin, IUserCart } from './types'
import { addCartCoin, removeCartCoin } from '../actions'
import { queryClient } from '@/shared/api'
import { useUserCart } from '../context'

export const useQueryGetUserCart = (userId: string) => {
  const { setUserCart } = useUserCart()

  const query = useQuery({
    queryKey: keyFactory.cart(userId),
    queryFn: async () => {
      const cart = await cartService.getCart(userId)
      setUserCart(cart)
      return cart
    },
  })

  return query
}

export const useMutationAddToCart = ({
  userCartId,
  userId,
}: {
  userCartId: string
  userId: string
}) => {
  const { setUserCart } = useUserCart()
  const mutation = useMutation({
    mutationFn: async (coin: ICreationCoin) => {
      return addCartCoin({ coin, userCartId })
    },
    onSuccess(data, variables, context) {
      queryClient.setQueryData(
        keyFactory.cart(userId),
        (oldSate: IUserCart) => {
          const newCart = {
            ...oldSate,
            data: { ...oldSate.data, coins: [...oldSate.data.coins, data] },
          }
          setUserCart(newCart)
          return newCart
        }
      )
    },
  })
  return mutation
}
export const useMutationRemoveFromCart = (userId: string) => {
  const { setUserCart } = useUserCart()
  const mutation = useMutation({
    mutationFn: async (userCoinId: string) => {
      return removeCartCoin(userCoinId)
    },
    onSuccess(data, variables, context) {
      queryClient.setQueryData(
        keyFactory.cart(userId),
        (oldSate: IUserCart) => {
          const newCart = {
            ...oldSate,
            data: {
              ...oldSate.data,
              coins: oldSate.data.coins.filter(
                (coin) => coin.coin.id !== data.id
              ),
            },
          }
          setUserCart(newCart)
          return newCart
        }
      )
    },
  })
  return mutation
}
