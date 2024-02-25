import { type FC } from 'react'

export const TokenIcon: FC<{
  icon?: string
  symbol: string
  slug: string
  token_id: number
}> = ({ icon, symbol, slug, token_id }) => {
  const hue = 360
  const tokenColor = `hsl(${token_id > hue ? token_id % hue : token_id}, 100%, 50%)`
  return icon ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={icon} alt={`${slug} icon`} className="w-10 h-10" />
  ) : (
    <div
      style={{
        backgroundColor: tokenColor,
      }}
      className="w-10 rounded-full h-10 leading-10 text-sm text-black font-medium text-center mr-2"
    >
      {symbol.slice(0, 2)}
    </div>
  )
}
