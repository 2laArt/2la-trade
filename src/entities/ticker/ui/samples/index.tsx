'use client'
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
const TickerDrawer: React.FC<{
  title: React.ReactNode
  children: React.ReactNode
  className?: string
}> = ({ children, title, className }) => {
  return (
    <Drawer>
      <DrawerTrigger
        className={cn(
          'bg-blue-700 p-2 rounded-md text-white text-sm transition-colors hover:bg-blue-800',
          className
        )}
      >
        Show Chart
      </DrawerTrigger>
      <DrawerContent className="justify-between">
        <div className="max-w-3xl w-full flex flex-col mx-auto">
          <DrawerHeader>
            <DrawerTitle asChild>{title}</DrawerTitle>
          </DrawerHeader>
        </div>
        <div className="max-w-3xl w-full flex flex-col px-1 mx-auto">
          <DrawerDescription asChild>{children}</DrawerDescription>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export {
  TickerRow,
  TickerWidgetTitle,
  TickerWidget,
  TickerDrawer,
  TickerHeader,
}
