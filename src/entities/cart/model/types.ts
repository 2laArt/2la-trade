export interface IUserCart {
  data: {
    id: string
    userId: string
    coinId: null
    coins: IUserCartCoin[]
  }
  total: number
}
export interface IUserCartCoin extends ICartCoin {
  coin: ICoinDB
}
export interface ICartCoin {
  id: string
  userCartId: string
  coinId: string
  quantity: number
  userId: string | null
}
export interface ICoinDB {
  id: string
  tokenId: number
  name: string | null
  symbol: string | null
  slug: string
  price: number | null
  createdAt: Date
}
export interface ICreationCoin {
  tokenId: number
  name: string
  symbol: string
  slug: string
  price: number
}

export interface IUserCartInfo {
  id: string
  userId: string
  coinId: string | null
}
export interface IAddCoinToCart {
  coin: ICreationCoin
  userId: string
}
export interface IAddCreatedCoin {
  userCartId: string
  coinId: string
}

export interface IAddCoinAction {
  userCartId: string
  coin: ICreationCoin
}
// TODO: requires editing
export interface IFindUserCoin {
  userId: string
  slug: string
}
export interface ISwitchUserCoinParams {
  userId: string
  coin: ICreationCoin
}
