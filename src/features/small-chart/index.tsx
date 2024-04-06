'use client'
import React from 'react'
import { cn } from '@/shared/lib'
import { getPoints } from './lib'
import { Spinner } from '@/shared/ui'

interface IChartProps {
  prices?: number[]
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
      ? 'stroke-green-500 dark:stroke-green-600 fill-green-400/10'
      : 'stroke-red-600 dark:stroke-red-700 fill-red-400/10'

  React.useEffect(() => {
    if (!ref.current) return
    const pointsSrt = getPoints({ arr: prices, current: ref.current as any })
    setPoints(pointsSrt)
  }, [ref, prices])
  return (
    <div className="relative inline-block overflow-hidden">
      {!points && (
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Spinner size={40} />
        </span>
      )}
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          'inline-block w-full h-full -mx-1',
          strokeColor,
          className
        )}
        preserveAspectRatio="none"
      >
        <polyline
          points={points}
          strokeLinecap="round"
          strokeWidth="1.4"
          vectorEffect="non-scaling-stroke"
        ></polyline>
      </svg>
    </div>
  )
}
