export class ApiInstance {
  private _baseUrl: string
  constructor(baseUrl: string) {
    this._baseUrl = baseUrl
  }
  protected fetch = async <R>(
    url: string,
    config?: RequestInit
  ): Promise<R> => {
    const response = (
      await fetch(`${this._baseUrl}/${url}`, {
        method: 'get',
        ...(config || {}),
      })
    ).json()
    return response as R
  }
  protected getSearchParams = <T extends Object>(params: T) =>
    new URLSearchParams(Object.entries(params)).toString()
  protected bodyJson = (body: unknown) => JSON.stringify(body)
}
