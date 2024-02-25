import { ApiInstance, type ICoinsPageParams } from '@/shared/api'
import type { ICoinList, ICoinShort } from './types'

const instance = new ApiInstance(
  `${process.env.NEXT_PUBLIC_CRYPTO_COM_URL}/price/v1`
)

export const getTopMovers = async (count: number): Promise<ICoinShort[]> =>
  await instance.fetch(`top-movers?depth=${count}&tradable_on=EXCHANGE-OR-APP`)

export const getCoinsPage = async ({
  limit,
  page,
}: ICoinsPageParams): Promise<ICoinList> =>
  await instance.fetch(`tokens?page=${page}&limit=${limit}`)
