import type {
  IUserCart,
  ICartCoin,
  IUserCartInfo,
  IAddCreatedCoin,
  ICreationCoin,
  ICoinDB,
  IFindUserCoin,
} from './types'
import { ApiInstance } from '@/shared/api'

const baseUrl = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api`

export class CartService extends ApiInstance {
  checkCart = async (userId: string): Promise<IUserCartInfo | null> => {
    const url = `cart/check-cart?userId=${userId}`
    const { data } = await this.fetch<{ data: IUserCartInfo | null }>(url)
    return data
  }
  async createCart(userId: string): Promise<IUserCartInfo> {
    const url = `cart/create?userId=${userId}`
    const { data } = await this.fetch<{ data: IUserCartInfo }>(url)
    return data
  }
  async getCart(userId: string): Promise<IUserCart> {
    const url = `cart?userId=${userId}`
    const response = await this.fetch<IUserCart>(url)
    return response
  }
  async addToCart(params: IAddCreatedCoin): Promise<ICartCoin> {
    const url = `cart/add`
    const { data } = await this.fetch<{ data: ICartCoin }>(url, {
      method: 'post',
      body: this.bodyJson(params),
    })
    return data
  }
  async createNewCoin(params: ICreationCoin): Promise<ICoinDB> {
    const url = `coin`
    const { data } = await this.fetch<{ data: ICoinDB }>(url, {
      method: 'post',
      body: this.bodyJson(params),
    })
    return data
  }
  async removeCoin(coinId: string): Promise<ICoinDB> {
    const url = `coin/${coinId}`
    const { data } = await this.fetch<{ data: ICoinDB }>(url, {
      method: 'delete',
    })
    return data
  }
  async findUserCoin(params: IFindUserCoin): Promise<ICartCoin | null> {
    const searchParams = this.getSearchParams(params)
    const url = `cart/coin/?${searchParams}`
    console.log(url)

    const { data } = await this.fetch<{ data: ICartCoin | null }>(url)
    return data
  }

  async removeUserCoin(userCoinId: string): Promise<ICartCoin> {
    const url = `cart/coin/${userCoinId}`
    const { data } = await this.fetch<{ data: ICartCoin }>(url, {
      method: 'delete',
    })
    return data
  }

  async updateUserCoin(userCoinId: string, count: number): Promise<ICartCoin> {
    const url = `cart/coin/${userCoinId}`
    const { data } = await this.fetch<{ data: ICartCoin }>(url, {
      method: 'put',
      body: this.bodyJson({ count }),
    })
    return data
  }
}

export const cartService = new CartService(baseUrl)
