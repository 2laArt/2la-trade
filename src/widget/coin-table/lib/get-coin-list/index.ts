import { cryptoServices } from '@/shared/api'

export const getCoinList = async () => {
  try {
    const response = await cryptoServices.getCoinList('1', '10')

    return response
  } catch (e) {
    return e
  } finally {
  }
}
