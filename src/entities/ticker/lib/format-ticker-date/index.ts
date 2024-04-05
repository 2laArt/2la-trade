export const formatTickerDate = (date: Date) => {
  const dateStr = new Date(date).toUTCString()
  const start = dateStr.indexOf(',') + 1
  const end = dateStr.indexOf('GMT')
  return dateStr.substring(start, end)
}
