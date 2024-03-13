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
      ? 'stroke-green-500 dark:stroke-green-600'
      : 'stroke-red-600 dark:stroke-red-700'

  React.useEffect(() => {
    if (!ref.current) return
    const pointsSrt = getPoints({ arr: prices, current: ref.current as any })
    setPoints(pointsSrt)
  }, [ref, prices])
  return (
    <div className="relative">
      {!points && (
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Spinner size={40} />
        </span>
      )}
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className={cn('inline-block w-full h-full', strokeColor, className)}
        preserveAspectRatio="none"
      >
        <polyline
          points={points}
          strokeLinecap="round"
          strokeWidth="1.4"
          fill="none"
          vectorEffect="non-scaling-stroke"
        ></polyline>
      </svg>
    </div>
  )
}
