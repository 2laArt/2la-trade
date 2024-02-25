'use client'
import React from 'react'

import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { CoinCard, type ICoinShort } from '@/entities/coin'

interface ITopMoversSlider {
  coinList?: ICoinShort[]
  currency: string
  itemClass?: string
  className?: string
  isLoading: boolean
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
      <CarouselContent className="-ml-2 justify-stretch">
        {!!coinList ? (
          coinList.map((coin) => (
            <CarouselItem
              key={coin.token_id}
              className="h-full shrink-1 pl-2 grow-1 basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <CoinCard coin={coin} currency={currency} className={itemClass} />
            </CarouselItem>
          ))
        ) : (
          <SkeletonCards />
        )}
      </CarouselContent>
    </Carousel>
  )
}
const SkeletonCards: React.FC = () => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, idx) => (
        <CarouselItem
          key={idx}
          className="pl-2 basis-1/2 md:basis-1/3 lg:basis-1/4"
        >
          <div className="dark:bg-slate-900 flex flex-col justify-between h-[152px] bg-white p-2 sm:p-5  rounded-sm">
            <div className="flex justify-between items-center">
              <div className="skeleton rounded-md w-10 h-10 mr-2" />
              <div className="skeleton rounded-md w-2/4 h-10" />
            </div>
            <div>
              <div className="skeleton rounded-md w-full h-4 my-2" />
              <div className="skeleton rounded-md w-full h-4 my-2" />
            </div>
          </div>
        </CarouselItem>
      ))}
    </>
  )
}
