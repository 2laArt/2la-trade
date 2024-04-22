'use client'
import { SwitchCoinInCart } from '@/features/cart/ui/switch-coin-in-cart'
import { cn } from '@/shared/lib'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Percentage,
  TokenIcon,
} from '@/shared/ui'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'

const rowVariants = cva('font-medium', {
  variants: {
    variant: {
      green: 'text-green-500 font-semibold text-sm',
      red: 'text-red-600 font-semibold text-sm',
      default: 'text-black dark:text-white/60',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
interface IProps extends VariantProps<typeof rowVariants> {
  label: React.ReactNode | string
  children: React.ReactNode
  className?: string
}
const TickerRow: React.FC<IProps> = ({
  label,
  children,
  variant,
  className,
}) => {
  return (
    <div className={cn('text-xs my-1', className)}>
      <span className="font-semibold pr-1">{label}:</span>
      <span className={cn(rowVariants({ variant }))}>{children}</span>
    </div>
  )
}

const TickerWidgetTitle: React.FC<{ children: string }> = ({ children }) => {
  return <h6 className="text-sm mb-2 font-semibold">{children}</h6>
}

const TickerHeader: React.FC<{
  slug: string
  token_id: number
  name: string
  percent?: number
}> = ({ name, slug, token_id, percent }) => {
  return (
    <div className="flex gap-5 mb-3 justify-between items-center">
      <h4 className="flex gap-4  items-center">
        <TokenIcon slug={slug} symbol={name} token_id={token_id} />
        <span className="font-medium truncate max-sm:max-w-28">{name}</span>
      </h4>
      <div className="flex text-sm gap-2 items-center font-medium">
        <h6>Profit:</h6>
        <div className="font-semibold text-base">
          {percent ? <Percentage percent={percent} /> : '-'}
        </div>
      </div>
    </div>
  )
}

const TickerWidget: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'bg-slate-50 dark:bg-slate-800/40 rounded-xl shadow-sm p-3 text-left',
        className
      )}
    >
      {children}
    </div>
  )
}
const TickerPricesList: React.FC<{
  prices: number[]
}> = ({ prices }) => {
  return (
    <div className="max-h-[270px] p-2 h-full max-w-28 items-center flex  flex-col gap-1 text-xs text-white top-0 left-0 ">
      {prices
        .reduceRight(
          (acc: React.ReactNode[], price, idx, origen) => [
            ...acc,
            <span
              className={cn(
                'text-ellipsis whitespace-nowrap overflow-x-hidden  max-w-24',
                origen[idx - 1] > price
                  ? 'dark:text-red-400 text-red-600'
                  : 'dark:text-green-400 text-green-600'
              )}
              key={idx}
            >
              {price}
            </span>,
          ],
          []
        )
        .slice(0, 13)}
    </div>
  )
}

export {
  TickerRow,
  TickerWidgetTitle,
  TickerWidget,
  TickerHeader,
  TickerPricesList,
}
