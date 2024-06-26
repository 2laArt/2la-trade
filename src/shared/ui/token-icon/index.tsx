'use client'
import { cn } from '@/shared/lib'
import NextImage from 'next/image'
import React from 'react'

export const TokenIcon: React.FC<{
  symbol: string
  slug: string
  token_id: number
  className?: string
}> = ({ symbol, slug, token_id, className }) => {
  const [iconSrc, setIconSrc] = React.useState<string>()
  const hue = 360
  const tokenColor = `hsl(${token_id > hue ? token_id % hue : token_id}, 100%, 50%)`
  const getImage = React.useCallback((slug: string) => {
    const img = new Image()
    const url = `${process.env.NEXT_PUBLIC_CRYPTO_STATIC}/token/icons/${slug}/color_icon.png`
    img.src = url
    img.addEventListener('load', () => setIconSrc(url))
    img.addEventListener('error', () =>
      console.info(`${slug} image is not exist`)
    )
  }, [])
  React.useEffect(() => {
    getImage(slug)
  }, [getImage, slug])
  return (
    <span className={cn('inline-block', className)}>
      {iconSrc ? (
        <NextImage
          alt={`${slug} icon`}
          priority
          src={iconSrc}
          width={40}
          height={40}
        />
      ) : (
        <div
          style={{
            backgroundColor: tokenColor,
          }}
          className="w-10 rounded-full h-10 leading-10 text-sm text-black font-medium text-center"
        >
          {symbol.slice(0, 2)}
        </div>
      )}
    </span>
  )
}
