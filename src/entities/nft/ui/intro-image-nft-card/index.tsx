import { cn } from '@/shared/lib'
import Image from 'next/image'
import React from 'react'

export const IntroImageNftCard: React.FC<{
  image: string
  name: string
  title: string
  className?: string
  warnMark?: boolean
}> = ({ image, name, title, className, warnMark }) => {
  return (
    <div
      className={cn(
        'w-1/2 max-h-full aspect-square rounded-xl min-[870px]:w-[calc(50%-8px)] min-[870px]:absolute relative min-[870px]:top-0 after:content-[""] after:absolute after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:via-transparent after:to-transparent after:from-[rgba(0,0,0,0.7)] after:rounded-xl overflow-hidden',
        className
      )}
    >
      {warnMark && (
        <div className="absolute top-0 w-full p-4 uppercase text-black opacity-50 text-center font-semibold z-[1]">
          condemn
        </div>
      )}
      <div className="absolute bottom-0  w-full p-4 z-[1]">
        <h6 className="text-opacity-50 text-sm text-white mb-1">{title}</h6>
        <span className="text-white font-semibold">{name}</span>
      </div>
      <Image alt={name} src={image} fill priority={false} />
    </div>
  )
}
