'use client'
import React from 'react'

import Autoplay from 'embla-carousel-autoplay'
import { CoinCard, type ICoinCard } from '@/features/coin-card'
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui'
import { cn } from '@/shared/lib'

interface ITopMoversSlider {
  coinList: ICoinCard[]
  currency: string
  itemClass?: string
  className?: string
}

export const TopMoversSlider: React.FC<ITopMoversSlider> = ({
  coinList,
  currency,
  className,
  itemClass,
}) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        loop: true,
        align: 'start',
      }}
      className={cn('w-full', className)}
    >
      <CarouselContent className="-ml-3 justify-stretch">
        {coinList.map((coin) => (
          <CarouselItem
            key={coin.token_id}
            className="h-full shrink-1 ml-3 grow-1 basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <CoinCard coin={coin} currency={currency} className={itemClass} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
