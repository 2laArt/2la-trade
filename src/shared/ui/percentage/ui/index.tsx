import { cn, formatPercentage } from '@/shared/lib'
import { type FC } from 'react'

export const Percentage: FC<{ percent: number; className?: string }> = ({
  percent,
  className,
}) => {
  const textColor =
    percent > 0
      ? 'text-green-500 dark:text-green-600'
      : 'text-red-600 dark:text-red-700'

  return (
    <div className={cn(textColor, className)}>{formatPercentage(percent)}</div>
  )
}
