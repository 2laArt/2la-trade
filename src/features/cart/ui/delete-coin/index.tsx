'use client'
import { useMutationRemoveFromCart } from '@/entities/cart/model'
import { Button, Spinner } from '@/shared/ui'

export const DeleteCoin: React.FC<{
  userId: string
  userCoinId: string
  callback?: Function
}> = ({ userId, userCoinId, callback }) => {
  const { mutate, isPending } = useMutationRemoveFromCart(userId)
  const handler = () => {
    mutate(userCoinId)
    callback && callback()
  }
  return (
    <Button
      size="lg"
      className={
        'px-2 rounded-md h-9 bg-orange-700 grid place-items-center text-sm mt-3 transition-colors hover:bg-orange-800 text-white min-w-16'
      }
      disabled={isPending}
      onClick={handler}
      aria-label="Select row"
    >
      {isPending ? <Spinner size={20} /> : 'Delete'}
    </Button>
  )
}
