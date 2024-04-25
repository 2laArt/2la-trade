import type { ICoinDB, IUserCartCoin } from '@/entities/cart/model'
import type { ITickerSuccess } from '../../model'

export class TickerClass {
  public key: string
  public coin: ICoinDB
  public prices: number[]
  public waring?: string
  public info?: ITickerSuccess
  public lastUpdate: number
  public coinCartId: string
  constructor(coin: ICoinDB, coinCartId: string) {
    this.key = coin.symbol || ''
    this.coinCartId = coinCartId
    this.coin = coin
    this.prices = []
    this.waring
    this.info
    this.lastUpdate = Date.now()
  }
}
