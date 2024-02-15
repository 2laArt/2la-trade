'use client'
import { useRef, type FC, useEffect, useState } from 'react'
import { cn } from '@/shared/lib'
import { getPoints } from '../../lib'

interface IChartProps {
  prices: number[]
  className?: string
}

export const SmallChart: FC<IChartProps> = ({ prices, className }) => {
  const ref = useRef<SVGSVGElement>(null)
  const [points, setPoints] = useState<string>('')

  useEffect(() => {
    if (!ref.current) return
    const pointsSrt = getPoints(prices, ref.current as any)
    setPoints(pointsSrt)
  }, [ref, prices])
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={cn('inline-block w-full h-full', className)}
      preserveAspectRatio="none"
      stroke="green"
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
