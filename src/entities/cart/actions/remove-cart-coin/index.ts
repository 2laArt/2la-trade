import { ICoinDB, cartService } from '../../model'

export const removeCartCoin = async (userCoinId: string): Promise<ICoinDB> => {
  try {
    const userCoin = await cartService.removeUserCoin(userCoinId)
    return await cartService.removeCoin(userCoin.coinId)
  } catch (error: any) {
    return error
  }
}
