// 'https://price-api.crypto.com/price/v1/all-ranks'
// 'https://price-api.crypto.com/price/v1/tags'
// `https://price-api.crypto.com/chart/v1/30d/${slug}`

class PriceApiCrypto {
  private _baseUrl = 'https://price-api.crypto.com'
  private _fetch = async (url: string) => {
    const response = (await fetch(`${this._baseUrl}/${url}`)).json()
    return response
  }
  getCoinList = async (page: number, limit: number) =>
    await this._fetch(`price/v1/tokens?page=${page}&limit=${limit}`)
  getAllToken = async () => await this._fetch('meta/v1/all-tokens')
  getFiatToDollar = async () => await this._fetch('price/v1/currency/all')
  getNews = async () => await this._fetch('market/v2/token/2/news')
  getIcons = async () => await this._fetch('meta/v1/all-coin-launches')
  getPeriods = async (slug: string, fiat: string) =>
    await this._fetch(`price/v1/statistics/${slug}?convert=${fiat}`)
  getTopMovers = async (count: number) =>
    await this._fetch(
      `price/v1/top-movers?depth=${count}&tradable_on=EXCHANGE-OR-APP`
    )
}

export const cryptoServices = new PriceApiCrypto()