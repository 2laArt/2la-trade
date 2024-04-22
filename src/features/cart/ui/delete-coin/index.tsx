'use client'
import { useMutationRemoveFromCart } from '@/entities/cart/model'
import { Button, Spinner } from '@/shared/ui'

export const DeleteCoin: React.FC<{ userId: string; userCoinId: string }> = ({
  userId,
  userCoinId,
}) => {
  const { mutate, isPending } = useMutationRemoveFromCart(userId)
  const handler = () => mutate(userCoinId)
  return isPending ? (
    <Spinner size={22} />
  ) : (
    <Button
      size="lg"
      className={
        'px-2 rounded-md h-9 bg-orange-700 text-white text-sm mt-3 transition-colors hover:bg-orange-800'
      }
      disabled={isPending}
      onClick={handler}
      aria-label="Select row"
    >
      Delete
    </Button>
  )
}
