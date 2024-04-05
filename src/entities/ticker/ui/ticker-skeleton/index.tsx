import React from 'react'
import { TickerWidget } from '../samples'
import { Spinner } from '@/shared/ui'

const Widget = () => (
  <TickerWidget className="w-full md:w-1/2 max-h-32 aspect-video flex flex-col justify-around">
    {Array.from({ length: 4 }).map((_, idx) => (
      <div key={idx} className="skeleton w-full h-2 rounded-md" />
    ))}
  </TickerWidget>
)
export const TickerSkeleton: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-between">
      <div className="flex items-center md:flex-nowrap flex-wrap gap-3">
        <Widget />
        <Widget />
      </div>
      <div className="py-2 flex justify-center bg-blue-600 rounded-sm w-28 px-4 mt-3 border h-10 border-gray-500 text-white">
        <Spinner size={20} color="white" />
      </div>
    </div>
  )
}
