export const getPoints = (arr: number[], current: SVGSVGElement) => {
  const { height, width } = current.getBoundingClientRect()
  const [max, min] = [Math.max.apply(this, arr), Math.min.apply(this, arr)]
  const range = max - min
  const step = width / arr.length
  let points = ''
  for (let i = 0; i < arr.length; i++) {
    const x = Math.floor(i * step)
    const y = Math.floor(((max - arr[i]) / range) * height)
    points += `${!!i ? ',' : ''} ${x} ${y}`
  }
  return points
}
