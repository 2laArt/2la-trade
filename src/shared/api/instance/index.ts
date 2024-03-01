export class ApiInstance {
  private _baseUrl: string
  constructor(baseUrl: string) {
    this._baseUrl = baseUrl
  }
  protected fetch = async <R, E = any>(url: string): Promise<R | E> => {
    try {
      const response = (await fetch(`${this._baseUrl}/${url}`)).json()
      return response as R
    } catch (e) {
      return e as E
    }
  }
  protected getSearchParams = <T extends Object>(params: T) =>
    new URLSearchParams(Object.entries(params)).toString()
}
