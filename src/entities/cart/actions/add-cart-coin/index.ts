import { IAddCoinAction, IUserCartCoin, cartService } from '../../model'

export const addCartCoin = async ({
  coin,
  userCartId,
}: IAddCoinAction): Promise<IUserCartCoin> => {
  try {
    const newCoin = await cartService.createNewCoin(coin)

    const newUserCoin = await cartService.addToCart({
      userCartId,
      coinId: newCoin.id,
    })
    return { ...newUserCoin, coin: newCoin }
  } catch (error: any) {
    return error
  }
}
