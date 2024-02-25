export class ApiInstance {
  private _baseUrl: string
  constructor(baseUrl: string) {
    this._baseUrl = baseUrl
  }
  fetch = async <R>(url: string): Promise<R> => {
    const response = (await fetch(`${this._baseUrl}/${url}`)).json()
    return response
  }
}
