'use client'
import React from 'react'
import { cn } from '@/shared/lib'
import { getPoints } from './lib'

interface IChartProps {
  prices: number[]
  percent: number
  className?: string
}

export const SmallChart: React.FC<IChartProps> = ({
  prices,
  className,
  percent,
}) => {
  const ref = React.useRef<SVGSVGElement>(null)
  const [points, setPoints] = React.useState<string>('')
  const strokeColor =
    percent > 0
      ? 'stroke-green-500 dark:stroke-green-600'
      : 'stroke-red-600 dark:stroke-red-700'

  React.useEffect(() => {
    if (!ref.current) return
    const pointsSrt = getPoints(prices, ref.current as any)
    setPoints(pointsSrt)
  }, [ref, prices])
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={cn('inline-block w-full h-full', strokeColor, className)}
      preserveAspectRatio="none"
      // stroke="green"
    >
      <polyline
        points={points}
        strokeLinecap="round"
        strokeWidth="1.4"
        fill="none"
        vectorEffect="non-scaling-stroke"
      ></polyline>
    </svg>
  )
}
