export const formatToCurrency = (
  price: number,
  options?: Intl.NumberFormatOptions
) => new Intl.NumberFormat('ru-RU', options).format(price)
// en-US
// ru-RU
// ja-JP
